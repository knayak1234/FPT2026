'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Globe, ArrowRight, FileText } from 'lucide-react'
import { conferenceData } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import CountdownTimer from './CountdownTimer'
import AnimatedPhysicsBackground from './AnimatedPhysicsBackground'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isCreamTheme, setIsCreamTheme] = useState(true) // Default to cream theme

  useEffect(() => {
    setMounted(true)
    
    // Check initial theme
    const checkTheme = () => {
      setIsCreamTheme(document.documentElement.classList.contains('cream'))
    }
    checkTheme()
    
    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkTheme()
        }
      })
    })
    
    observer.observe(document.documentElement, { attributes: true })
    
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className={`hero-section section-dark relative min-h-screen flex items-center justify-center overflow-hidden ${
        isCreamTheme 
          ? 'bg-gradient-to-br from-[#FFF8E7] via-[#FDF5E6] to-[#FFEFD5]' 
          : 'bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:from-dark-bg dark:via-primary/20 dark:to-secondary/20'
      }`}
    >
      {/* Animated Physics Background */}
      <div className={`absolute inset-0 overflow-hidden ${isCreamTheme ? 'opacity-30' : ''}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        {/* Canvas-based Physics Animations */}
        {mounted && !isCreamTheme && <AnimatedPhysicsBackground />}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 relative z-20"
          >
            <h1 className={`hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight ${
              isCreamTheme ? 'text-[#1A365D]' : 'text-cyan-300 drop-shadow-2xl'
            }`}>
              National Conference on
            </h1>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-relaxed pb-3 tracking-tight drop-shadow-2xl"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
                  'drop-shadow(0 0 30px rgba(139, 92, 246, 0.7))',
                  'drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))',
                  'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))',
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Frontiers of Physics and Technology
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 relative z-10"
          >
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 tracking-tight"
              style={isCreamTheme ? {
                background: 'linear-gradient(to right, #F59E0B, #EF4444, #EC4899)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              } : {
                color: 'rgb(233 213 255)', // text-purple-200
                filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))',
              }}
            >
              {conferenceData.subtitle}
            </h2>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 relative z-10"
          >
            <CountdownTimer targetDate="2026-01-31T00:00:00" />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className={`glass rounded-2xl p-6 backdrop-blur-md border ${isCreamTheme ? 'border-yellow-600/30' : 'border-yellow-400/30'}`}>
              <Calendar className={`w-8 h-8 mx-auto mb-3 ${isCreamTheme ? 'text-yellow-600' : 'text-yellow-400'}`} />
              <p className={`font-bold text-base md:text-lg tracking-wide leading-relaxed ${isCreamTheme ? 'text-yellow-700' : 'text-yellow-300'}`}>{conferenceData.dates}</p>
            </div>
            <div className={`glass rounded-2xl p-6 backdrop-blur-md border ${isCreamTheme ? 'border-cyan-600/30' : 'border-cyan-400/30'}`}>
              <MapPin className={`w-8 h-8 mx-auto mb-3 ${isCreamTheme ? 'text-cyan-700' : 'text-cyan-400'}`} />
              <p className={`font-bold text-base md:text-lg tracking-wide leading-relaxed ${isCreamTheme ? 'text-cyan-700' : 'text-cyan-300'}`}>{conferenceData.venue}</p>
            </div>
            <div className={`glass rounded-2xl p-6 backdrop-blur-md border ${isCreamTheme ? 'border-purple-600/30' : 'border-purple-400/30'}`}>
              <Globe className={`w-8 h-8 mx-auto mb-3 ${isCreamTheme ? 'text-purple-700' : 'text-purple-400'}`} />
              <p className={`font-bold text-base md:text-lg tracking-wide leading-relaxed ${isCreamTheme ? 'text-purple-700' : 'text-purple-300'}`}>{conferenceData.mode}</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={conferenceData.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-extrabold text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 tracking-wide drop-shadow-lg cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="#registration"
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-primary dark:text-accent rounded-full font-extrabold text-lg md:text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 border-2 border-primary dark:border-accent tracking-wide drop-shadow-lg"
            >
              <FileText className="w-5 h-5 md:w-6 md:h-6" />
              <span>Submit Abstract</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

