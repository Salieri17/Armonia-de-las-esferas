'use client'

import FadeInSection from './FadeInSection'

export default function EmotionalSection() {
  return (
    <FadeInSection className="py-24 md:py-28">
      <div className="nebula-overlay rounded-[2rem] border border-white/10 px-6 py-20 text-center md:px-16">
        <blockquote className="font-display mx-auto max-w-4xl text-4xl leading-tight text-white md:text-6xl">
          El universo no es algo que solo observas.
          <br />
          Es algo del que también formas parte.
        </blockquote>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-foreground/80 md:text-xl">
          Cada sesión invita a niñas, niños, jóvenes y adultos a descubrir el cielo juntos. Con guía en vivo y
          experiencias prácticas, la curiosidad se transforma en conocimiento y confianza.
        </p>
      </div>
    </FadeInSection>
  )
}
