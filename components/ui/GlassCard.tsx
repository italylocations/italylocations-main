import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  goldBorder?: boolean
}

export function GlassCard({ children, className = '', goldBorder = false }: GlassCardProps) {
  const border = goldBorder
    ? 'border border-[rgba(201,168,76,0.35)] gold-border-glow'
    : 'border border-[rgba(255,255,255,0.08)]'

  return (
    <div
      className={`bg-[rgba(255,255,255,0.04)] ${border} backdrop-blur-sm rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}
