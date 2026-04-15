const Benefits = () => {
  const items = [
    {
      title: 'Soft Korean tint finish',
      description: 'Delicate colour buildup for natural, wearable lip blush that feels light and elegant.',
    },
    {
      title: 'Minimal downtime care',
      description: 'Fast recovery protocols and gentle pigments for a comfortable Delhi experience.',
    },
    {
      title: 'Custom shade design',
      description: 'Personalised tone matching to your skin, undertone, and daily look preferences.',
    },
    {
      title: 'Long-lasting results',
      description: 'Fade-resistant lip colour that keeps your lips looking polished for weeks.',
    },
  ]

  return (
    <section id="benefits" className="mt-10 scroll-mt-28 rounded-[36px] bg-[#fef7f4] p-6 shadow-[0_18px_45px_rgba(231,178,168,0.16)] sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[#9a5d51]">Benefits</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Why choose lip blushing at Elora PMU?
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          A carefully crafted procedure for fuller-looking lips, even tone, and a smoother makeup routine.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-xl font-semibold text-slate-950">{item.title}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits;
