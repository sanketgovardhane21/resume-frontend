"use client";

import { createOrder, verifyPayment } from "@/lib/api";
import { useResume } from "@/context/ResumeContext";

export default function UpgradePage() {
  const { resume, setResume } = useResume();

 async function selectPlan(plan: "medium" | "pro") {
  try {
    const order = await createOrder(plan);

    const options = {
      key: order.key, // public key
      amount: order.amount,
      currency: order.currency,
      name: "ResumeCraft",
      description: "Resume Upgrade",
      order_id: order.orderId,
      handler: async function (response: any) {
        const verifyRes = await verifyPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (verifyRes.success) {
          setResume({ ...resume, plan });
          alert("Payment successful! Premium unlocked.");
        }
      },
      theme: {
        color: "#6366f1",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  } catch (err) {
    alert("Payment failed. Try again.");
  }
}

  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold text-center mb-4">
        Upgrade Your Resume
      </h1>
      <p className="text-center text-gray-400 mb-10">
        One-time payment • ATS-friendly • Instant download
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* FREE */}
        <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Free</h3>
          <p className="text-gray-400 mb-4">₹0</p>

          <ul className="text-sm space-y-2 mb-6">
            <li>✔ 3 ATS-friendly themes</li>
            <li>✔ Alignment control</li>
            <li>✔ Font size control</li>
            <li>✖ Premium themes</li>
            <li>✖ Advanced customization</li>
          </ul>

          <button
            disabled
            className="w-full py-3 rounded-lg bg-gray-700 cursor-not-allowed"
          >
            Current Plan
          </button>
        </div>

        {/* MEDIUM (BEST VALUE) */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 scale-105 shadow-xl">
          <div className="text-xs bg-black/30 inline-block px-3 py-1 rounded-full mb-3">
            BEST VALUE
          </div>

          <h3 className="text-xl font-semibold mb-2">Medium</h3>
          <p className="text-2xl font-bold mb-4">₹399</p>

          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Everything in Free</li>
            <li>✔ All premium themes</li>
            <li>✔ Better layout balance</li>
            <li>✔ More font options</li>
            <li>✔ Priority PDF rendering</li>
          </ul>

          <button
            onClick={() => selectPlan("medium")}
            className="w-full py-3 rounded-lg bg-black/30 hover:bg-black/40"
          >
            Upgrade to Medium
          </button>
        </div>

        {/* PRO */}
        <div className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-2xl font-bold mb-4">₹699</p>

          <ul className="text-sm space-y-2 mb-6">
            <li>✔ Everything in Medium</li>
            <li>✔ Extra premium layouts</li>
            <li>✔ Maximum customization</li>
            <li>✔ Best visual polish</li>
          </ul>

          <button
            onClick={() => selectPlan("pro")}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>

      {/* Trust Section */}
      <p className="text-center text-xs text-gray-500 mt-10">
        Secure payment • One-time purchase • No subscription • ATS-safe PDFs
      </p>
    </main>
  );
}
