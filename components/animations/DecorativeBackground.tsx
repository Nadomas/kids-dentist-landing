'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingElementProps {
  icon: string
  className?: string
  delay?: number
  duration?: number
}

function FloatingElement({ icon, className, delay = 0, duration = 4 }: FloatingElementProps) {
  return (
    <motion.div
      className={cn('absolute opacity-20', className)}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: duration + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <img src={icon} alt="" className="w-12 h-12 md:w-16 md:h-16" />
    </motion.div>
  )
}

interface DecorativeBackgroundProps {
  className?: string
}

export function DecorativeBackground({ className }: DecorativeBackgroundProps) {
  return (
    <div className={cn('fixed inset-0 pointer-events-none overflow-hidden', className)}>
      {/* Floating teeth */}
      <FloatingElement icon="/icons/tooth.svg" className="top-[10%] left-[5%]" delay={0} />
      <FloatingElement icon="/icons/tooth-happy.svg" className="top-[20%] right-[10%]" delay={0.5} />
      <FloatingElement icon="/icons/tooth-smile.svg" className="bottom-[30%] left-[8%]" delay={1} />
      <FloatingElement icon="/icons/tooth-wink.svg" className="bottom-[15%] right-[5%]" delay={1.5} />
      
      {/* Floating medical tools */}
      <FloatingElement icon="/icons/mirror.svg" className="top-[40%] left-[15%]" delay={0.3} duration={5} />
      <FloatingElement icon="/icons/probe.svg" className="top-[60%] right-[12%]" delay={0.8} duration={5} />
      <FloatingElement icon="/icons/tweezers.svg" className="bottom-[40%] left-[20%]" delay={1.2} duration={5} />
      <FloatingElement icon="/icons/brush.svg" className="top-[70%] right-[20%]" delay={1.7} duration={5} />
      <FloatingElement icon="/icons/syringe.svg" className="top-[30%] left-[25%]" delay={0.6} duration={6} />
      
      {/* Floating stars */}
      {[...Array(5)].map((_, i) => (
        <FloatingElement
          key={`star-${i}`}
          icon="/icons/star.svg"
          className={cn(
            'w-6 h-6 md:w-8 md:h-8',
            i === 0 && 'top-[15%] left-[30%]',
            i === 1 && 'top-[45%] right-[25%]',
            i === 2 && 'bottom-[25%] left-[35%]',
            i === 3 && 'top-[55%] left-[10%]',
            i === 4 && 'bottom-[45%] right-[30%]'
          )}
          delay={i * 0.4}
          duration={3 + Math.random() * 2}
        />
      ))}
    </div>
  )
}
