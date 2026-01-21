'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { speakers, Speaker } from '@/lib/data'

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={speaker.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass rounded-2xl p-6 backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-36 h-36 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 overflow-hidden">
          {speaker.image && !imageError ? (
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={144}
              height={144}
              className={`w-full h-full object-cover rounded-full ${speaker.id === 4 ? 'scale-95' : 'scale-105'}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <User className="w-14 h-14 text-white" />
          )}
        </div>
        <h3 className="text-lg font-bold mb-1 text-white">
          {speaker.name}
        </h3>
        <p className="text-sm text-gray-300">
          {speaker.affiliation}
        </p>
      </div>
    </motion.div>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="section-dark pt-8 pb-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:from-dark-bg dark:to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed">
            Plenary Speakers
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Renowned experts and researchers from prestigious institutions across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

