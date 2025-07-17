import Image from 'next/image'
import { FC } from 'react'

interface AppHeaderProps {
  onDownload: () => void
}

export const AppHeader: FC<AppHeaderProps> = ({ onDownload }) => {
  return (
    <header className="sticky top-0 z-10 h-[60px] flex items-center justify-between px-4 border-b bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" height={40} width={120} alt="Logo" />
      </div>

      <button
        onClick={onDownload}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition cursor-pointer"
      >
        Download PDF
      </button>
    </header>
  )
}
