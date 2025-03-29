'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-red-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            About Blood Donation
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn everything you need to know about blood donation and its impact on saving lives.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="prose max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
            <p className="text-gray-600 mb-6">
              Blood is needed every day to treat accident victims, surgical patients,
              and those undergoing cancer treatment. Just one donation can save up to
              three lives.
            </p>

            <h2 className="text-2xl font-bold mb-4">Donation Types</h2>
            <div className="space-y-4">
              {[
                'Whole Blood',
                'Plasma',
                'Platelets',
                'Double Red Cells'
              ].map((type, index) => (
                <motion.div
                  key={type}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-red-50 rounded-lg"
                >
                  <h3 className="font-semibold text-red-600">{type}</h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/auth/sign-up"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Join Our Donor Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}