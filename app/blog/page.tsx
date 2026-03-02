'use client'

import { motion } from 'framer-motion'
import { Clock, Tag } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog de Astronomía</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Artículos y guías para entender el universo: observación, fenómenos celestes, instrumentos y ciencia del cielo.
        </p>
      </motion.div>

      {/* Featured Post */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-3xl overflow-hidden mb-12 hover:glow-effect transition-all"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-96 bg-gradient-to-br from-primary to-accent"></div>
          <div className="p-8 md:p-12">
            <div className="flex gap-2 mb-4">
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Destacado</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Guía de observación lunar: fases, cráteres y mejores horarios</h2>
            <p className="text-foreground/70 mb-6">
              Aprende qué puedes observar en cada fase de la Luna, cómo identificar mares y cráteres, y qué condiciones del cielo te convienen para una observación más nítida.
            </p>
            <div className="flex items-center gap-4 text-sm text-foreground/60 mb-6">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>8 min lectura</span>
              </div>
              <span>24 Feb 2026</span>
            </div>
            <Link
              href="/blog/guia-observacion-lunar"
              className="inline-block bg-accent text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Leer Artículo
            </Link>
          </div>
        </div>
      </motion.article>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="glass rounded-2xl overflow-hidden hover:glow-effect transition-all group"
          >
            <div className={`h-48 bg-gradient-to-br ${post.gradient}`}></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={14} className="text-accent" />
                <span className="text-sm text-accent">{post.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-foreground/70 text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-foreground/60">
                <span>{post.readTime} min</span>
                <span>{post.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

const blogPosts = [
  {
    id: 1,
    title: 'Cómo empezar en astronomía observacional sin equipo costoso',
    excerpt: 'Un plan paso a paso para comenzar a observar el cielo a simple vista y con binoculares.',
    category: 'Observación',
    readTime: 5,
    date: '20 Feb 2026',
    gradient: 'from-purple-900/50 to-blue-900/50',
  },
  {
    id: 2,
    title: 'Constelaciones esenciales para ubicarte durante todo el año',
    excerpt: 'Aprende a reconocer constelaciones clave y úsalas como mapa para explorar el cielo nocturno.',
    category: 'Cielo Nocturno',
    readTime: 7,
    date: '18 Feb 2026',
    gradient: 'from-indigo-900/50 to-purple-900/50',
  },
  {
    id: 3,
    title: 'Júpiter y Saturno: qué observar con un telescopio básico',
    excerpt: 'Qué detalles planetarios puedes ver, cómo encontrarlos y qué aumento utilizar para cada caso.',
    category: 'Planetas',
    readTime: 10,
    date: '15 Feb 2026',
    gradient: 'from-blue-900/50 to-cyan-900/50',
  },
  {
    id: 4,
    title: 'Astrofotografía inicial: ajustes clave para capturar la Luna',
    excerpt: 'Apertura, ISO, velocidad y enfoque: una guía clara para tus primeras fotos lunares.',
    category: 'Astrofotografía',
    readTime: 6,
    date: '12 Feb 2026',
    gradient: 'from-violet-900/50 to-purple-900/50',
  },
  {
    id: 5,
    title: 'Lluvias de meteoros 2026: calendario y consejos de observación',
    excerpt: 'Fechas más importantes del año, horas recomendadas y lugares ideales para ver meteoros.',
    category: 'Eventos Celestes',
    readTime: 8,
    date: '10 Feb 2026',
    gradient: 'from-slate-900/50 to-gray-800/50',
  },
  {
    id: 6,
    title: 'Contaminación lumínica: cómo afecta tu observación y cómo reducir su impacto',
    excerpt: 'Entiende los tipos de contaminación lumínica y aplica estrategias para mejorar tus sesiones.',
    category: 'Divulgación',
    readTime: 9,
    date: '8 Feb 2026',
    gradient: 'from-pink-900/50 to-rose-900/50',
  },
]
