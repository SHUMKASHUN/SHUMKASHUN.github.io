// ============================================================
// Type definitions — developers only
//
// If you're just editing your portfolio content, you can
// IGNORE this file entirely. It's used internally by the
// template components for type safety.
// ============================================================

export interface NewsLink {
  text: string
  url: string
  icon?: string
}

export interface NewsDetailItem {
  title: string
  shortLabel?: string
  summary?: string
  links: NewsLink[]
}

export interface NewsItem {
  type: string
  badge: string
  secondaryBadge?: string
  icon: string
  iconColor: string
  title: string
  description: string
  date?: string
  emoji?: string
  sortDate?: string
  links: NewsLink[]
  detailItems?: NewsDetailItem[]
}

export interface Research {
  currentResearch: {
    lab: string
    emoji: string
    advisor?: string
    focus: string
    link: string
    institution?: string
  }[]
}

export interface Experience {
  education: {
    courses: {
      course: string
      institution: string
      year: string
      start?: string
      end?: string
      details?: string[]
      honors?: string[]
    }[]
  }
  professional: {
    title: string
    company: string
    period: string
    description?: string
    isCurrent?: boolean
  }[]
  academic: {
    title: string
    organization: string
    period?: string
    description?: string
    isCurrent?: boolean
  }[]
  reviewing?: {
    venue: string
    role: string
  }[]
}

export type ExperienceCategory = 'research' | 'industry' | 'academic' | 'leadership'
export type RoleType = 'research' | 'mle' | 'sde' | 'teaching' | 'leadership' | 'intern'

export interface ExperienceEntry {
  title: string
  company: string
  companyUrl?: string
  location?: string
  start: string
  end?: string
  category: ExperienceCategory
  roleType?: RoleType
  summary?: string
  highlights: string[]
  isCurrent?: boolean
}

export interface JourneyPhase {
  period: string
  title: string
  org: string
  description: string
  tags?: string[]
}

export interface About {
  journey: string
  journeyPhases?: JourneyPhase[]
  mentorship?: {
    heading: string
    description?: string
    mentees: {
      name: string
      url: string
      note?: string
    }[]
  }
  version: {
    current: string
    history: {
      version: string
      title: string
      features: string[]
    }[]
  }
}

export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectItem {
  title: string
  summary: string
  link?: string
  extraLinks?: ProjectLink[]
  tags: string[]
  date?: string
  category: 'robotics' | 'nlp' | 'web-app' | 'data' | 'tooling' | 'healthcare'
  highlights?: string[]
  featuredImage?: string
  isOpenSource?: boolean
  role?: 'independent' | 'lead' | 'tech-lead' | 'maintainer'
  story?: string
  badge?: string
  featured?: boolean
}

export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  venueType: 'conference' | 'journal' | 'workshop' | 'demo' | 'preprint'
  year: number
  month?: string
  status: 'accepted' | 'published' | 'preprint'
  abstract?: string
  keywords?: string[]
  links: {
    paper?: string
    arxiv?: string
    projectPage?: string
    code?: string
    dataset?: string
    demo?: string
  }
  specialBadges?: string[]
  citations?: number
  isFirstAuthor?: boolean
  isCorrespondingAuthor?: boolean
  isCoFirst?: boolean
  coFirstAuthors?: string[]
  emoji?: string
  featuredImage?: string
}

export interface Award {
  title: string
  org?: string
  date: string
  kind?: 'grant' | 'hackathon' | 'travel' | 'scholarship' | 'honor' | 'employment' | 'competition' | 'innovation' | 'other'
  link?: string
  egg?: string
}
