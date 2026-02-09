'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'whileHover' | 'whileTap'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden'

  const variants = {
    primary: 'bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-dark hover:to-primary hover:shadow-lg',
    secondary: 'bg-gradient-to-r from-accent to-accent-light text-white hover:from-accent-dark hover:to-accent hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <motion.span
        className="relative z-10"
        whileHover={{ x: 2 }}
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"
        initial={false}
        whileHover={{
          opacity: [0, 0.3, 0],
        }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}
