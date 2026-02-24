import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">✦</span>
              <span className="text-lg font-bold">Armonía de las Esferas</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Conocimiento, energía y expansión de conciencia
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cursos" className="text-foreground/60 hover:text-foreground transition-colors">Cursos</Link></li>
              <li><Link href="/eventos" className="text-foreground/60 hover:text-foreground transition-colors">Eventos</Link></li>
              <li><Link href="/blog" className="text-foreground/60 hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/galeria" className="text-foreground/60 hover:text-foreground transition-colors">Galería</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Ciudad Juárez, México</li>
              <li>contacto@armoniadelasesferas.mx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Armonía de las Esferas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
