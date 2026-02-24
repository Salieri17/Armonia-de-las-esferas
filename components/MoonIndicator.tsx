'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, X } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const moonData: Record<string, { title: string; description: string; details: string[] }> = {
  'Luna Nueva': {
    title: 'Luna Nueva',
    description: 'La Luna se encuentra entre la Tierra y el Sol. No es visible desde nuestro planeta durante esta fase.',
    details: [
      '0% de iluminación',
      'Invisible a simple vista',
      'Marca el inicio del ciclo lunar',
      'Ciclo sinódico: ~29.5 días',
      'Distancia media: 384,400 km',
    ],
  },
  'Creciente': {
    title: 'Luna Creciente',
    description: 'Poco después de la Luna Nueva, aparece un delgado creciente visible al atardecer.',
    details: [
      '~25% de iluminación',
      'Visible después de la puesta del sol',
      'Hacia el oeste',
      'Mayores variaciones en brillo',
      'Sigue un ángulo de elongación variable',
    ],
  },
  'Cuarto Creciente': {
    title: 'Cuarto Creciente',
    description: 'La Luna forma un ángulo de 90° con el Sol. Exactamente el 50% del disco lunar se ve iluminado.',
    details: [
      '50% de iluminación (semicírculo)',
      'Visible en el cielo diurno',
      'Culmina al mediodía',
      'Posición: 90° de separación angular',
      'Órbita elíptica con excentricidad 0.0549',
    ],
  },
  'Gibosa Creciente': {
    title: 'Luna Gibosa Creciente',
    description: 'Más de la mitad del disco lunar está iluminado, acercándose a la Luna Llena.',
    details: [
      '~75% de iluminación',
      'Visible casi toda la noche',
      'Brillo significativamente mayor',
      'Aproximándose a oposición con el Sol',
      'Visible hacia el este al atardecer',
    ],
  },
  'Luna Llena': {
    title: 'Luna Llena',
    description: 'La Tierra se ubica entre el Sol y la Luna. El disco lunar está 100% iluminado.',
    details: [
      '100% de iluminación',
      'Máximo brillo lunar',
      'Visible toda la noche',
      'Oposición con el Sol (180°)',
      'Pueden ocurrir eclipses lunares en esta fase',
    ],
  },
}

export default function MoonIndicator() {
  const { moonPhase, isLoading } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading || !moonPhase) return null

  const data = moonData[moonPhase.phase] || moonData['Luna Nueva']

  return (
    <>
      {/* Floating Widget */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 glass rounded-full p-4 glow-effect hover:scale-110 transition-transform z-40"
      >
        <div className="flex flex-col items-center gap-1">
          <Moon className="w-6 h-6" style={{ color: 'var(--accent)' }} />
          <span className="text-xs font-medium">{moonPhase.phase}</span>
          <span className="text-xs text-foreground/60">{moonPhase.illumination}%</span>
        </div>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <Moon className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent)' }} />
                <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
                <p className="text-sm text-foreground/60">Iluminación: {moonPhase.illumination}%</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                    {data.description}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Datos Astronómicos</h3>
                  <ul className="space-y-1">
                    {data.details.map((detail, idx) => (
                      <li key={idx} className="text-foreground/70 text-xs flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
