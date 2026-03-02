'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const stars = useMemo(
    () =>
      Array.from({ length: 52 }, (_, index) => ({
        id: index,
        top: `${(index * 37) % 100}%`,
        left: `${(index * 19) % 100}%`,
        delay: (index % 10) * 0.35,
        opacity: 0.18 + (index % 4) * 0.14,
      })),
    [],
  )

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden rounded-[2rem] border border-white/10 cosmic-gradient"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        setParallax({ x, y })
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--background)]/30 to-[var(--background)]/70" />

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute h-[2px] w-[2px] rounded-full bg-white"
          style={{ top: star.top, left: star.left, opacity: star.opacity }}
          animate={{ opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.5] }}
          transition={{ duration: 3.8, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute right-[8%] top-[16%] h-52 w-52 rounded-full bg-gradient-to-br from-white/85 via-[var(--accent)] to-[var(--secondary)] blur-[1px] md:h-72 md:w-72"
        animate={{
          x: parallax.x * -26,
          y: parallax.y * -26,
          boxShadow: ['0 0 40px rgba(160,167,216,0.4)', '0 0 70px rgba(160,167,216,0.58)', '0 0 40px rgba(160,167,216,0.4)'],
        }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />

      <motion.div
        className="absolute -left-16 bottom-4 h-56 w-56 rounded-full bg-[var(--secondary)]/60 blur-3xl"
        animate={{ x: parallax.x * 18, y: parallax.y * 18 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />

      <div className="relative z-10 flex min-h-[92vh] flex-col items-center justify-center px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 text-sm uppercase tracking-[0.35em] text-foreground/70"
        >
          Astronomía en vivo para todas las edades
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display max-w-4xl text-5xl leading-[1.08] text-white md:text-7xl"
        >
          Descubre el universo desde tu ciudad y con guía experta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-2xl"
        >
          Cursos de astronomía con clases en vivo, observación telescópica y acompañamiento cercano para niños, jóvenes y adultos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#featured-courses"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-background glow-effect hover:scale-[1.03]"
          >
            Reserva tu lugar <ArrowRight size={18} />
          </Link>
          <Link
            href="#featured-courses"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-4 font-semibold text-foreground hover:bg-white/10"
          >
            Ver cursos destacados
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/75"
        >
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Grupos reducidos</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Sesiones en vivo</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Enfoque 100% astronomía</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 text-sm text-foreground/65"
        >
          Cupos limitados en cada grupo
        </motion.p>

        <motion.a
          href="#why-us"
          className="absolute bottom-8 inline-flex flex-col items-center gap-1 text-sm text-foreground/70"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          Desliza
          <ChevronDown size={16} />
        </motion.a>
      </div>
    </section>
  )
}
