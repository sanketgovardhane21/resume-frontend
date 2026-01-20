const API_BASE = "http://localhost:5000";

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

export async function generatePdf(resumeData: any) {
  const res = await fetch("http://localhost:5000/api/pdf/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(resumeData),
  });

  if (!res.ok) {
    throw new Error("PDF generation failed");
  }

  const blob = await res.blob();
  return blob;
}

export async function createOrder(plan: "medium" | "pro") {
  const res = await fetch("http://localhost:5000/api/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ plan }),
  });

  if (!res.ok) {
    throw new Error("Order creation failed");
  }

  return res.json();
}

export async function verifyPayment(data: any) {
  const res = await fetch("http://localhost:5000/api/payment/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Payment verification failed");
  }

  return res.json();
}
