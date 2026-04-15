const BeforeAfter = () => {
  return (
    <section className="mt-10 rounded-[36px] border border-[#e8d7d0] bg-white/80 p-6 shadow-[0_20px_60px_rgba(235,192,184,0.18)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[#a96f63]">Before & After</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
            See the gentle, flattering lip blush results.
          </h2>
        </div>
        <p className="text-sm text-slate-600">Trusted by Delhi clients seeking soft, lasting colour.</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] bg-[#faf2ef] p-5 shadow-sm">
          <div className="flex min-h-[24rem] flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#f3d2cb] to-[#f7e6e1] p-6 text-center text-slate-700">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-lg font-semibold text-[#a45b4f]">
                B
              </div>
              <div className="mx-auto mb-6 overflow-hidden rounded-[28px] bg-white/80 shadow-inner shadow-slate-300/30 max-w-[360px]">
                <img
                  src="/before.png"
                  alt="Before lip blush result"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">Before</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Subtle base ready for colour correction and soft tinting.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] bg-[#fff4f1] p-5 shadow-sm">
          <div className="flex min-h-[24rem] flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#f8d0c8] to-[#ffe9e3] p-6 text-center text-slate-700">
            <div>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-lg font-semibold text-[#b76a5e]">
                A
              </div>
              <div className="mx-auto mb-6 overflow-hidden rounded-[28px] bg-white/80 shadow-inner shadow-slate-300/30 max-w-[360px]">
                <img
                  src="/after.png"
                  alt="After lip blush result"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">After</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Balanced pink tone with luminous shape and natural coverage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter;

