'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { LANGUAGES, Language } from '@/lib/constants'

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="flex items-center space-x-2">
      {LANGUAGES.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code as Language)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`
            px-3 py-1 rounded-full text-sm font-medium transition-all duration-300
            ${language === lang.code 
              ? 'bg-primary text-white shadow-lg' 
              : 'bg-bg-alt text-text hover:bg-bg'
            }
          `}
        >
          {lang.flag} {lang.name}
        </motion.button>
      ))}
    </div>
  )
}
