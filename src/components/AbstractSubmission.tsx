'use client'

import { motion } from 'framer-motion'
import { conferenceData } from '@/lib/data'

export default function AbstractSubmission() {
  return (
    <section id="abstract" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:from-dark-bg dark:to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed">
            Abstract Submission Guidelines
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Format Requirements</h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Single column, A4 size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Line spacing: 1.5</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Font size: 12</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Font style: Times New Roman</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Maximum 300 words</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Must include: purpose, methods, findings, conclusions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>2+ references required</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Submit to: <a href={`mailto:${conferenceData.abstractEmail}`} className="text-primary dark:text-accent hover:underline">{conferenceData.abstractEmail}</a></span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Presentation Types</h4>
              <div className="mb-4">
                <h5 className="font-semibold mb-2 text-white">Oral Presentation</h5>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• Duration: 10 minutes + 2 minutes Q&A</li>
                  <li>• Visual aids encouraged (PowerPoint)</li>
                  <li>• Technical support: Computer, projector, microphone</li>
                  <li>• Submit slides in PPT/PDF format</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-white">Poster Presentation</h5>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>• Dimensions: 36&quot; (W) × 48&quot; (L) - Portrait</li>
                  <li>• Include: Title, authors, affiliations, objectives, methodology, findings, conclusions, acknowledgements, references</li>
                </ul>
              </div>
              <p className="mt-4 text-sm font-semibold text-accent">
                Awards: Prizes for outstanding oral &amp; poster presentations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
