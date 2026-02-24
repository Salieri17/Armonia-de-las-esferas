'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Calendar } from 'lucide-react'

export default function CursosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Cursos de Astronomía</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Aprende sobre el cosmos con nuestros cursos especializados para niños y adultos. Desde lo básico hasta técnicas avanzadas de observación telescópica.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            id={course.id}
            className="glass rounded-2xl p-6 hover:glow-effect transition-all"
          >
            <div className="text-5xl mb-4">{course.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
            
            <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm mb-4">
              {course.level}
            </div>

            <p className="text-foreground/70 mb-6">{course.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Clock size={16} />
                <span>{course.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Calendar size={16} />
                <span>{course.startDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <BookOpen size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Users size={16} />
                <span>{course.spots} lugares</span>
              </div>
            </div>

            {course.highlights && (
              <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                <p className="text-xs font-semibold text-accent mb-2">Incluye:</p>
                <ul className="space-y-1">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-foreground/70">{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-4" style={{ color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.95rem' }}>
              {course.price}
            </div>

            <a
              href={`/contacto?curso=${course.id}`}
              className="w-full bg-accent text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform inline-block text-center"
            >
              Inscribirse
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const coursesData = [
  {
    id: 'astro-ninos',
    icon: '�',
    title: 'Astronomía para Niños',
    level: 'Niños 6-11 años',
    description: '¡Una aventura fuera de este mundo! Acompaña a los telescopios, dibuja constelaciones y pinta tu planeta. Aprende los fundamentos del universo de forma divertida.',
    duration: '8 semanas',
    startDate: '21 de febrero - 14 de marzo 2026',
    schedule: 'Sábados 6:30 pm - 7:30 pm',
    location: 'Biblioteca Parque Central',
    spots: 20,
    price: '$1,490 MXN',
    highlights: [
      '🔭 Acompaña a los telescopios',
      '⭐ Dibuja constelaciones',
      '🪐 Pinta tu planeta',
    ],
  },
  {
    id: 'planetas-supernovas',
    icon: '🌌',
    title: 'De Planetas a Supernovas',
    level: 'Mayores de 12 años',
    description: 'Una guía completa con telescopios para explorar desde los planetas cercanos hasta las supernovas distantes. Aprende observación práctica avanzada del cosmos.',
    duration: '12 semanas',
    startDate: '24 de enero - 7 de marzo 2026',
    schedule: 'Todos los sábados 6:30 pm - 8:00 pm',
    location: 'El Jardín de Telescopios',
    spots: 15,
    price: '$2,000 MXN ($1,790 anticipada)',
    highlights: [
      '🔭 Observación con telescopios avanzados',
      '🪐 Planetas, estrellas y fenómenos estelares',
      '📚 Guía completa del universo observable',
    ],
  },
  {
    id: 'telescopio-basico',
    icon: '🔭',
    title: 'Técnicas de Observación Telescópica',
    level: 'Principiante - Intermedio',
    description: 'Domina el arte de usar telescopios correctamente. Aprende configuración, mantenimiento, calibración y técnicas avanzadas para observar la Luna, planetas y objetos profundos.',
    duration: '6 semanas',
    startDate: 'Próximas fechas disponibles',
    schedule: 'Sábados 7:00 pm - 8:30 pm',
    location: 'El Jardín de Telescopios',
    spots: 12,
    price: '$1,200 MXN',
    highlights: [
      '🔧 Equipamiento y calibración',
      '🌙 Observación lunar en detalle',
      '🪐 Búsqueda de objetos del espacio profundo',
    ],
  },
  {
    id: 'astrofotografia',
    icon: '📸',
    title: 'Astrofotografía: Del Cielo a tu Pantalla',
    level: 'Intermedio',
    description: 'Captura la belleza del cosmos con tu cámara. Aprende técnicas de exposición, ISO, procesamiento de imágenes y equipamiento recomendado para astrofotografía.',
    duration: '8 semanas',
    startDate: 'Próximas fechas disponibles',
    schedule: 'Viernes 8:00 pm - 10:00 pm',
    location: 'El Jardín de Telescopios',
    spots: 10,
    price: '$1,800 MXN',
    highlights: [
      '📷 Técnicas de exposición y control manual',
      '🎨 Procesamiento de imágenes Raw',
      '🌌 Captura de la Vía Láctea y objetos profundos',
    ],
  },
  {
    id: 'sistema-solar',
    icon: '🪐',
    title: 'Sistema Solar: Observación Práctica',
    level: 'Intermedio',
    description: 'Observa Saturno con sus anillos, Júpiter con sus lunas galileanas, Marte y otros planetas. Comprende dinámica orbital, composición y movimientos planetarios.',
    duration: '6 semanas',
    startDate: 'Próximas fechas disponibles',
    schedule: 'Jueves 7:30 pm - 9:00 pm',
    location: 'El Jardín de Telescopios',
    spots: 12,
    price: '$1,100 MXN',
    highlights: [
      '🪐 Saturno, sus anillos y lunas',
      '🔴 Júpiter y observación de fenómenos atmosféricos',
      '📊 Movimiento orbital y dinámica del sistema',
    ],
  },
  {
    id: 'cosmologia-avanzada',
    icon: '🌠',
    title: 'Cosmología y Fenómenos Extremos',
    level: 'Avanzado',
    description: 'Explora los misterios más profundos del universo: agujeros negros, supernovas, expansión cósmica, radiación de fondo y las grandes preguntas sobre nuestro cosmos.',
    duration: '10 semanas',
    startDate: 'Próximas fechas disponibles',
    schedule: 'Miércoles 7:00 pm - 8:30 pm',
    location: 'El Jardín de Telescopios',
    spots: 8,
    price: '$1,600 MXN',
    highlights: [
      '🌀 Agujeros negros y fenómenos extremos',
      '💥 Supernovas y explosiones cósmicas',
      '🌌 Expansión, estructura y futuro del universo',
    ],
  },
]
