import { Item } from '../components/renderItems'

export interface Section {
  title: string
  items: Item[]
}

export const contactInfo = {
  fullName: 'Amin Jafarlou',
  email: 'jafarlou.amin@gmail.com',
  phone: '+98 937 066 2186',
  scholar: 'scholar.google.com/citations?user=_eCXqRcAAAAJ&hl=en',
  website: 'aminjafarlou.com',
}

export const sections: Section[] = [
  {
    title: 'Education',
    items: [
      {
        title: 'M.Sc. in Chemical Engineering (Specialty: Reservoir Engineering)',
        subItems: [
          { title: 'University of Tehran, Tehran, Iran, 2017 – 2020' },
          { title: 'Grade Point Average: 18.06 / 20.00' },
          {
            title:
              'Thesis Subject:  Dynamic of adsorption for complex fluids interfaces: development of new models for surfactant, nanoparticle and polymer complexes',
          },
        ],
      },
      {
        title: 'B.Sc. in Petroleum Engineering',
        subItems: [
          { title: 'Sharif University of Technology, Tehran, Iran, 2012 – 2016' },
          {
            title:
              'Thesis Subject: The Effect of “Potential Determining Ions Added to Smart-water” on rock properties in Enhanced Oil Recovery, using streaming potential method',
          },
          { title: 'Grade Point Average: 15.94 / 20.00' },
        ],
      },
      {
        title: 'High-School Diploma in Mathematics and Physics',
        subItems: [
          {
            title:
              'National Organization of Development of Exceptional Talents High School Center, Tabriz, Iran, 2008 – 2012',
          },
          { title: 'Graduate Grade Point Average: 19.24 / 20.0' },
        ],
      },
    ],
  },

  {
    title: 'Publications',
    items: [
      {
        title:
          'Dynamics of adsorption of CTAB-Silica nanoparticle complexes, New experiments and modeling approach (2021)',
        subItems: [
          {
            title: 'Colloids and Surfaces A: Physicochemical and Engineering Aspects 629, 127448',
          },
        ],
      },
      {
        title:
          'Streaming Potential measurement to quantify wetting state of rocks, In-house novel setup experience (2017)',
        subItems: [
          {
            title: 'IOR 2017 - 19th European Symposium on Improved Oil Recovery',
          },
        ],
      },
    ],
  },

  {
    title: 'Professional Experience',
    items: [
      {
        title: 'Azkivam Co., Tehran, Iran, (2023 – Present)',
        subItems: [{ title: 'Software Engineer Team Lead, leading front-end team of developers' }],
      },
      {
        title: ' Co, Tehran, Iran (2021 – 2023)',
        subItems: [
          {
            title:
              'Researcher and Software Engineer, applying Kalman Filter method for predicting three-phase flow in wellbore conditions',
          },
        ],
      },
      {
        title: 'Koupal Energy & Development Co, Tehran, Iran (2020 - 2021)',
        subItems: [{ title: 'Researcher for national project of EOR for Iranian oil fields' }],
      },
    ],
  },

  {
    title: 'Research Experience',
    items: [
      {
        title:
          'Technical Manager and Research Assistant at Surface Phenomena and Colloidal System Laboratory (Dr. Javadi’s Lab), Tehran University (2018 – 2021)',
        subItems: [
          {
            title: 'Research on various systems like Complex fluids, Proteins, DNA, Surfactants, and Nano-particles',
          },
          {
            title:
              'Polymer-surfactant electrostatic interactions for designing Janus micro and nano-encapsulations and their applicability in drug delivery',
          },
          {
            title:
              'Dynamic adsorption behavior of hydrophilic nanoparticles + cationic surfactants at air/water interface',
          },
        ],
      },
      {
        title: 'Research Assistant of Enhanced Oil Recovery Laboratory, Sharif University of Technology (2015 – 2018)',
      },
    ],
  },

  {
    title: 'Teaching Experience',
    items: [
      { title: 'Teaching Assistant of Heat Transfer Course (2019)' },
      { title: 'Teaching Assistant of Surface Phenomena Course (2019)' },
    ],
  },

  {
    title: 'Languages',
    items: [
      {
        title: 'English (Fluent)',
        subItems: [
          {
            title: 'TOEFL iBT: 115 out of 120',
            subItems: [{ title: 'Reading: 30/30, Listening: 30/30, Speaking: 28/30, Writing: 27/30' }],
          },
        ],
      },
      { title: 'Persian (Native)' },
      { title: 'Turkish (Native)' },
    ],
  },

  {
    title: 'Selected Courses',
    items: [
      {
        title: 'M.Sc. Courses',
        subItems: [
          { title: 'Surface Phenomena, 19.50/20.00 (Top Rank)' },
          { title: 'Advanced Enhanced Oil Recovery, 19.20/20.0 (Top Rank)' },
          { title: 'Fractured Reservoirs, 18.50/20.00 (2nd Rank)' },
          { title: 'Seminar & Research Method, 18.50/20.0' },
        ],
      },
      {
        title: 'B.Sc. Courses',
        subItems: [
          { title: 'Computer Programming: Pascal, 17.20/20.0' },
          { title: 'Fluid Mechanics, 18.00/20.0' },
          { title: 'Petroleum Engineering Software (MATLAB, Comsol), 18.00/20.00 (2nd Rank)' },
        ],
      },
    ],
  },

  {
    title: 'Honors and Awards',
    items: [
      {
        title: 'Ranked 3rd in Overall GPA Among Students of Reservoir Engineering, M.Sc. Degree (2017–present)',
      },
      {
        title:
          'Ranked 37th Among More Than 3000 Participants in The Reservoir Engineering Nationwide University Entrance Exam for M.Sc. Degree (2017)',
      },
      {
        title:
          'Ranked among top 0.3% of almost 300,000 participants in the Nationwide University Entrance Exam for B.Sc. Degree (2012)',
      },
      {
        title: 'A member of NODET (National Organization for Development of Exceptional Talents) (2005–2012)',
      },
    ],
  },

  {
    title: 'References',
    items: [
      {
        title: 'Dr. Aliyar Javadi',
        subItems: [
          {
            title:
              'Professor, Institute of Petroleum Engineering, Department of Chemical Engineering, University of Tehran',
          },
          {
            title: 'Guest Professor, Technical University of Dresden',
          },
          {
            title: 'Email: aliyar.javadi@tu-dresden.de',
          },
        ],
      },
      {
        title: 'Dr. Shahab Ayatollahi',
        subItems: [
          {
            title:
              'Professor, Institute of Petroleum Engineering, Department of Chemical Engineering, Sharif University of Technology',
          },
          {
            title: 'Email: shahab@sharif.edu',
          },
        ],
      },
      {
        title: 'Dr. Rasoul Mokhtari',
        subItems: [
          {
            title: 'Postdoc Fellow, Center for Oil and Gas, Technical University of Denmark',
          },
          {
            title: 'Email: Rasoul.mokhtari.put@gmail.com',
          },
        ],
      },
    ],
  },

  {
    title: 'Extracurricular Activities and Hobbies',
    items: [
      {
        title: 'Basketball',
        subItems: [
          {
            title: 'Member of Sharif University of Technology Basketball Team for three years',
          },
          {
            title: 'Won three trophies in different competitions',
          },
        ],
      },
      {
        title: 'Member of Emam Ali NGO',
        subItems: [
          {
            title:
              'A charity group dedicated to children and women who need to be supported from a wide range of inconveniences',
          },
        ],
      },
      {
        title: 'Translation',
        subItems: [
          {
            title: 'Translating different books and articles from Persian to English and vice versa',
          },
        ],
      },
    ],
  },
]
