export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Swap this for your real endpoint. Two drop-in options:
//
// 1) Formspree — create a form at https://formspree.io, then:
//      const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";
//      await fetch(FORM_ENDPOINT, {
//        method: "POST",
//        headers: { "Content-Type": "application/json", Accept: "application/json" },
//        body: JSON.stringify(payload),
//      });
//
// 2) EmailJS — `npm install @emailjs/browser`, then:
//      import emailjs from "@emailjs/browser";
//      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY);
//
// Until one is wired in, this simulates a network call so every UI state
// (loading / success / failure) can be demonstrated end to end.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (FORM_ENDPOINT) {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
    return;
  }

  // No endpoint configured yet — simulate latency so the UI states are real.
  await new Promise((resolve) => setTimeout(resolve, 900));
}
