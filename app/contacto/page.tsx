'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Contacto</h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          ¿Tienes preguntas o deseas más información? Estamos aquí para acompañarte en tu camino.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="glass rounded-lg p-3">
                  <Mail className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-foreground/70">contacto@armoniadelasesferas.mx</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="glass rounded-lg p-3">
                  <Phone className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-foreground/70">+52 656 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="glass rounded-lg p-3">
                  <MapPin className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ubicación</h3>
                  <p className="text-foreground/70">
                    Ciudad Juárez, Chihuahua<br />
                    México
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <div className="space-y-2 text-foreground/70">
              <p>Lunes a Viernes: 10:00 - 19:00</p>
              <p>Sábado: 10:00 - 14:00</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </motion.div>

        {/* Google Form Embed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-8"
        >
          <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
          
          {/* Replace this URL with your actual Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_EXAMPLE_FORM_ID/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl"
          >
            Cargando…
          </iframe>
          
          <p className="text-sm text-foreground/60 mt-4 text-center">
            También puedes llenar este formulario para ponerte en contacto con nosotros.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
