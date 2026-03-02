'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import FadeInSection from './FadeInSection'

const courses = [
  {
    title: 'Astronomía para Niños',
    age: 'Niños 6-11 años',
    date: '21 de febrero - 14 de marzo 2026',
    duration: '8 semanas',
    price: '$1,490 MXN',
    image:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'De Planetas a Supernovas',
    age: 'Mayores de 12 años',
    date: '24 de enero - 7 de marzo 2026',
    duration: '12 semanas',
    price: '$2,000 MXN ($1,790 anticipada)',
    image:
      'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Técnicas de Observación Telescópica',
    age: 'Principiante - Intermedio',
    date: 'Próximas fechas disponibles',
    duration: '6 semanas',
    price: '$1,200 MXN',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  },
]

export default function FeaturedCoursesSection() {
  return (
    <FadeInSection id="featured-courses" className="py-24 md:py-28">
      <div className="text-center">
        <h2 className="font-display text-4xl text-white md:text-5xl">Cursos más populares</h2>
        <p className="mt-3 text-foreground/70">Grupos reducidos, guía experta y aprendizaje práctico del cielo nocturno.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[var(--background)]/65 px-3 py-1 text-xs text-white">
                {course.age}
              </span>
            </div>

            <div className="p-6 transition-all duration-300 group-hover:shadow-[0_0_0_1px_rgba(160,167,216,0.8),0_18px_40px_rgba(0,0,0,0.35)]">
              <h3 className="font-display text-2xl text-white">{course.title}</h3>

              <div className="mt-4 space-y-2 text-sm text-foreground/75">
                <p>Fecha de inicio: {course.date}</p>
                <p>Duración: {course.duration}</p>
                <p className="font-semibold text-accent">{course.price}</p>
              </div>

              <Link
                href="/cursos"
                className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 font-semibold text-background hover:opacity-95"
              >
                Ver detalles e inscribirme
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </FadeInSection>
  )
}
