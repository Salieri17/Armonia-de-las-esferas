'use client'

import EmotionalSection from '@/components/landing/EmotionalSection'
import FeaturedCoursesSection from '@/components/landing/FeaturedCoursesSection'
import FinalCTASection from '@/components/landing/FinalCTASection'
import HeroSection from '@/components/landing/HeroSection'
import SocialProofSection from '@/components/landing/SocialProofSection'
import WhyChooseSection from '@/components/landing/WhyChooseSection'

export default function Home() {
  return (
    <div className="container mx-auto space-y-2 px-4 py-8 md:px-6 md:py-10">
      <HeroSection />
      <WhyChooseSection />
      <SocialProofSection />
      <FeaturedCoursesSection />
      <EmotionalSection />
      <FinalCTASection />
    </div>
  )
}
