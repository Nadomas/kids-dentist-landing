'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n/useTranslation'
import { CONTACTS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-20 bg-bg-alt relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 right-20 opacity-5 pointer-events-none"
      >
        <img src="/icons/syringe.svg" alt="" className="w-32 h-32" />
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
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <motion.img
                  src="/icons/tooth.svg"
                  alt=""
                  className="w-6 h-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
                {t.contact.clinic}
              </h3>
              <p className="text-text-light mb-4">{t.contact.address}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="font-medium">{CONTACTS.phones[0].display}</p>
                    <p className="font-medium">{CONTACTS.phones[1].display}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <motion.p
                    className="font-medium text-text"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    📅 {t.contact.schedule.odd}
                  </motion.p>
                  <motion.p
                    className="font-medium text-text"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    📅 {t.contact.schedule.even}
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Связаться</h3>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button onClick={() => window.location.href = `tel:${CONTACTS.phones[0].number}`}>
                    {t.contact.call}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="secondary" onClick={() => window.open(CONTACTS.social.whatsapp, '_blank')}>
                    {t.contact.whatsapp}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" onClick={() => window.open(CONTACTS.social.telegram, '_blank')}>
                    {t.contact.telegram}
                  </Button>
                </motion.div>
              </div>
              <div className="mt-4">
                <motion.a
                  href={`https://instagram.com/${CONTACTS.social.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-text-light hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @{CONTACTS.social.instagram}
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Карта</h3>
            <div className="w-full h-64 md:h-80 bg-bg-alt rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d29.469!3d46.839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDUwJzI0LjQiTiAyOcKwMjgnMDguNCJF!5e0!3m2!1sru!2smd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
