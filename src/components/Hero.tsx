'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { conferenceData } from '@/lib/data'
import AnimatedPhysicsBackground from './AnimatedPhysicsBackground'
import { useState, useEffect } from 'react'

const HERO_PHOTOS = [
  '/images/Hero_Page_Photos/1DSC08278.JPG',
  '/images/Hero_Page_Photos/1234432.png',
  '/images/Hero_Page_Photos/DSC08231.JPG',
  '/images/Hero_Page_Photos/DSC08235.JPG',
  '/images/Hero_Page_Photos/DSC08339.JPG',
  '/images/Hero_Page_Photos/DSC08351.JPG',
  '/images/Hero_Page_Photos/DSC08352.JPG',
  '/images/Hero_Page_Photos/DSC08359.JPG',
  '/images/Hero_Page_Photos/DSC08397.JPG',
  '/images/Hero_Page_Photos/DSC08413.JPG',
  '/images/Hero_Page_Photos/DSC08419.JPG',
  '/images/Hero_Page_Photos/DSC08462.JPG',
  '/images/Hero_Page_Photos/DSC08475.JPG',
  '/images/Hero_Page_Photos/DSC08508.JPG',
  '/images/Hero_Page_Photos/DSC08523.JPG',
  '/images/Hero_Page_Photos/DSC08544.JPG',
  '/images/Hero_Page_Photos/DSC08547.JPG',
  '/images/Hero_Page_Photos/DSC08732.JPG',
  '/images/Hero_Page_Photos/GM.jpeg',
  '/images/Hero_Page_Photos/Principal.jpeg',
  '/images/Hero_Page_Photos/rajib_tripathi.jpeg',
  '/images/Hero_Page_Photos/poster1.jpeg',
]

const SLIDE_INTERVAL_MS = 5000

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isCreamTheme, setIsCreamTheme] = useState(true) // Default to cream theme
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [instantTransition, setInstantTransition] = useState(false)

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

  // Cycle through hero background photos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % HERO_PHOTOS.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  // Reset instant transition after dot click so next auto-advance animates
  useEffect(() => {
    if (!instantTransition) return
    const t = setTimeout(() => setInstantTransition(false), 100)
    return () => clearTimeout(t)
  }, [instantTransition, currentPhotoIndex])

  return (
    <section
      id="home"
      className="hero-section section-dark relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero photo background – cycles one by one */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPhotoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={
              instantTransition
                ? { duration: 0, delay: 0 }
                : { duration: 1.5, delay: 0.8, ease: 'easeInOut' }
            }
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTOS[currentPhotoIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-center"
              fetchPriority="high"
            />
          </motion.div>
        </AnimatePresence>
        {/* Light overlay so photos show through but text stays readable */}
        <div
          className={`absolute inset-0 ${
            isCreamTheme
              ? 'bg-gradient-to-br from-white/50 via-white/40 to-white/50'
              : 'bg-dark-bg/50 dark:bg-dark-bg/55'
          }`}
        />
      </div>

      {/* Animated Physics Background (on top of overlay in dark mode) */}
      <div className={`absolute inset-0 overflow-hidden z-[1] pointer-events-none ${isCreamTheme ? 'opacity-20' : 'opacity-40'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1),transparent_50%)]" />
        {mounted && !isCreamTheme && <AnimatedPhysicsBackground />}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 text-center">
        {/* Title page visible every 5th photo (0, 5, 10, 15, 20, …) */}
        <motion.div
          initial={false}
          animate={{ opacity: currentPhotoIndex % 5 === 0 ? 1 : 0 }}
          transition={
            instantTransition
              ? { duration: 0 }
              : { duration: 0.5, ease: 'easeInOut' }
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-3 sm:mb-4 relative z-20"
            >
            <h1 className={`hero-title text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 leading-tight tracking-tight ${
              isCreamTheme ? 'text-[#1A365D]' : 'text-cyan-300 drop-shadow-2xl'
            }`}>
              National Conference on
            </h1>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-relaxed pb-2 tracking-tight drop-shadow-2xl"
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
              Frontiers in Physics and Technology
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 sm:mb-6 relative z-10"
          >
            <h2 
              className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 sm:mb-6 tracking-tight"
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

          {/* Info Cards - date, venue, mode (below title) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-2xl mx-auto mt-20 sm:mt-28"
          >
            <div className={`glass rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md border ${isCreamTheme ? 'border-yellow-600/30' : 'border-yellow-400/30'}`}>
              <p className={`font-bold text-xs sm:text-sm tracking-wide leading-snug ${isCreamTheme ? 'text-yellow-700' : 'text-yellow-300'}`}>{conferenceData.dates}</p>
            </div>
            <div className={`glass rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md border ${isCreamTheme ? 'border-cyan-600/30' : 'border-cyan-400/30'}`}>
              <p className={`font-bold text-xs sm:text-sm tracking-wide leading-snug ${isCreamTheme ? 'text-cyan-700' : 'text-cyan-300'}`}>{conferenceData.venue}</p>
            </div>
            <div className={`glass rounded-lg px-3 py-2 sm:px-4 sm:py-2.5 backdrop-blur-md border ${isCreamTheme ? 'border-purple-600/30' : 'border-purple-400/30'}`}>
              <p className={`font-bold text-xs sm:text-sm tracking-wide leading-snug ${isCreamTheme ? 'text-purple-700' : 'text-purple-300'}`}>{conferenceData.mode}</p>
            </div>
          </motion.div>

        </motion.div>
        </motion.div>
      </div>

      {/* Dot indicators – click to go to a photo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-1.5 sm:gap-2 max-w-[90vw] px-2"
      >
        {HERO_PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setInstantTransition(true)
              setCurrentPhotoIndex(i)
            }}
            aria-label={`Go to photo ${i + 1} of ${HERO_PHOTOS.length}`}
            className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
              i === currentPhotoIndex
                ? 'bg-white dark:bg-cyan-300 w-2.5 h-2.5 sm:w-3 sm:h-3 shadow-lg scale-110'
                : 'bg-white/50 dark:bg-white/30 hover:bg-white/70 dark:hover:bg-white/50 w-2 h-2 sm:w-2.5 sm:h-2.5 hover:scale-105'
            }`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
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

