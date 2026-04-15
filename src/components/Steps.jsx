const Steps = () => {
  const steps = [
    {
      title: 'Consultation',
      description: 'Discuss your desired colour, shape, and sensitivity needs with our expert artist.',
    },
    {
      title: 'Design & mapping',
      description: 'Precise lip mapping ensures symmetry and a flattering Korean-inspired finish.',
    },
    {
      title: 'Gentle pigment application',
      description: 'We layer soft pigment using accredited PMU tools for a natural blush effect.',
    },
    {
      title: 'Aftercare guidance',
      description: 'Receive tailored care instructions for fast healing and longer-lasting colour.',
    },
  ]

  return (
    <section id="procedure" className="mt-10 scroll-mt-28 rounded-[36px] bg-white p-6 shadow-[0_18px_45px_rgba(217,181,171,0.18)] sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#a9685b]">Procedure</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Simple steps to perfect lip colour.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Each session is designed to feel calm, clean, and refreshingly precise.
          </p>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-[#f2d8d2] bg-[#fff5f2] p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8c3ba] text-sm font-semibold text-slate-900">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold text-slate-950">{step.title}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps;
