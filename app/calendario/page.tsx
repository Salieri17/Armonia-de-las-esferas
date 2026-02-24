'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function CalendarioPage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null)

  const events = [
    {
      title: 'Astronomía para Niños',
      start: '2026-02-21',
      end: '2026-03-15',
      backgroundColor: '#a0a7d8',
      borderColor: '#a0a7d8',
      classNames: ['course-event'],
      extendedProps: {
        level: 'Niños 6-11 años',
        schedule: 'Sábados 6:30 pm - 7:30 pm',
        duration: '8 semanas',
        location: 'Biblioteca Parque Central',
        price: '$1,490 MXN',
        spots: 20,
      },
    },
    {
      title: 'De Planetas a Supernovas',
      start: '2026-01-24',
      end: '2026-03-08',
      backgroundColor: '#7881a8',
      borderColor: '#7881a8',
      classNames: ['course-event'],
      extendedProps: {
        level: 'Mayores de 12 años',
        schedule: 'Todos los sábados 6:30 pm - 8:00 pm',
        duration: '12 semanas',
        location: 'El Jardín de Telescopios',
        price: '$2,000 MXN ($1,790 anticipada)',
        spots: 15,
      },
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Calendario de Cursos</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Consulta las fechas reales de los cursos publicados en la sección de cursos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-2xl p-6 md:p-8 mb-8"
      >
        <div className="calendar-container">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale="es"
            events={events}
            eventClick={(info) => {
              setSelectedEvent(info.event)
            }}
            height="auto"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth',
            }}
            buttonText={{
              today: 'Hoy',
              month: 'Mes',
            }}
          />
        </div>
      </motion.div>

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-xl font-bold mb-4">Detalle del curso</h3>
          <div className="space-y-2 text-sm text-foreground/80">
            <p><strong>Curso:</strong> {selectedEvent.title}</p>
            <p><strong>Nivel:</strong> {selectedEvent.extendedProps.level}</p>
            <p><strong>Horario:</strong> {selectedEvent.extendedProps.schedule}</p>
            <p><strong>Duración:</strong> {selectedEvent.extendedProps.duration}</p>
            <p><strong>Sede:</strong> {selectedEvent.extendedProps.location}</p>
            <p><strong>Cupo:</strong> {selectedEvent.extendedProps.spots} lugares</p>
            <p><strong>Precio:</strong> {selectedEvent.extendedProps.price}</p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-6 md:p-8"
      >
        <h3 className="text-xl font-bold mb-4">Leyenda</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#a0a7d8' }}></div>
            <span className="text-sm">Astronomía para Niños</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#7881a8' }}></div>
            <span className="text-sm">De Planetas a Supernovas</span>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        .calendar-container {
          color: var(--foreground);
        }
        .fc {
          color: var(--foreground);
        }
        .fc-theme-standard td,
        .fc-theme-standard th {
          border-color: rgba(255, 255, 255, 0.1);
        }
        .fc .fc-button {
          background-color: var(--accent);
          border-color: var(--accent);
          color: var(--background);
        }
        .fc .fc-button:hover {
          background-color: var(--accent);
          opacity: 0.9;
        }
        .fc .fc-button-active {
          background-color: var(--primary);
          border-color: var(--primary);
        }
        .fc-daygrid-day-number {
          color: var(--foreground);
        }
        .fc-col-header-cell-cushion {
          color: var(--foreground);
        }
        .fc-event {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
