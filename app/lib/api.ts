const API_BASE = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE) {
  throw new Error("NEXT_PUBLIC_API_URL is not defined");
}

/* ---------- AI BIO ---------- */

export async function improveBio(bio: string) {
  const res = await fetch(`${API_BASE}/api/ai/bio`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bio }),
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  return res.json();
}

/* ---------- PDF ---------- */

export async function generatePdf(resumeData: unknown) {
  const res = await fetch(`${API_BASE}/api/pdf/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resumeData),
  });

  if (!res.ok) {
    throw new Error("PDF generation failed");
  }

  return res.blob();
}

/* ---------- PAYMENT ---------- */

export async function createOrder(plan: "medium" | "pro") {
  const res = await fetch(
    `${API_BASE}/api/payment/create-order`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan }),
    }
  );

  if (!res.ok) {
    throw new Error("Order creation failed");
  }

  return res.json();
}

type VerifyPaymentPayload = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

export async function verifyPayment(
  data: VerifyPaymentPayload
) {
  const res = await fetch(
    `${API_BASE}/api/payment/verify`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Payment verification failed");
  }

  return res.json();
}
