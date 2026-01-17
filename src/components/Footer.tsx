'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { conferenceData, contactPersons, travelInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quick: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Speakers', href: '#speakers' },
      { name: 'Registration', href: '#registration' },
      { name: 'Schedule', href: '#schedule' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Abstract Guidelines', href: '#registration' },
      { name: 'Registration Form', href: conferenceData.registrationLink, external: true },
      { name: 'FAQ', href: '#faq' },
      { name: 'How to Reach', href: '#contact' },
    ],
  }

  return (
    <footer className="section-dark bg-dark-bg text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              FPT 2026
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              National Conference on Frontiers of Physics and Technology hosted by Panchayat College, Bargarh.
            </p>
            <p className="text-gray-400 text-sm">
              Powered by P.G. Department of Physics, Panchayat College
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center space-x-1"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{travelInfo.collegeAddress}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  {contactPersons
                    .filter(person => person.mobile)
                    .map((person, idx, arr) => (
                      <span key={person.id}>
                        {person.mobile}
                        {idx < arr.length - 1 && ', '}
                      </span>
                    ))}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${contactPersons[0].email}`}
                  className="text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {contactPersons[0].email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} FPT Conference. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href={conferenceData.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

