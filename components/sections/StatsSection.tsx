'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function StatsSection() {
  const { t } = useTranslation()

  const stats = [
    { value: 500, suffix: '+', label: 'Довольных пациентов', icon: '/icons/tooth-happy.svg' },
    { value: 10, suffix: '+', label: 'Лет опыта', icon: '/icons/star.svg' },
    { value: 2000, suffix: '+', label: 'Проведённых процедур', icon: '/icons/tooth-smile.svg' },
    { value: 100, suffix: '%', label: 'Качество лечения', icon: '/icons/tooth-wink.svg' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Наши достижения
          </h2>
          <p className="text-text-light text-lg">
            Цифры говорят сами за себя
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform">
                <img src={stat.icon} alt="" className="w-8 h-8" />
              </div>
              <div className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                />
                <p className="text-text-light font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
