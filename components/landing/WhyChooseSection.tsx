'use client'

import { motion } from 'framer-motion'
import { BookOpen, Telescope, Users, Video } from 'lucide-react'
import FadeInSection from './FadeInSection'

const features = [
  {
    title: 'Clases en vivo e interactivas',
    description: 'Haz preguntas en tiempo real y aprende con acompañamiento experto en cada sesión.',
    icon: Video,
  },
  {
    title: 'Observación real con telescopios',
    description: 'Participa en sesiones guiadas enfocadas en planetas, detalles lunares y constelaciones.',
    icon: Telescope,
  },
  {
    title: 'Materiales de apoyo descargables',
    description: 'Accede a guías visuales, actividades y apuntes para seguir aprendiendo desde casa.',
    icon: BookOpen,
  },
  {
    title: 'Comunidad de aficionados al cielo',
    description: 'Conecta con familias, estudiantes y adultos que comparten la misma curiosidad por el cosmos.',
    icon: Users,
  },
]

export default function WhyChooseSection() {
  return (
    <FadeInSection id="why-us" className="py-24 md:py-28">
      <div className="text-center">
        <h2 className="font-display text-4xl text-white md:text-5xl">¿Por qué aprender con Armonía de las Esferas?</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass group rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex rounded-xl border border-white/15 bg-white/5 p-3 text-accent group-hover:shadow-[0_0_24px_var(--glow)]">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-2xl text-white">{feature.title}</h3>
              <p className="mt-3 text-foreground/75">{feature.description}</p>
            </motion.article>
          )
        })}
      </div>
    </FadeInSection>
  )
}
