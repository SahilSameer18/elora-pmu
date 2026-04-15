const Footer = () => {
  return (
    <footer className="mt-12 border-t border-[#e9d5d0] bg-[#fff7f4] px-5 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>Elora PMU • Lip Blushing in Delhi</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="tel:+919999999999" className="transition hover:text-slate-950">Call +91 99999 99999</a>
          <a href="https://api.whatsapp.com/send?phone=+919999999999" target="_blank" rel="noreferrer" className="transition hover:text-slate-950">WhatsApp</a>
          <a href="#contact" className="rounded-full border border-[#c0746a] bg-white px-4 py-2 text-[#7d4c44] transition hover:bg-[#f7e5e1]">Book Appointment</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;