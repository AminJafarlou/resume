import { PDFDownloadLink } from '@react-pdf/renderer'
import { contactInfo } from '../data/information'
import { PagePdf } from './pdf/PagePdf'

export const AppHeader = () => {
  return (
    <header className="sticky top-0 z-10 h-[60px] flex items-center justify-between px-4 bg-sky-800 shadow-sm shadow-sky-100">
      <h1 className="text-white text-2xl font-bold">{contactInfo.fullName}</h1>

      <PDFDownloadLink
        document={<PagePdf />}
        fileName={`${contactInfo.fullName} Resume.pdf`}
        className="bg-sky-50 text-sky-800 px-4 py-2 rounded hover:bg-sky-200 transition cursor-pointer font-bold"
      >
        {({ loading, error }) => (error ? 'Failed to load PDF' : loading ? 'Loading document…' : 'Download PDF')}
      </PDFDownloadLink>
    </header>
  )
}
