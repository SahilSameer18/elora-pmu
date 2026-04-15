const StickyCTA = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 border-t border-slate-200 px-4 py-3 shadow-[0_-10px_30px_rgba(151,96,88,0.12)] backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <a
          href="#contact"
          className="flex-1 rounded-full bg-[#c16a5f] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#9b4b41]"
        >
          Book Now
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+919999999999&text=Hello%20Elora%20PMU%2C%20I%20want%20to%20book%20lip%20blushing%20in%20Delhi"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          aria-label="WhatsApp"
        >
          WhatsApp
        </a>
        <a
          href="tel:+919999999999"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[#f4f0ed] px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#e8ded9]"
          aria-label="Call"
        >
          Call
        </a>
      </div>
    </div>
  )
}

export default StickyCTA;
