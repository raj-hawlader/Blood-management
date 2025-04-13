'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/app/contexts/AuthContext'

export default function Navbar() {
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()
  
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Requirements', path: '/requirements' },
    { name: 'Patients', path: '/patients' },
    ...(isAuthenticated ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
  ]

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              LifeFlow
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-3 py-2 ${
                  pathname === link.path ? 'text-red-600' : 'text-gray-600'
                }`}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
            <div className="flex space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="px-3 py-2 text-gray-600">
                    Welcome, {user?.name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}