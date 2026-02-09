'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SparkleEffectProps {
  className?: string
  count?: number
}

export function SparkleEffect({ className, count = 6 }: SparkleEffectProps) {
  const sparkles = Array.from({ length: count })

  return (
    <div className={cn('absolute inset-0 pointer-events-none', className)}>
      {sparkles.map((_, i) => {
        const angle = (i / count) * 360
        const radius = 120 + Math.random() * 40
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: x,
              marginTop: y,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random(),
              delay: Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg
              className="w-4 h-4 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </motion.div>
        )
      })}
    </div>
  )
}
