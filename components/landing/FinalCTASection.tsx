'use client'

import Link from 'next/link'
import FadeInSection from './FadeInSection'

export default function FinalCTASection() {
  return (
    <FadeInSection className="pb-24 pt-10 md:pb-28">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-[var(--secondary)] via-[var(--primary)] to-[var(--secondary)] px-6 py-14 text-center md:px-16 md:py-16">
        <h2 className="font-display text-4xl text-white md:text-6xl">¿Listo para explorar el cosmos?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-foreground/80 md:text-lg">
          Inscríbete al próximo curso en vivo y aprende astronomía de forma práctica, clara y acompañada.
        </p>

        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-foreground/80">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Atención personalizada</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Aprendizaje por niveles</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Comunidad activa</span>
        </div>

        <Link
          href="/cursos"
          className="glow-effect mt-8 inline-flex rounded-full bg-accent px-10 py-4 text-lg font-semibold text-background hover:scale-[1.03]"
        >
          Ver próximos cursos
        </Link>

        <p className="mt-5 text-sm text-foreground/75">Nuevos grupos iniciando pronto — cupo limitado.</p>
      </div>
    </FadeInSection>
  )
}
