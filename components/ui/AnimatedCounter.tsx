'use client'

import { motion, useInView, useMotionValue, useSpring, MotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

function CounterDisplay({ value, prefix, suffix, className }: { value: MotionValue<number>; prefix: string; suffix: string; className?: string }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const unsubscribe = value.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [value])

  return (
    <span className={cn('font-bold', className)}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <CounterDisplay value={springValue} prefix={prefix} suffix={suffix} className={className} />
    </motion.div>
  )
}
