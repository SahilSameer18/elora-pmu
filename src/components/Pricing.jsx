const Pricing = () => {
  const plans = [
    {
      name: 'Signature Lip Blush',
      price: '₹5,499',
      details: 'Soft Korean tint finish for natural everyday colour.',
    },
    {
      name: 'Deluxe Ombre Glow',
      price: '₹7,299',
      details: 'Soft gradient definition with subtle shine and extra dimension.',
    },
    {
      name: 'Refresher Touch-up',
      price: '₹3,499',
      details: 'Maintain the perfect tone with a gentle follow-up session.',
    },
  ]

  return (
    <section id="pricing" className="mt-10 scroll-mt-28 rounded-[36px] bg-[#faf0ed] p-6 shadow-[0_20px_50px_rgba(233,180,171,0.16)] sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[#a55c4f]">Pricing</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Packages starting from ₹5,499.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Transparent pricing with caring service and premium lip blush application.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-[32px] border border-white bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#a3685d]">{plan.name}</p>
            <p className="mt-4 text-3xl font-semibold text-slate-950">{plan.price}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{plan.details}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing;
