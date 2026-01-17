'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { timelineEvents } from '@/lib/data'

export default function Timeline() {
  return (
    <section id="schedule" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Important Dates
          </h2>
          <p className="text-lg text-gray-200">
            Mark your calendars for these important deadlines
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          <div className="space-y-4">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-dark-bg transform md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div
                  className={`glass rounded-2xl p-4 backdrop-blur-md ml-16 md:ml-0 md:w-[45%] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-1.5">
                    <Calendar className="w-4 h-4 text-primary dark:text-accent" />
                    <span className="text-sm font-semibold text-primary dark:text-accent">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="text-gray-300 mt-1.5 text-sm">
                      {event.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

