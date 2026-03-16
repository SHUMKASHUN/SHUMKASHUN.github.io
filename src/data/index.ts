// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

// ============================================================
// Data loader (English only)
// ============================================================

import type {
  Research, Experience, NewsItem, About, Publication,
  ProjectItem, Award, ExperienceEntry,
} from '../types'

// ── Markdown glob imports (each .md → { frontmatter..., body: html }) ──

// English (default)
const projectMdsEn = import.meta.glob('/content/projects/*.md', { eager: true }) as Record<string, { default: Record<string, unknown> }>
const articleMdsEn = import.meta.glob('/content/articles/*.md', { eager: true }) as Record<string, { default: Record<string, unknown> }>
const publicationMdsEn = import.meta.glob('/content/publications/*.md', { eager: true }) as Record<string, { default: Record<string, unknown> }>
const aboutMdEn = import.meta.glob('/content/about.md', { eager: true }) as Record<string, { default: Record<string, unknown> }>

function collectMd(modules: Record<string, { default: Record<string, unknown> }>): Record<string, unknown>[] {
  return Object.values(modules).map(m => {
    const { body, ...frontmatter } = m.default
    return { ...frontmatter, _body: body }
  })
}

// Convert Markdown body into the fields components expect
function mdToProject(raw: Record<string, unknown>): ProjectItem {
  const { _body, ...rest } = raw
  const bodyStr = (_body as string) || ''

  const highlights: string[] = []
  const lines = bodyStr.replace(/<[^>]+>/g, '').split('\n')
  for (const line of lines) {
    const m = line.match(/^[-*]\s+(.+)/)
    if (m) highlights.push(m[1].trim())
  }

  const summary = lines
    .filter(l => l.trim() && !l.match(/^[-*#]/) && !l.match(/^</))
    .map(l => l.trim())
    .join(' ')

  return {
    summary,
    highlights: highlights.length > 0 ? highlights : undefined,
    ...rest,
  } as unknown as ProjectItem
}

function mdToPublication(raw: Record<string, unknown>): Publication {
  const { _body, ...rest } = raw
  const bodyStr = (_body as string) || ''
  const abstract = bodyStr.replace(/<[^>]+>/g, '').trim()
  return { abstract, ...rest } as unknown as Publication
}

function mdToAbout(raw: Record<string, unknown>): About {
  const { _body, ...rest } = raw
  const bodyStr = (_body as string) || ''
  const journey = bodyStr.replace(/<[^>]+>/g, '').trim()
  return { journey, ...rest } as unknown as About
}

// ── JSON imports (both languages) ──

import experienceJsonEn from '@content/experience.json'
import newsJsonEn from '@content/news.json'
import awardsJsonEn from '@content/awards.json'
import researchJsonEn from '@content/research.json'
import logosJsonEn from '@content/logos.json'
import siteJsonEn from '@content/site.json'

// ── Build dataset ──

const enData = {
  projects: collectMd(projectMdsEn).map(mdToProject),
  articles: collectMd(articleMdsEn).map(mdToProject),
  publications: collectMd(publicationMdsEn).map(mdToPublication),
  about: mdToAbout(Object.values(aboutMdEn)[0]?.default ?? {}),
  research: researchJsonEn as Research,
  experience: { ...experienceJsonEn, professional: [], academic: [] } as Experience,
  experienceTimeline: experienceJsonEn.timeline as ExperienceEntry[],
  news: newsJsonEn as NewsItem[],
  awards: awardsJsonEn as Award[],
  institutionLogos: logosJsonEn as Record<string, string>,
  siteConfig: siteJsonEn,
}

export function getLocalizedData() {
  return enData
}

// ── Default exports (English, for backward compatibility) ──

export const projects = enData.projects
export const articles = enData.articles
export const publications = enData.publications
export const about = enData.about
export const research = enData.research
export const experience = enData.experience
export const experienceTimeline = enData.experienceTimeline
export const news = enData.news
export const awards = enData.awards
export const institutionLogos = enData.institutionLogos

// ── Helper functions ──

export const getPublicationsByYear = (year: number) =>
  publications.filter(pub => pub.year === year)

export const getPublicationsByVenue = (venueType: string) =>
  publications.filter(pub => pub.venueType === venueType)

export const getFirstAuthorPublications = () =>
  publications.filter(pub => pub.isFirstAuthor)

export const getPublicationStats = () => {
  const stats = {
    total: publications.length,
    byYear: {} as Record<number, number>,
    byVenue: {} as Record<string, number>,
    firstAuthor: 0,
    correspondingAuthor: 0,
    withCode: 0,
    withDataset: 0,
  }
  publications.forEach(pub => {
    stats.byYear[pub.year] = (stats.byYear[pub.year] || 0) + 1
    stats.byVenue[pub.venueType] = (stats.byVenue[pub.venueType] || 0) + 1
    if (pub.isFirstAuthor) stats.firstAuthor++
    if (pub.isCorrespondingAuthor) stats.correspondingAuthor++
    if (pub.links.code) stats.withCode++
    if (pub.links.dataset) stats.withDataset++
  })
  return stats
}
