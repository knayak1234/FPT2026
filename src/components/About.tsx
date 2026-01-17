'use client'

import { motion } from 'framer-motion'
import { Target, Users, Award, Globe } from 'lucide-react'
import SubThemes from './SubThemes'

const highlights = [
  { icon: Target, title: 'Cutting-edge Research', description: 'Explore the latest developments in physics and technology' },
  { icon: Users, title: 'Networking Opportunities', description: 'Connect with academicians, scientists, and researchers' },
  { icon: Award, title: 'Awards & Recognition', description: 'Prizes for outstanding oral and poster presentations' },
  { icon: Globe, title: 'Hybrid Participation', description: 'Join us physically or virtually from anywhere' },
]

export default function About() {
  return (
    <section id="about" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conference Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About the Conference
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            This National conference aims to bring together academicians, 
            scientists, research scholars and students to discuss cutting-edge developments. From the quantum scale to 
            the cosmos, we will explore how physical sciences act as a catalyst for sustainable technologies.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 backdrop-blur-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* About Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight pb-2">
            About the Organizers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bargarh District */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">Bargarh District</h3>
              <p className="text-gray-200 leading-relaxed">
                Known as the &quot;Rice Bowl of Odisha,&quot; Bargarh is a district rich in cultural heritage. 
                It is famous for the Dhanu Yatra, one of the largest open-air theatrical festivals in the world, 
                celebrating the rich cultural traditions of Odisha.
              </p>
            </div>

            {/* Panchayat College */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">Panchayat College, Bargarh</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• Established: <strong className="text-white">1960</strong></li>
                <li>• NAAC Accredited <strong className="text-white">&apos;B&apos; Grade</strong></li>
                <li>• <strong className="text-white">21 UG</strong> and <strong className="text-white">15 PG</strong> courses</li>
                <li>• Affiliated to <strong className="text-white">Sambalpur University</strong></li>
              </ul>
            </div>

            {/* PG Department of Physics */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">PG Department of Physics</h3>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong className="text-white">32 seats</strong> each for UG & PG</li>
                <li>• Advanced laboratories</li>
                <li>• Strong placement record</li>
                <li>• Active research publications</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sub-themes */}
        <SubThemes />
      </div>
    </section>
  )
}

