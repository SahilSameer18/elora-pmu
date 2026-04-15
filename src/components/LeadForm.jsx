import { useState } from 'react'

const LeadForm = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setSubmitted(true)
    setName('')
    setPhone('')
  }

  return (
    <section id="contact" className="mt-10 rounded-[36px] bg-[#f6ebe7] p-6 shadow-[0_18px_45px_rgba(222,164,150,0.16)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[#a85f52]">Lead Form</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            Ready to book your lip blushing consultation?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            Share your details and our team will contact you for a fast appointment and tailored shade plan.
          </p>
        </div>
        <form className="space-y-5 rounded-[32px] bg-white p-6 shadow-sm sm:p-8" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full rounded-3xl border border-[#e7d2cd] bg-[#fffaf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c97466] focus:ring-2 focus:ring-[#f2d2ca]/60"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-3xl border border-[#e7d2cd] bg-[#fffaf8] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c97466] focus:ring-2 focus:ring-[#f2d2ca]/60"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#c16a5f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a45146]"
          >
            Submit Request
          </button>

          {submitted && (
            <p className="rounded-3xl bg-[#e9d5cf] px-4 py-3 text-sm text-[#7b4d43]">
              Thanks! We’ll contact you shortly to confirm your appointment.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default LeadForm;
