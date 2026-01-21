'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { contactPersons, ContactPerson } from '@/lib/data'
import HowToReach from './HowToReach'

// Only show the 3 key contacts: Dr. Lipsa Nanda, Dr. Kishora Nayak, Dr. Binaya Kumar Sahu
const keyContacts = contactPersons.filter(p => 
  p.name === "Dr. Lipsa Nanda" || 
  p.name === "Dr. Kishora Nayak" || 
  p.name === "Dr. Binaya Kumar Sahu"
);

function ContactCard({ person, index }: { person: ContactPerson; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={person.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 backdrop-blur-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        {/* Profile Photo */}
        <div className="w-32 h-32 mb-4 rounded-full border-4 border-primary/30 bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg overflow-hidden">
          {person.image && !imageError ? (
            <Image
              src={person.image}
              alt={person.name}
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white font-bold text-3xl">
              {person.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()}
            </span>
          )}
        </div>
        
        <h4 className="text-xl font-bold mb-1 text-white">{person.name}</h4>
        
        {/* Role */}
        <p className="text-sm text-accent font-semibold mb-3">
          {person.role.split('|')[0]}
        </p>
        
        {/* Contact Details */}
        {person.mobile && (
          <a
            href={`tel:+91${person.mobile}`}
            className="flex items-center space-x-2 text-gray-200 hover:text-accent transition-colors text-sm mb-2"
          >
            <Phone className="w-4 h-4" />
            <span>+91 {person.mobile}</span>
          </a>
        )}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="flex items-center space-x-2 text-gray-200 hover:text-accent transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            <span>{person.email}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-dark pt-16 pb-20 scroll-mt-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            For any queries, please contact us
          </p>
        </motion.div>

        {/* Key Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {keyContacts.map((person, index) => 
            <ContactCard key={person.id} person={person} index={index} />
          )}
        </div>

        {/* How to Reach */}
        <HowToReach />
      </div>
    </section>
  )
}

