import { Hero } from '@/components/layout/hero'
import { Features } from '@/components/layout/features'
import { Pricing } from '@/components/layout/pricing'
import { FAQ } from '@/components/layout/faq'
import { CTA } from '@/components/layout/cta'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-transparent">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <main className="flex-1">
        {/* Hero section with background */}
        <div className="relative min-h-[100dvh]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800" />
          
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

          <div className="relative z-40 flex flex-col min-h-[100dvh]">
            <div className="flex flex-col flex-grow items-center justify-center px-4 pt-32 sm:pt-36 md:pt-40 lg:pt-56">
              <div className="w-full max-w-7xl mx-auto">
                <Hero />
              </div>
            </div>
          </div>
        </div>

        {/* Content sections */}
        <div className="relative z-20 bg-background">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-4">
              <Features />
            </div>

            <div className="py-4" id="pricing">
              <Pricing />
            </div>

            <div className="py-4">
              <FAQ />
            </div>

            <div className="py-4 lg:pb-16">
              <CTA />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}