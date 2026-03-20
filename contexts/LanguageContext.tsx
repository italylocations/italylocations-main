'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { type Lang, translations, type Translations } from '@/lib/i18n'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
})

function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'en'
  const code = navigator.language?.slice(0, 2).toLowerCase()
  if (code === 'it') return 'it'
  if (code === 'es') return 'es'
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    const saved = localStorage.getItem('il-lang') as Lang | null
    const resolved = saved ?? detectBrowserLang()
    setLangState(resolved)
  }, [])

  function setLang(l: Lang) {
    setLangState(l)
    localStorage.setItem('il-lang', l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
