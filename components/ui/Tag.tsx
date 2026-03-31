import { ReactNode } from 'react'

type TagVariant = 'blue' | 'gold' | 'green' | 'purple'

interface TagProps {
  children: ReactNode
  variant?: TagVariant
  className?: string
}

const variantStyles: Record<TagVariant, string> = {
  blue: 'bg-[rgba(59,130,246,0.15)] text-[#93c5fd] border border-[rgba(59,130,246,0.3)]',
  gold: 'bg-[rgba(201,168,76,0.12)] text-[#e8d5a0] border border-[rgba(201,168,76,0.3)]',
  green: 'bg-[rgba(34,197,94,0.12)] text-[#86efac] border border-[rgba(34,197,94,0.3)]',
  purple: 'bg-[rgba(168,85,247,0.12)] text-[#d8b4fe] border border-[rgba(168,85,247,0.3)]',
}

export function Tag({ children, variant = 'blue', className = '' }: TagProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
