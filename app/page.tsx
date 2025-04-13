'use client'

import { motion } from 'framer-motion'
import DonationRequirements from './components/DonationRequirements'
import Link from 'next/link'
import { FiDroplet, FiHeart, FiUsers } from 'react-icons/fi'
import { useState } from 'react'
import DonorForm from './components/DonorForm'

export default function Home() {
  const [showDonorForm, setShowDonorForm] = useState(false);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/hero-video.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Blood Donation
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover the life-saving impact of blood donation
          </p>
          <button
            onClick={() => setShowDonorForm(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition-colors inline-block"
          >
            Become a Donor
          </button>
        </motion.div>
      </section>

      {/* Donation Process Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: FiDroplet, number: '10K+', label: 'Donations Made' },
              { icon: FiUsers, number: '5K+', label: 'Active Donors' },
              { icon: FiHeart, number: '2K+', label: 'Lives Saved' },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center">
                <stat.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of life-savers today. Your single donation can save up to 3 lives.
            </p>
            <button
              onClick={() => setShowDonorForm(true)}
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition-colors inline-block"
            >
              Become a Donor Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Donation Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Register', description: 'Create your donor profile' },
              { title: 'Screen', description: 'Complete health questionnaire' },
              { title: 'Donate', description: 'Visit a nearby blood bank' },
              { title: 'Save Lives', description: 'Your donation gets used' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DonationRequirements />
      
      {showDonorForm && (
        <DonorForm isOpen={showDonorForm} onClose={() => setShowDonorForm(false)} />
      )}
    </div>
  )
}