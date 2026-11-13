export default function SignIn() {
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

          <SignInForm />
        </section>
      </div>
    </main>
  );
}

function SignInForm() {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="w-full  ">
          <p className="text-sm font-medium  text-center uppercase tracking-[0.18em] text-slate-500">
            Start free
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Create your account
          </h2>
        </div>
        {/* <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"> */}
        {/* 14-day trial */}
        {/* </div> */}
      </div>

      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-left font-medium text-slate-700">
            First name
            <input
              type="text"
              placeholder="Taylor"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </label>

          <label className="block text-left text-sm font-medium text-slate-700">
            Last name
            <input
              type="text"
              placeholder="Morgan"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </label>
        </div>

        <label className="block text-left text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </label>

        <label className="block text-left text-sm font-medium text-slate-700">
          Password
          <input
            type="password"
            placeholder="Create a password"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </label>

        {/* <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-600">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-[10px] font-bold text-slate-900 shadow-sm">
            ✓
          </div>
          No Credits Required
        </div> */}

        <button
          type="submit"
          className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800"
        >
          Create account
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300"
        >
          <span className="text-base">G</span>
          Continue with Google
        </button>
      </form>

      <p className="mt-5 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <a
          href="#"
          className="font-semibold text-slate-900 underline-offset-4 hover:underline"
        >
          Log in
        </a>
      </p>
    </div>
  );
}
