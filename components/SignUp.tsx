import SignUpForm from "./SignUpForm";
export default function SignUp() {
  return (
    <main className="max-h-0 bg-[#f6f5f3] text-slate-900 antialiased">
      <div className="mx-auto flex max-h-screen max-w-7xl flex-col px-6 py-8 lg:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white shadow-sm">
              A
            </div>

            <div>
              <p className="text-lg font-semibold tracking-tight">Aster</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">
              Features
            </a>

            <a href="#solutions" className="transition hover:text-slate-900">
              Solutions
            </a>

            <a href="#pricing" className="transition hover:text-slate-900">
              Pricing
            </a>

            <a href="#resources" className="transition hover:text-slate-900">
              Resources
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 md:inline-flex">
              Log in
            </button>

            <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
              Start free
            </button>
          </div>
        </header>

        <section className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              New: AI-powered sales workflows
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-[-0.06em] text-slate-950 sm:text-6xl">
              Turn more leads into revenue
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Aster is the operating system for high-growth teams—centralize
              pipeline, automate follow-ups, and uncover what drives
              conversions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800">
                Get started free
              </button>

              <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
                Book a demo
              </button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-slate-900">4.9/5</span>

                <span>average rating</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-slate-900">14k+</span>

                <span>teams onboarded</span>
              </div>
            </div>
          </div>

          <SignUpForm />
        </section>
      </div>
    </main>
  );
}
