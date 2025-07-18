'use client'

import { AppHeader } from './components/AppHeader'
import { ContactSection } from './components/ContactSection'
import { ResumeSection } from './components/ResumeSection'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pb-8 space-y-8">
      <AppHeader />
      <div className="px-2">
        <ContactSection />
        <ResumeSection />
      </div>
    </div>
  )
}
