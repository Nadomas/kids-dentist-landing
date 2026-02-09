'use client'

import { motion, Variants } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { TiltCard } from '@/components/ui/TiltCard'

export function TrustSection() {
  const { t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
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
    <section className="py-20 bg-bg-alt relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 left-10 opacity-10 pointer-events-none"
      >
        <img src="/icons/tooth.svg" alt="" className="w-32 h-32" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 right-10 opacity-10 pointer-events-none"
      >
        <img src="/icons/star.svg" alt="" className="w-24 h-24" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t.trust.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.trust.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="perspective-1000"
            >
              <TiltCard tiltAmount={8}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full group">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  >
                    <motion.img
                      src="/icons/tooth-happy.svg"
                      alt=""
                      className="w-8 h-8"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-text-light text-center">
                    {benefit.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
