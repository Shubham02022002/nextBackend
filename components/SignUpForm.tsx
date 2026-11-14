"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

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
      </div>

      <form
        className="space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await axios.post("http://localhost:3000/api/user/signup", {
              firstName,
              lastName,
              email,
              password,
            });
            // const users = await
            router.push("/");
          } catch (error) {}
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-left font-medium text-slate-700">
            First name
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              placeholder="Taylor"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </label>

          <label className="block text-left text-sm font-medium text-slate-700">
            Last name
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              placeholder="Morgan"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
            />
          </label>
        </div>

        <label className="block text-left text-sm font-medium text-slate-700">
          Email
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="you@company.com"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </label>

        <label className="block text-left text-sm font-medium text-slate-700">
          Password
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Create a password"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
          />
        </label>

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
