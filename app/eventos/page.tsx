'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function EventosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Eventos Astronómicos</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Observaciones nocturnas, talleres prácticos y eventos especiales para astrónomos aficionados y familias.
        </p>
      </motion.div>

      <div className="space-y-8">
        {eventsData.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-8 hover:glow-effect transition-all"
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              {/* Date Block */}
              <div className="text-center glass rounded-xl p-4 md:w-24">
                <div className="text-3xl font-bold">{event.day}</div>
                <div className="text-sm text-foreground/60">{event.month}</div>
              </div>

              {/* Event Info */}
              <div>
                <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm mb-2">
                  {event.type}
                </div>
                <h2 className="text-2xl font-bold mb-3">{event.title}</h2>
                <p className="text-foreground/70 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>Máx. {event.capacity} personas</span>
                  </div>
                </div>

                {event.price && (
                  <div className="mb-4 p-2 bg-accent/10 rounded">
                    <p className="text-sm font-semibold text-accent">{event.price}</p>
                  </div>
                )}

                {event.program && (
                  <div className="mb-4 p-3 bg-foreground/5 rounded-lg">
                    <p className="text-xs font-semibold text-accent mb-2">Programa:</p>
                    <ul className="space-y-1">
                      {event.program.map((item, idx) => (
                        <li key={idx} className="text-xs text-foreground/70">
                          <span className="font-semibold">{item.time}:</span> {item.activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              <a
                href={`/contacto?evento=${event.id}`}
                className="bg-accent text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform text-center whitespace-nowrap"
              >
                Reservar Lugar
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const eventsData = [
  {
    id: 'obs-luna-marzo',
    day: '15',
    month: 'MAR',
    type: 'Observación',
    title: 'Observación Lunar y Cráteres',
    description: 'Sesión de observación telescópica para admirar los cráteres lunares, mares lunares y formaciones geológicas. Luna en fase creciente, condiciones excelentes.',
    time: '20:00 - 22:00',
    location: 'El Jardín de Telescopios',
    capacity: 30,
    price: '$150 MXN (niños), $250 MXN (adultos)',
  },
  {
    id: 'taller-constelaciones',
    day: '22',
    month: 'MAR',
    type: 'Taller',
    title: 'Navegación por Constelaciones',
    description: 'Aprende a identificar las 88 constelaciones principales, mitología griega y técnicas de navegación nocturna sin instrumentos. Incluye brújula y planisferio.',
    time: '19:00 - 21:00',
    location: 'Planetario',
    capacity: 25,
    price: '$100 MXN (niños), $180 MXN (adultos)',
  },
  {
    id: 'noche-jardin-cosmico',
    day: '13',
    month: 'DIC',
    type: 'Evento Especial',
    title: 'Noche en el Jardín Cósmico',
    description: 'Experiencia única con telescopios para principiantes e intermedios. Observa Saturno, Júpiter, cúmulos estelares y más. Incluye proyección de la película Gravedad.',
    time: '17:00 - 21:00',
    location: 'El Jardín de Telescopios',
    capacity: 50,
    price: '$499 MXN (niños), $599 MXN (adultos)',
    program: [
      { time: '17:00 - 19:00', activity: 'Acceso al jardín de telescopios' },
      { time: '17:30 - 18:00', activity: 'Telescopios principiantes - Observación de Saturno' },
      { time: '18:00 - 18:30', activity: 'Telescopios intermedios - Observación de Júpiter' },
      { time: '18:30 - 19:00', activity: 'Telescopio computarizado - Cúmulos estelares' },
      { time: '19:00 - 21:00', activity: 'Proyección: Gravedad' },
    ],
  },
  {
    id: 'obs-planetas',
    day: '20',
    month: 'APR',
    type: 'Observación Especial',
    title: 'Visita a Júpiter y sus Lunas',
    description: 'Observación telescópica especializada de Júpiter en excelente posición. Veremos las 4 lunas galileanas (Io, Europa, Ganimedes, Calisto) y bandas atmosféricas.',
    time: '20:30 - 23:00',
    location: 'El Jardín de Telescopios',
    capacity: 20,
    price: '$200 MXN (niños), $300 MXN (adultos)',
  },
  {
    id: 'astro-foto-nocturna',
    day: '5',
    month: 'MAY',
    type: 'Taller Práctico',
    title: 'Fotografía Nocturna - Vía Láctea',
    description: 'Taller práctico para capturar la Vía Láctea a simple vista. Técnicas de exposición, ISO, apertura, procesamiento básico. Traer cámara DSLR o mirrorless.',
    time: '21:00 - 00:30',
    location: 'Desierto (punto oscuro certificado)',
    capacity: 15,
    price: '$350 MXN por persona',
  },
]
