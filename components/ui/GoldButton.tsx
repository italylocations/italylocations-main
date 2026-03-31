import Link from 'next/link'
import { ReactNode } from 'react'

interface GoldButtonProps {
  children: ReactNode
  href: string
  className?: string
  filled?: boolean
  external?: boolean
}

export function GoldButton({ children, href, className = '', filled = false, external = false }: GoldButtonProps) {
  const styles = filled
    ? 'inline-block bg-gradient-to-r from-[#c9a84c] to-[#e8d5a0] text-[#0a0f1e] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(201,168,76,0.4)] text-center'
    : 'inline-block border border-[#c9a84c] text-[#c9a84c] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-[rgba(201,168,76,0.1)] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] text-center'

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
