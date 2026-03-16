// SPDX-FileCopyrightText: 2026 Yaoyao(Freax) Qian <limyoonaxi@gmail.com>
// SPDX-License-Identifier: GPL-3.0-only

import { useMemo } from 'react'
import { getLocalizedData } from '../data'
import { getLocalizedSiteConfig, getLocalizedSiteOwner } from '../site.config'

export function useLocalizedData() {
  return useMemo(() => {
    const data = getLocalizedData()
    const siteConfig = getLocalizedSiteConfig()
    const siteOwner = getLocalizedSiteOwner()
    return { ...data, siteConfig, siteOwner }
  }, [])
}
