'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>('Todos')

  const filteredImages = filter === 'Todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Galería</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Momentos capturados de nuestras ceremonias, talleres y experiencias transformadoras.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === category
                ? 'bg-accent text-background glow-effect'
                : 'glass hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedImage(index)}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl mb-4"
          >
            <div
              className={`w-full bg-gradient-to-br ${image.gradient}`}
              style={{ height: `${image.height}px` }}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-lg px-4 text-center">
                    {image.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <div
                className={`w-full h-96 md:h-[600px] rounded-2xl bg-gradient-to-br ${filteredImages[selectedImage].gradient}`}
              ></div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-foreground/60">
                  {filteredImages[selectedImage].category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const categories = ['Todos', 'Ceremonias', 'Talleres', 'Cursos', 'Naturaleza']

const galleryImages = [
  {
    id: 1,
    title: 'Ceremonia de Luna Llena',
    category: 'Ceremonias',
    height: 300,
    gradient: 'from-indigo-900/80 to-purple-900/80',
  },
  {
    id: 2,
    title: 'Meditación Grupal',
    category: 'Talleres',
    height: 400,
    gradient: 'from-violet-900/80 to-blue-900/80',
  },
  {
    id: 3,
    title: 'Naturaleza y Conexión',
    category: 'Naturaleza',
    height: 350,
    gradient: 'from-green-900/80 to-teal-900/80',
  },
  {
    id: 4,
    title: 'Taller de Cristales',
    category: 'Talleres',
    height: 280,
    gradient: 'from-cyan-900/80 to-blue-900/80',
  },
  {
    id: 5,
    title: 'Ceremonia del Cacao',
    category: 'Ceremonias',
    height: 380,
    gradient: 'from-amber-900/80 to-orange-900/80',
  },
  {
    id: 6,
    title: 'Curso de Astrología',
    category: 'Cursos',
    height: 320,
    gradient: 'from-purple-900/80 to-pink-900/80',
  },
  {
    id: 7,
    title: 'Amanecer Espiritual',
    category: 'Naturaleza',
    height: 360,
    gradient: 'from-orange-900/80 to-red-900/80',
  },
  {
    id: 8,
    title: 'Sanación Energética',
    category: 'Talleres',
    height: 340,
    gradient: 'from-emerald-900/80 to-cyan-900/80',
  },
  {
    id: 9,
    title: 'Ritual de Equinoccio',
    category: 'Ceremonias',
    height: 390,
    gradient: 'from-rose-900/80 to-pink-900/80',
  },
]
