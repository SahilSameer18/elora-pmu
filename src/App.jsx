import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BeforeAfter from './components/BeforeAfter'
import Benefits from './components/Benefits'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#f9f1ef] text-slate-900 antialiased">
      <StickyCTA />
      <Navbar />

      <main id="top" className="mx-auto max-w-6xl px-5 pb-28 pt-24 sm:px-6 lg:px-8">
        <Hero />
        <BeforeAfter />
        <Benefits />
        <Steps />
        <Pricing />
        <Testimonials />
        <LeadForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
