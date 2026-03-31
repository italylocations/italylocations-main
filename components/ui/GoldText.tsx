import { ReactNode } from 'react'

interface GoldTextProps {
  children: ReactNode
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
}

export function GoldText({ children, className = '', as: Tag = 'span' }: GoldTextProps) {
  return (
    <Tag className={`gold-text ${className}`}>
      {children}
    </Tag>
  )
}
