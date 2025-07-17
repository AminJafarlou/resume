'use client'

import { AppHeader } from './components/AppHeader'
import { ContactSection } from './components/ContactSection'
import { ResumeSection } from './components/ResumeSection'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      <AppHeader />
      <ContactSection />
      <ResumeSection />
    </div>
  )
}
