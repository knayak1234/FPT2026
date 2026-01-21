'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { subThemes } from '@/lib/data'

export default function SubThemes() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="subthemes" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Sub-themes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {subThemes.map((theme, index) => (
          <motion.div
            key={theme.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 backdrop-blur-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setExpandedId(expandedId === theme.id ? null : theme.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-primary dark:text-accent flex-1">
                {theme.title}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  expandedId === theme.id ? 'rotate-180' : ''
                }`}
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              {theme.description}
            </p>
            <motion.div
              initial={false}
              animate={{
                height: expandedId === theme.id ? 'auto' : 0,
                opacity: expandedId === theme.id ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-200 mb-2">Topics:</p>
                <ul className="space-y-1">
                  {theme.topics.map((topic, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary dark:bg-accent rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

