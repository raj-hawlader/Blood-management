import { motion } from 'framer-motion'
import AnimatedCard from './AnimatedCard'

const requirements = [
  { title: 'Age', description: 'Between 18-65 years old' },
  { title: 'Weight', description: 'Minimum 50 kg' },
  { title: 'Health', description: 'Good general health' },
  { title: 'Hemoglobin', description: 'At least 12.5 g/dL' },
]

export default function DonationRequirements() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Donation Requirements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {requirements.map((req, index) => (
            <AnimatedCard key={req.title} index={index}>
              <h3 className="text-xl font-bold mb-4 text-red-600">{req.title}</h3>
              <p className="text-gray-600">{req.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}