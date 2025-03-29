import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const AnimatedCard = ({
  children,
  index,
}: {
  children: ReactNode
  index: number
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard