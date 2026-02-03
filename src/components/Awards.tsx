'use client'

import { motion } from 'framer-motion'
import { Award, Mic2, LayoutTemplate, Camera } from 'lucide-react'

const AWARD_PHOTOS = [
  '/images/Award_Photos/1234321111.png',
  '/images/Award_Photos/1234567.png',
  '/images/Award_Photos/123ee83a-d994-4934-808f-18ed1c0d6d19-copied-media~2.jpg',
  '/images/Award_Photos/2344442.png',
  '/images/Award_Photos/442221.png',
]

const posterAwards = [
  { rank: '1st', name: 'Rupanjali Juadi', affiliation: "Parbati Giri Women's College, Bargarh" },
  { rank: '2nd', name: 'Siddhesh Nanda', affiliation: 'Panchayat College, Bargarh' },
  { rank: '3rd', name: 'Topeswar Meher', affiliation: 'Guru Ghasidas Vishwavidyalaya' },
  { rank: '3rd', name: 'Raghunath Pattnaik', affiliation: 'Sri Jaydev College of Education and Technology, Bhubaneswar' },
  { rank: '3rd', name: 'Rupali Seth', affiliation: 'Panchayat College, Bargarh' },
]

const oralAwards = [
  { rank: '1st', name: 'Ayan Roy', affiliation: 'Guru Ghasidas Vishwavidyalaya' },
  { rank: '2nd', name: 'Roshni Pattanayak', affiliation: 'CIPET, Bhubaneswar' },
  { rank: '3rd', name: 'Dr. Laxmipriya Nanda', affiliation: 'IISc Bangalore' },
]

export default function Awards() {
  return (
    <section id="awards" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight pb-2">
            <span className="inline-flex items-center justify-center gap-3">
              <Award className="w-10 h-10 md:w-12 md:h-12" />
              Awards
            </span>
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Congratulations to all the winners!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Poster Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary dark:text-accent flex items-center gap-2">
                <LayoutTemplate className="w-7 h-7" />
                Poster
              </h3>
              <ul className="space-y-4">
                {posterAwards.map((entry, i) => (
                  <li
                    key={`${entry.name}-${i}`}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-gray-200/80 dark:border-white/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-lg bg-primary/25 text-primary dark:bg-primary/20 dark:text-accent font-bold text-sm">
                        {entry.rank}
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">{entry.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-right pl-11 sm:pl-0">
                      {entry.affiliation}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Oral Speaker Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass rounded-2xl p-6 sm:p-8 backdrop-blur-md border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary dark:text-accent flex items-center gap-2">
                <Mic2 className="w-7 h-7" />
                Oral Speaker
              </h3>
              <ul className="space-y-4">
                {oralAwards.map((entry) => (
                  <li
                    key={entry.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-gray-200/80 dark:border-white/10 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center min-w-[2.25rem] h-8 px-2 rounded-lg bg-primary/25 text-primary dark:bg-primary/20 dark:text-accent font-bold text-sm">
                        {entry.rank}
                      </span>
                      <span className="font-semibold text-gray-800 dark:text-gray-100">{entry.name}</span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-right pl-11 sm:pl-0">
                      {entry.affiliation}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Award Photos Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-primary dark:text-accent flex items-center justify-center gap-2">
              <Camera className="w-7 h-7" />
              Award Photos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {AWARD_PHOTOS.map((src, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`View award photo ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`FPT 2026 award ceremony ${i + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
