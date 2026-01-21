'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { registrationFees, paymentDetails, conferenceData } from '@/lib/data'

export default function Registration() {

  return (
    <section id="registration" className="section-dark pt-20 pb-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:from-dark-bg dark:to-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed">
            Registration
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Register now to secure your spot at FPT 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Registration Fees */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Registration Fees</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 font-semibold text-white">Category</th>
                    <th className="text-right py-3 px-4 font-semibold text-white">Fee (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={fee.category}
                      className={`border-b border-gray-600 ${
                        index % 2 === 0 ? 'bg-gray-800/30' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-200 font-medium">{fee.category}</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary dark:text-accent">
                        {fee.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href={conferenceData.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Register Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            {/* Registration QR Code */}
            <div className="mt-4 p-3 rounded-lg border-2 border-gray-600 text-center">
              <p className="text-xs text-gray-200 mb-2 font-semibold">Registration QR Code</p>
              <div className="w-40 h-40 mx-auto bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg p-2">
                <Image
                  src="/images/QR_code_redg.png"
                  alt="Registration QR Code - Scan to register"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <p className="text-xs text-gray-300 mt-2 font-medium">Scan to register</p>
            </div>
          </motion.div>

          {/* Payment Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-2xl p-6 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Payment Details</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-300">Bank</label>
                <span className="text-white font-medium">{paymentDetails.bank}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-200">Account Name</label>
                <span className="text-white font-medium">{paymentDetails.accountName}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-200">Account Number</label>
                <span className="text-white font-mono font-medium">{paymentDetails.accountNumber}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-200">IFSC Code</label>
                <span className="text-white font-mono font-medium">{paymentDetails.ifscCode}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-200">UPI ID</label>
                <span className="text-white font-mono font-medium">{paymentDetails.upiId}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/80 rounded-lg border border-gray-700">
                <label className="text-sm font-semibold text-gray-200">UPI Number</label>
                <span className="text-white font-mono font-medium">{paymentDetails.upiNumber}</span>
              </div>
            </div>
            {/* UPI QR Code */}
            <div className="mt-4 p-3 rounded-lg border-2 border-gray-600 text-center">
              <p className="text-xs text-gray-200 mb-2 font-semibold">UPI QR Code</p>
              <div className="w-40 h-40 mx-auto bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-lg p-2">
                <Image
                  src="/images/QR_code.png"
                  alt="UPI Payment QR Code - Scan to pay"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <p className="text-xs text-gray-300 mt-2 font-medium">Scan to pay via UPI</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

