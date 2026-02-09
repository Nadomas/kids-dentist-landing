'use client'

import { motion, Variants } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { TiltCard } from '@/components/ui/TiltCard'

export function ServicesSection() {
  const { t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
      },
    },
  }

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative floating elements */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 opacity-5 pointer-events-none"
      >
        <img src="/icons/brush.svg" alt="" className="w-40 h-40" />
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
            {t.services.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="perspective-1000"
            >
              <TiltCard tiltAmount={10}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full group cursor-pointer border-2 border-transparent hover:border-primary/20">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  >
                    <motion.img
                      src="/icons/tooth.svg"
                      alt=""
                      className="w-6 h-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-text-light text-sm">
                    {service.desc}
                  </p>
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
