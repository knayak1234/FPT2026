'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const dhanuyatraImages = [
  '/images/Dhanuyatra/dhanuyatra_1.png',
  '/images/Dhanuyatra/dhanuyatra_2.png',
  '/images/Dhanuyatra/dhanuyatra_3.png',
  '/images/Dhanuyatra/dhanuyatra_4.png',
  '/images/Dhanuyatra/dhanuyatra_5.png',
  '/images/Dhanuyatra/dhanuyatra_6.png',
  '/images/Dhanuyatra/dhanuyatra_7.png',
  '/images/Dhanuyatra/dhanuyatra_8.png',
]

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <section id="about" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Organizers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight pb-2">
            About the Organiser
          </h2>

          {/* College Building Image with Info */}
          <div className="glass rounded-2xl p-8 backdrop-blur-md mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* College Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="/images/College_Building.png"
                  alt="Panchayat College, Bargarh"
                  className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* College Description */}
              <div>
                <h3 className="text-3xl font-bold mb-4 text-primary dark:text-accent">Panchayat College, Bargarh, Odisha</h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Established in <strong className="text-white">1960</strong>, Panchayat College is one of the premier educational 
                  institutions in Western Odisha. With over six decades of academic excellence, the college has been a beacon of 
                  higher education, nurturing generations of scholars, scientists, and professionals.
                </p>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    NAAC Accredited <strong className="text-white">&apos;B&apos; Grade</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong className="text-white">21 UG</strong> and <strong className="text-white">15 PG</strong> courses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Affiliated to <strong className="text-white">Sambalpur University</strong>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    State-of-the-art infrastructure and laboratories
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bargarh District - Expandable */}
            <div 
              className="glass rounded-2xl p-8 backdrop-blur-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-primary dark:text-accent">Bargarh District</h3>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <p className="text-gray-200 leading-relaxed">
                Known as the &quot;Rice Bowl of Odisha,&quot; Bargarh is a district rich in cultural heritage. 
                It is famous for the Dhanu Yatra, one of the largest open-air theatrical festivals in the world, 
                celebrating the rich cultural traditions of Odisha. The district has produced numerous distinguished 
                scholars and has a vibrant academic community.
              </p>
              
              {/* Expandable Dhanu Yatra Images */}
              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-gray-600 mt-6">
                  <p className="text-sm font-semibold text-gray-200 mb-4">Dhanu Yatra Festival - World&apos;s Largest Open-Air Theatre:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {dhanuyatraImages.map((img, idx) => (
                      <div key={idx} className="relative overflow-hidden rounded-lg aspect-square">
                        <img
                          src={img}
                          alt={`Dhanu Yatra ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <p className="text-xs text-gray-400 mt-4 flex items-center gap-1">
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                {isExpanded ? 'Click to collapse' : 'Click to see Dhanu Yatra images'}
              </p>
            </div>

            {/* P.G. Department of Physics */}
            <div className="glass rounded-2xl p-8 backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-accent">P.G. Department of Physics</h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                The Post Graduate Department of Physics is one of the most active departments, committed to excellence 
                in teaching and research.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <strong className="text-white">32 seats</strong> each for UG & PG programs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Ph.D. Research Scholar and Research Associates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Strong placement and research record
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  Active research publications in peer-reviewed journals
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

