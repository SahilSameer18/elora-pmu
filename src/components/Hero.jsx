const Hero = () => {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-gradient-to-b from-[#fff5f0] via-[#f8e0da] to-[#f7ede7] px-5 py-10 shadow-[0_30px_80px_rgba(236,181,175,0.18)] sm:px-8 sm:py-14">
      <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#f8d0c5]/80 blur-3xl" />
      <div className="absolute left-0 top-1/3 h-28 w-28 rounded-full bg-[#f4c2b9]/70 blur-3xl" />
      <div className="relative mx-auto max-w-4xl">
        <p className="mb-4 inline-flex rounded-full border border-[#e8c5bb] bg-white/80 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-[#68453a] shadow-sm">
          Lip Blushing in Delhi
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-6">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Premium Korean aesthetic lip blushing for soft, natural color.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
              Get beautifully tinted lips with gentle PMU care, precise pigment layering, and a natural finish designed for Delhi skin tones.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#c0746a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a05551]"
              >
                Book Now
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+919999999999&text=Hi%20I%20want%20to%20book%20lip%20blushing%20in%20Delhi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#c0746a] bg-white px-6 py-3 text-sm font-semibold text-[#7d4c44] transition hover:bg-[#f7e5e1]"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center rounded-full border border-[#c0746a] bg-[#f4f0ed] px-6 py-3 text-sm font-semibold text-[#7d4c44] transition hover:bg-[#e8ded9]"
              >
                Call
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/90 bg-white/90 p-5 shadow-[0_20px_45px_rgba(210,177,168,0.24)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-[#fff3f1] p-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-[#b57466]">Session Time</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">45 min</p>
              </div>
              <div className="rounded-[28px] bg-[#fff3f1] p-4 text-center">
                <p className="text-sm uppercase tracking-[0.24em] text-[#b57466]">Start Price</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950">₹5,499</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p>• Korean lip tint effect with subtle glow</p>
              <p>• Safe PMU pigments and expert shaping</p>
              <p>• Ideal for everyday elegance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
