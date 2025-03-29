'use client'

import { useState } from 'react'
import { supabase } from '../hooks/useSupabase'
import { motion } from 'framer-motion'

type AuthFormProps = {
  type: 'sign-in' | 'sign-up'
  role: 'donor' | 'patient' | 'admin'
}

export default function AuthForm({ type, role }: AuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const { data, error } = type === 'sign-up' 
        ? await supabase.auth.signUp({ email, password })
        : await supabase.auth.signInWithPassword({ email, password })

      if (error) throw error
      
      // Store role in profiles table
      if (data.user && type === 'sign-up') {
        await supabase
          .from('profiles')
          .upsert({ id: data.user.id, role })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-8 text-center capitalize">
        {type} as {role}
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Processing...' : type === 'sign-up' ? 'Sign Up' : 'Sign In'}
        </button>
      </div>
    </motion.form>
  )
}