'use client'

import { motion } from 'framer-motion'
import { Train, Plane, MapPin, ExternalLink, Bus } from 'lucide-react'
import Image from 'next/image'
import { travelInfo } from '@/lib/data'

export default function HowToReach() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-16"
    >
      <h3 className="text-3xl font-bold mb-8 text-center text-white">How to Reach</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Travel Information */}
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <Train className="w-6 h-6 text-primary dark:text-accent" />
              <h4 className="text-xl font-bold text-white">By Train</h4>
            </div>
            <p className="text-gray-200">
              <strong className="text-white">{travelInfo.train.station}</strong> - {travelInfo.train.distance} from the college
            </p>
          </div>

          <div className="glass rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <Bus className="w-6 h-6 text-primary dark:text-accent" />
              <h4 className="text-xl font-bold text-white">By Bus</h4>
            </div>
            <ul className="space-y-2">
              <li className="text-gray-200">
                <strong className="text-white">Govt. Bus Stand, Bargarh</strong> - 3 km from the college
              </li>
              <li className="text-gray-200">
                <strong className="text-white">Private Bus Stand, Bargarh</strong> - 5 km from the college
              </li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <Plane className="w-6 h-6 text-primary dark:text-accent" />
              <h4 className="text-xl font-bold text-white">By Air</h4>
            </div>
            <ul className="space-y-2">
              {travelInfo.airports.map((airport, index) => (
                <li key={index} className="text-gray-200">
                  <strong className="text-white">{airport.name}</strong> - {airport.distance} from the college
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 backdrop-blur-md">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-primary dark:text-accent" />
              <h4 className="text-xl font-bold text-white">Address</h4>
            </div>
            <p className="text-gray-200">{travelInfo.collegeAddress}</p>
          </div>
        </div>

        {/* Map */}
        <div className="glass rounded-2xl p-6 backdrop-blur-md h-full flex flex-col">
          <h4 className="text-xl font-bold mb-4 text-white">Location Map</h4>
          <div className="flex-1 min-h-[400px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
            <iframe
              src={travelInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Panchayat College, Bargarh Location"
              className="w-full h-full"
            />
          </div>
          <a
            href={travelInfo.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary dark:text-accent hover:underline flex items-center space-x-1"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

