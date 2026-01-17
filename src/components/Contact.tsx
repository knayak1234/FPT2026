'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { contactPersons, travelInfo, ContactPerson } from '@/lib/data'
import HowToReach from './HowToReach'

function PersonCard({ person, index }: { person: ContactPerson; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      key={person.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-4 backdrop-blur-md text-center hover:shadow-xl hover:scale-105 transition-all duration-300 w-full"
    >
      <div className="flex flex-col items-center">
        {/* Role - Above Photo */}
        <div className="text-xs text-accent font-semibold mb-3 leading-tight px-1">
          {person.role.includes('|') ? (
            person.role.split('|').map((line, idx) => {
              const isConvener = line.trim().startsWith('Convener');
              const isOrganizingSecretary = line.trim().startsWith('Organizing Secretary');
              const isJointOrganizingSecretary = line.trim().startsWith('Joint Organizing Secretary');
              const isPatron = line.trim().startsWith('Patron');
              const isSecondLine = idx > 0;
              return (
                <p key={idx} className={isSecondLine ? 'mt-0.5' : ''}>
                  {isConvener ? (
                    <>
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">{line.split(',')[0]}</span>
                      {line.includes(',') && <span>{line.substring(line.indexOf(','))}</span>}
                    </>
                  ) : isOrganizingSecretary ? (
                    <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Organizing Secretary</span>
                  ) : isJointOrganizingSecretary ? (
                    <span className="text-lg font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Joint Organizing Secretary</span>
                  ) : isPatron ? (
                    <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Patron</span>
                  ) : (
                    line
                  )}
                </p>
              );
            })
          ) : (
            <p>
              {person.role.startsWith('Convener') ? (
                <>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">{person.role.split(',')[0]}</span>
                  {person.role.includes(',') && <span>{person.role.substring(person.role.indexOf(','))}</span>}
                </>
              ) : person.role.startsWith('Organizing Secretary') ? (
                <>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Organizing Secretary</span>
                  {person.role.includes(',') && <span className="text-xs text-accent font-semibold">{person.role.substring(person.role.indexOf(','))}</span>}
                </>
              ) : person.role.startsWith('Joint Organizing Secretary') ? (
                <>
                  <span className="text-lg font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Joint Organizing Secretary</span>
                  {person.role.includes(',') && <span className="text-xs text-accent font-semibold">{person.role.substring(person.role.indexOf(','))}</span>}
                </>
              ) : person.role.startsWith('Patron') ? (
                <>
                  <span className="text-xl font-bold bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent drop-shadow-lg">Patron</span>
                  {person.role.includes(',') && <span className="text-xs text-accent font-semibold">{person.role.substring(person.role.indexOf(','))}</span>}
                </>
              ) : (
                person.role
              )}
            </p>
          )}
        </div>
        
        {/* Profile Photo */}
        <div className="w-40 h-40 mb-3 rounded-full border-4 border-primary/30 bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-lg overflow-hidden">
          {person.image && !imageError ? (
            <Image
              src={person.image}
              alt={person.name}
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white font-bold text-4xl">
              {person.name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()}
            </span>
          )}
        </div>
        
        <h4 className="text-lg font-bold mb-0.5 text-white leading-tight">{person.name}</h4>
        
        {person.mobile && person.email && (
          <div className="flex items-center justify-center gap-2 w-full mt-2 whitespace-nowrap">
            <a
              href={`tel:+91${person.mobile}`}
              className="flex items-center space-x-1 text-gray-200 hover:text-accent transition-colors text-xs shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 {person.mobile}</span>
            </a>
            <a
              href={`mailto:${person.email}`}
              className="flex items-center space-x-1 text-gray-200 hover:text-accent transition-colors text-xs shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="truncate">{person.email}</span>
            </a>
          </div>
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
            Get in touch with the organizing committee
          </p>
        </motion.div>

        {/* Organizing Committee */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Organizing Committee</h3>
          
          {/* First row: Dr. Nakul Seth alone */}
          <div className="flex justify-center mb-8">
            <div className="max-w-md w-full">
              <PersonCard person={contactPersons[0]} index={0} />
            </div>
          </div>

          {/* Second row: Lipsa, Binaya, and Kishora in 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {contactPersons.slice(1, 4).map((person, index) => 
              <PersonCard key={person.id} person={person} index={index + 1} />
            )}
          </div>

          {/* Third row: Joint Organizing Secretaries in 4-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {contactPersons.slice(4).map((person, index) => 
              <PersonCard key={person.id} person={person} index={index + 4} />
            )}
          </div>
        </div>

        {/* How to Reach */}
        <HowToReach />
      </div>
    </section>
  )
}

