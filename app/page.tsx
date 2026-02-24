'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, BookOpen, Sparkles } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

export default function Home() {
  const { moonPhase } = useTheme()

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-accent via-foreground to-accent bg-clip-text text-transparent">
            Armonía de las Esferas
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Divulgación astronómica para toda la familia
          </p>

          {moonPhase && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block glass rounded-full px-6 py-3 mb-10"
            >
              <span className="text-sm">
                🌙 Fase actual: <strong>{moonPhase.phase}</strong> ({moonPhase.illumination}% iluminación)
              </span>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="bg-accent text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform glow-effect inline-flex items-center gap-2"
            >
              Ver Cursos <ArrowRight size={20} />
            </Link>
            <Link
              href="/eventos"
              className="glass px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Próximos Eventos <Calendar size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Cursos Destacados</h2>
          <p className="text-foreground/60">Descubre el universo con nuestros cursos de astronomía</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-effect transition-all group"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm text-accent mb-3">{course.level}</p>
              <p className="text-foreground/70 mb-4">{course.description}</p>
              {course.price && (
                <p className="text-sm font-semibold text-accent mb-4">{course.price}</p>
              )}
              <Link
                href={`/cursos#${course.id}`}
                className="text-accent hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Ver más <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto glow-effect"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--accent)' }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Noche en el Jardín Cósmico</h2>
          <p className="text-foreground/80 mb-6">
            Experiencia especial con acceso a telescopios para principiantes e intermedios. Observa Saturno con sus anillos, Júpiter con sus lunas, cúmulos estelares y más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-sm text-foreground/60">Fecha</span>
              <p className="font-bold">13 de Diciembre, 2026</p>
            </div>
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-sm text-foreground/60">Hora</span>
              <p className="font-bold">17:00 - 21:00 hrs</p>
            </div>
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-sm text-foreground/60">Precio</span>
              <p className="font-bold">$499-$599 MXN</p>
            </div>
          </div>
          <Link
            href="/eventos"
            className="bg-accent text-background px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-block"
          >
            Más Eventos
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

const courses = [
  {
    id: 'astro-ninos',
    icon: '�',
    title: 'Astronomía para Niños',
    level: 'Edades 6-11',
    description: 'Una aventura fuera de este mundo. Acompaña a los telescopios, dibuja constelaciones y pinta tu planeta.',
    price: '$1,490 MXN',
  },
  {
    id: 'planetas-supernovas',
    icon: '🌌',
    title: 'De Planetas a Supernovas',
    level: 'Mayores 12 años',
    description: 'Guía completa con telescopios. Explora planetas, estrellas y fenómenos estelares avanzados.',
    price: '$2,000 MXN',
  },
  {
    id: 'telescopio-basico',
    icon: '🔭',
    title: 'Técnicas de Observación',
    level: 'Principiante - Intermedio',
    description: 'Domina el uso de telescopios. Configuración, mantenimiento y observación práctica.',
    price: '$1,200 MXN',
  },
]
