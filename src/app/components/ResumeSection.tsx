import { sections } from '../data/information'
import { renderItems } from './renderItems'

export const ResumeSection = () => {
  return sections.map((section, index) => (
    <div key={index} className="space-y-4 mt-8">
      <div className="bg-sky-800 text-sky-50 text-center text-lg font-semibold py-2 rounded">{section.title}</div>
      {renderItems(section.items)}
    </div>
  ))
}
