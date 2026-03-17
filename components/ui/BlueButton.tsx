import Link from 'next/link'
import { ReactNode } from 'react'

interface BlueButtonProps {
  children: ReactNode
  href: string
  className?: string
  external?: boolean
}

export function BlueButton({ children, href, className = '', external = false }: BlueButtonProps) {
  const styles =
    'inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 blue-glow hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] text-center'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${styles} ${className}`}>
      {children}
    </Link>
  )
}
