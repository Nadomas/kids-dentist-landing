'use client'

import { TranslationProvider } from '@/lib/i18n/useTranslation'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustSection } from '@/components/sections/TrustSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <TranslationProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <TrustSection />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </TranslationProvider>
  )
}
