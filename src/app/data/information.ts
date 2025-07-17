import { Item } from '../components/renderItems'

export interface Section {
  title: string
  items: Item[]
}

export const contactInfo = {
  fullName: 'Amin Jafarlou',
  email: 'amin.jafarlou@example.com',
  phone: '+98 912 345 6789',
  location: 'Tehran, Iran',
  website: 'https://aminjafarlou.com',
}

export const sections: Section[] = [
  {
    title: 'Education',
    items: [
      {
        title: 'Bachelor of Science in Petroleum Engineering, Sharif University of Technology',
      },
      {
        title: 'Master of Science in Chemical Engineering, University of Tehran',
      },
    ],
  },
  {
    title: 'Publications',
    items: [
      {
        title: 'Dynamics of adsorption of CTAB-Silica nanoparticle complexes, New experiments and modeling approach',
        subItems: [
          {
            title: 'Colloids and Surfaces A: Physicochemical and Engineering Aspects 629, 127448 (2021)',
          },
        ],
      },
      {
        title: 'Streaming Potential measurement to quantify wetting state of rocks, In-house novel setup experience',
        subItems: [
          {
            title: 'IOR 2017 - 19th European Symposium on Improved Oil Recovery (2017)',
          },
        ],
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        title: 'English (Fluent)',
        subItems: [
          { title: 'TOEFL iBT: 115 out of 120' },
          { title: 'Reading: 30/30' },
          { title: 'Listening: 30/30' },
          { title: 'Speaking: 28/30' },
          { title: 'Writing: 27/30' },
        ],
      },
      { title: 'Persian (Native)' },
      { title: 'Turkish (Native)' },
    ],
  },
]
