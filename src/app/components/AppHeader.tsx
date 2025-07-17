import Image from 'next/image'
import { FC } from 'react'

interface AppHeaderProps {
  onDownload: () => void
}

export const AppHeader: FC<AppHeaderProps> = ({ onDownload }) => {
  return (
    <header className="sticky top-0 z-10 h-[60px] flex items-center justify-between px-4 border-b bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <Image src="logo.png" height={60} width={150} alt="Logo" />
      </div>

      <button
        onClick={onDownload}
        className="bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-950 transition cursor-pointer"
      >
        Download PDF
      </button>
    </header>
  )
}
