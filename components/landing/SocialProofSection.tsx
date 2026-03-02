'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import FadeInSection from './FadeInSection'

const testimonials = [
  {
    name: 'Samuel Corral',
    role: 'Recomienda Armonía de las esferas',
    quote:
      'Estoy tomando mi segundo curso hasta ahora y ha sido de las mejores decisiones que he tomado. Siempre me interesó la astronomía, pero nunca me había atrevido a profundizar hasta ahora. El profesor a mi parecer es un gran valor agregado ya que tiene un conocimiento bárbaro, una pasión desbordante y un método inspirador. Además, el intercambio con otros aficionados enriquece muchísimo la experiencia. Sin duda, el curso superó mis expectativas.',
  },
  {
    name: 'Guillermo Mendoza',
    role: 'Recomienda Armonía de las esferas',
    quote: 'Necesitamos más conocimiento de las cosas realmente importantes. ¡Gracias por la plática!',
  },
]

const stats = [
  { label: 'Estudiantes', value: '2,300+' },
  { label: 'Sesiones en vivo', value: '420+' },
  { label: 'Satisfacción', value: '98%' },
]

export default function SocialProofSection() {
  return (
    <FadeInSection className="py-24 md:py-28">
      <div className="text-center">
        <h2 className="font-display text-4xl text-white md:text-5xl">Más que un curso: una experiencia real</h2>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
          <div className="flex items-center gap-1 text-amber-300">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-sm text-foreground/80">4.9/5 calificación promedio</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-accent/80 to-[var(--secondary)] text-sm font-semibold text-white">
                {testimonial.name
                  .split(' ')
                  .map((chunk) => chunk.charAt(0))
                  .join('')
                  .slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-foreground/65">{testimonial.role}</p>
              </div>
            </div>

            <p className="text-foreground/80">“{testimonial.quote}”</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center">
            <p className="font-display text-3xl text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-foreground/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </FadeInSection>
  )
}
