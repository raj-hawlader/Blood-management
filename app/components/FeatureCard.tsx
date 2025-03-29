'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FeatureCard({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      {children}
    </motion.div>
  )
}