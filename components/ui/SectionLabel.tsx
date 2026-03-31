import { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase gold-text mb-3 ${className}`}
    >
      {children}
    </span>
  )
}
