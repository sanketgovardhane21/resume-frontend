"use client";

export default function UpgradePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text-main)]">
      <div className="mx-auto max-w-[420px] px-4 pt-6 pb-24">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <button className="text-xl text-[var(--text-sub)]">✕</button>
          <h1 className="text-base font-semibold">ResumeCraft</h1>
          <div className="w-6" />
        </div>

        {/* TITLE */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Upgrade to Premium</h2>
          <p className="mt-3 text-sm text-[var(--text-sub)]">
            Unlock all premium features and maximize your job search success!
          </p>
        </div>

        {/* PLANS */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          {/* LIFETIME */}
          <div className="rounded-2xl border border-yellow-500 bg-gradient-to-b from-[#2a2415] to-[#16120a] p-4">
            <span className="mb-2 inline-block rounded-full bg-yellow-600 px-3 py-1 text-xs font-semibold text-black">
              BEST VALUE
            </span>

            <h3 className="mt-2 text-lg font-semibold">Lifetime Plan</h3>
            <p className="mt-1 text-xs text-[var(--text-sub)]">
              One-time payment
            </p>

            <p className="mt-6 text-3xl font-bold">₹699</p>

            <ul className="mt-4 space-y-2 text-sm text-[var(--text-sub)]">
              <li>✔ Lifetime Access</li>
            </ul>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-400 py-3 text-sm font-semibold text-black">
              Upgrade – ₹699
            </button>
          </div>

          {/* YEARLY */}
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <h3 className="text-lg font-semibold">Yearly Plan</h3>
            <p className="mt-1 text-xs text-[var(--text-sub)]">
              Billed annually. Cancel anytime.
            </p>

            <p className="mt-6 text-3xl font-bold">
              ₹399 <span className="text-sm font-medium">/ year</span>
            </p>

            <button className="mt-10 w-full rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white">
              Upgrade – ₹399 / year
            </button>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-10">
          <h4 className="mb-4 text-center text-sm font-semibold text-[var(--text-sub)]">
            Premium Features
          </h4>

          <ul className="space-y-3 text-sm text-[var(--text-sub)]">
            <li>✔ Unlock All Premium Resume Themes</li>
            <li>✔ Advanced Customization Options</li>
            <li>✔ Remove ResumeCraft Branding</li>
            <li>✔ Priority Customer Support</li>
          </ul>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center text-xs text-[var(--text-muted)]">
          Recurring billing. You can cancel at any time.
        </div>

        <div className="mt-6 flex justify-between gap-4">
          <button className="w-full rounded-xl bg-[var(--input)] py-3 text-sm text-[var(--text-sub)]">
            Restore Purchases
          </button>
          <button className="w-full rounded-xl bg-[var(--input)] py-3 text-sm text-[var(--text-sub)]">
            Terms & Conditions
          </button>
        </div>
      </div>
    </main>
  );
}
