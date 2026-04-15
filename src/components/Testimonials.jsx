const Testimonials = () => {
  const reviews = [
    {
      name: 'Priya S.',
      quote: 'The lip blushing result feels so natural, and I love how soft the colour looks every day.',
    },
    {
      name: 'Aditi M.',
      quote: 'The care was excellent and the final shape balanced my lips beautifully. Highly recommended.',
    },
    {
      name: 'Meera K.',
      quote: 'Fast booking, calm studio, and the whole process felt gentle. My lips look amazing.',
    },
  ]

  return (
    <section id="testimonials" className="mt-10 scroll-mt-28 rounded-[36px] bg-white p-6 shadow-[0_18px_45px_rgba(225,179,169,0.16)] sm:p-8">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-[#9e5a4d]">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Happy clients from Delhi share their glow.
        </h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.name} className="flex min-h-[18rem] flex-col justify-between rounded-[32px] border border-[#f3ddd7] bg-[#fff6f3] p-5 shadow-sm">
            <div>
              <div className="mb-4 flex gap-1 text-[#c2685b]">★★★★★</div>
              <p className="text-sm leading-7 text-slate-700">"{review.quote}"</p>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-950">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
