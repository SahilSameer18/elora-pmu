import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="inline-flex items-center gap-3 text-lg font-semibold text-slate-950">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#f5d2ca] text-sm font-bold text-[#7b483e]">
            E
          </span>
          <span>Elora PMU</span>
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-950 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <nav className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
          <a href="#benefits" className="transition hover:text-slate-950">Benefits</a>
          <a href="#procedure" className="transition hover:text-slate-950">Procedure</a>
          <a href="#pricing" className="transition hover:text-slate-950">Pricing</a>
          <a href="#testimonials" className="transition hover:text-slate-950">Testimonials</a>
          <a href="#contact" className="rounded-full border border-[#c0746a] bg-white px-4 py-2 text-[#7d4c44] transition hover:bg-[#f7e5e1]">
            Book Now
          </a>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-5 pb-5 pt-4 md:hidden">
          <div className="space-y-3 text-sm text-slate-700">
            <a href="#benefits" className="block rounded-3xl px-4 py-3 transition hover:bg-[#f7e5e1]" onClick={() => setIsOpen(false)}>
              Benefits
            </a>
            <a href="#procedure" className="block rounded-3xl px-4 py-3 transition hover:bg-[#f7e5e1]" onClick={() => setIsOpen(false)}>
              Procedure
            </a>
            <a href="#pricing" className="block rounded-3xl px-4 py-3 transition hover:bg-[#f7e5e1]" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
            <a href="#testimonials" className="block rounded-3xl px-4 py-3 transition hover:bg-[#f7e5e1]" onClick={() => setIsOpen(false)}>
              Testimonials
            </a>
            <a
              href="#contact"
              className="block rounded-full border border-[#c0746a] bg-[#fffaf8] px-4 py-3 text-center font-semibold text-[#7d4c44] transition hover:bg-[#f7e5e1]"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar;
