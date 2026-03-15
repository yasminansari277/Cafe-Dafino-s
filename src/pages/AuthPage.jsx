import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Lock, Mail, User } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const FORM = {
  login: "login",
  register: "register",
  forgot: "forgot"
};

export default function AuthPage() {
  const [activeForm, setActiveForm] = useState(FORM.login);

  const labelClass = "mb-1.5 block text-sm font-medium text-primary";
  const iconClass = "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 shrink-0 text-primary/60";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex flex-col">
        <main className="flex-1 pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-buttonborder/60 bg-primary-foreground px-4 py-2 text-sm font-medium text-primary shadow-sm transition hover:-translate-y-px hover:shadow-md"
              >
                <ArrowLeft size={16} />
                Back to home
              </Link>
              <p className="hidden sm:block font-paragraph text-xs uppercase tracking-[0.18em] text-primary/70">Cafe Dafino&apos;s</p>
            </div>

            <div className="rounded-2xl border border-buttonborder/60 bg-primary-foreground shadow-lg shadow-primary/10 p-7 sm:p-8">
              <div className="mb-6 text-center">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-primary shadow-sm ring-1 ring-buttonborder/30">
                  <Lock size={18} />
                </span>
                <h2 className="font-heading text-3xl font-semibold text-primary">Welcome back</h2>
                <p className="mt-2 text-sm text-foreground/70">Simple, clean, and aligned with the site.</p>
              </div>

              {activeForm === FORM.login && (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="loginEmail" className={labelClass}>
                      Email
                    </label>
                    <div className="relative">
                      <Mail aria-hidden="true" className={iconClass} />
                      <Input
                        id="loginEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="loginPassword" className={labelClass}>
                      Password
                    </label>
                    <div className="relative">
                      <Lock aria-hidden="true" className={iconClass} />
                      <Input
                        id="loginPassword"
                        type="password"
                        placeholder="Enter your password"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                    <label className="inline-flex items-center gap-2 text-foreground/80">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-buttonborder/70 text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      Remember me
                    </label>
                    <button
                      type="button"
                      onClick={() => setActiveForm(FORM.forgot)}
                      className="font-medium text-primary hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <Button type="button" className="w-full h-12 rounded-lg text-base font-semibold shadow-md hover:shadow-lg">
                    Sign in
                  </Button>

                  <div className="relative py-1">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-buttonborder/30" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase tracking-wide">
                      <span className="bg-primary-foreground px-2 text-foreground/60">or</span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 rounded-lg text-base font-medium border-buttonborder/60 text-primary hover:bg-secondary/40"
                  >
                    Continue with Google
                  </Button>

                  <p className="text-center text-sm text-foreground/75">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveForm(FORM.register)}
                      className="font-semibold text-primary hover:underline"
                    >
                      Create account
                    </button>
                  </p>
                </form>
              )}

              {activeForm === FORM.register && (
                <form className="space-y-4">
                  <h3 className="text-center text-2xl font-semibold text-primary">Create account</h3>
                  <p className="text-center text-sm text-foreground/70">Use your email to register a new account.</p>

                  <div>
                    <label htmlFor="registerName" className={labelClass}>
                      Full Name
                    </label>
                    <div className="relative">
                      <User aria-hidden="true" className={iconClass} />
                      <Input
                        id="registerName"
                        type="text"
                        placeholder="John Doe"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="registerEmail" className={labelClass}>
                      Email
                    </label>
                    <div className="relative">
                      <Mail aria-hidden="true" className={iconClass} />
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="registerPassword" className={labelClass}>
                      Password
                    </label>
                    <div className="relative">
                      <Lock aria-hidden="true" className={iconClass} />
                      <Input
                        id="registerPassword"
                        type="password"
                        placeholder="Create a password"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <Button type="button" className="w-full h-12 rounded-lg text-base font-semibold shadow-md hover:shadow-lg">
                    Create account
                  </Button>

                  <p className="text-center text-xs text-foreground/65">
                    By continuing, you agree to our Terms and Privacy Policy.
                  </p>

                  <p className="text-center text-sm text-foreground/75">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveForm(FORM.login)}
                      className="font-semibold text-primary hover:underline"
                    >
                      Back to login
                    </button>
                  </p>
                </form>
              )}

              {activeForm === FORM.forgot && (
                <form className="space-y-4">
                  <h3 className="text-center text-2xl font-semibold text-primary">Reset password</h3>
                  <p className="text-center text-sm text-foreground/70">Enter your email and we&apos;ll send reset instructions.</p>

                  <div>
                    <label htmlFor="forgotEmail" className={labelClass}>
                      Email
                    </label>
                    <div className="relative">
                      <Mail aria-hidden="true" className={iconClass} />
                      <Input
                        id="forgotEmail"
                        type="email"
                        placeholder="you@example.com"
                        className="h-12 pl-11 bg-background border-buttonborder/50 text-primary placeholder:text-primary/45"
                      />
                    </div>
                  </div>

                  <Button type="button" className="w-full h-12 rounded-lg text-base font-semibold shadow-md hover:shadow-lg">
                    Send reset link
                  </Button>

                  <p className="text-center text-sm text-foreground/75">
                    Remember your password?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveForm(FORM.login)}
                      className="font-semibold text-primary hover:underline"
                    >
                      Back to login
                    </button>
                  </p>
                </form>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
