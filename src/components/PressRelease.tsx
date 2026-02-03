'use client'

import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'

const PRESS_IMAGES = [
  '/images/Press_Release/1.jpeg',
  '/images/Press_Release/2.jpeg',
  '/images/Press_Release/3.jpeg',
  '/images/Press_Release/4.jpeg',
]

export default function PressRelease() {
  return (
    <section id="press" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight pb-2">
            <span className="inline-flex items-center justify-center gap-3">
              <Newspaper className="w-10 h-10 md:w-12 md:h-12" />
              Press Release
            </span>
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Newspaper coverage of FPT 2026
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESS_IMAGES.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-lg hover:shadow-xl transition-shadow"
              >
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={`View press clipping ${i + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`FPT 2026 press coverage ${i + 1}`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
