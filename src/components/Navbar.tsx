'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'cream'>('cream')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    // Default to 'cream' if no saved theme
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'cream'
    document.documentElement.classList.remove('dark', 'cream')
    document.documentElement.classList.add(initialTheme)
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'cream' : 'dark'
    document.documentElement.classList.remove('dark', 'cream')
    document.documentElement.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
    setTheme(nextTheme)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'navbar-scrolled bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-2xl'
          : 'navbar-top bg-dark-bg/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] border-b border-white/10'
      }`}
      style={{
        boxShadow: scrolled 
          ? '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
          : '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="w-full pl-1 sm:pl-2 md:pl-3 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative w-12 h-12">
              <Image
                src="/images/Panchyat_Logo.jpg"
                alt="Panchayat College Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent tracking-tight drop-shadow-lg">
              FPT 2026
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-white drop-shadow-lg'
                } hover:text-primary dark:hover:text-accent transition-colors font-semibold tracking-wide text-sm md:text-base`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#registration"
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold tracking-wide text-sm md:text-base"
            >
              Register Now
            </Link>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60"
              aria-label="Toggle theme"
            >
              <span
                className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white text-gray-700 shadow transition-transform ${
                  theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
                }`}
              >
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled
                ? 'text-gray-700 dark:text-gray-300'
                : 'text-white drop-shadow-lg'
            } hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu md:hidden bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#registration"
                onClick={() => setIsOpen(false)}
                className="block px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-center hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Register Now
              </Link>
              <button
                onClick={toggleTheme}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300/60 dark:border-gray-600/60 bg-gray-200/80 dark:bg-gray-700/80 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                {theme === 'dark' ? 'Dark' : 'Cream'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

