'use client'

import { useRef } from 'react'
import { AppHeader } from './components/AppHeader'
import { ContactSection } from './components/ContactSection'
import { ResumeSection } from './components/ResumeSection'
import { downloadPDF } from './core/downloadPdf'

export default function Home() {
  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = () => {
    if (resumeRef.current) {
      downloadPDF(resumeRef.current, 'amin-jafarlou-resume.pdf')
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-8">
      <AppHeader onDownload={handleDownloadPDF} />

      <div ref={resumeRef} className="export-pdf:bg-white">
        <ContactSection />
        <ResumeSection />
      </div>
    </div>
  )
}
