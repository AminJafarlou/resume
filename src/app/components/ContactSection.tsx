import { contactInfo } from '../data/information'

export const ContactSection = () => {
  return (
    <div className="text-center flex justify-between">
      <h1 className="text-2xl text-left font-bold mb-4">{contactInfo.fullName}</h1>
      <div className="space-y-1 inline-block">
        <div className="flex gap-2">
          <span className="font-medium">Email:</span>
          <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
            {contactInfo.email}
          </a>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">Phone:</span>
          <span>{contactInfo.phone}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">Google Scholar:</span>
          <a href={`https://${contactInfo.scholar}`} target='_blank' className="text-blue-600 hover:underline">
            Link
          </a>
        </div>
        {/* <div className="flex gap-2">
          <span className="font-medium">Website:</span>
          <a href={`https://${contactInfo.website}`} className="text-blue-600 hover:underline">
            {contactInfo.website}
          </a>
        </div> */}
      </div>
    </div>
  )
}
