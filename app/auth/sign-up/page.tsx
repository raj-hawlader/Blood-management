'use client'

import AuthForm from '../../components/AuthForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center">
      <AuthForm type="sign-up" role="donor" />
    </div>
  )
}