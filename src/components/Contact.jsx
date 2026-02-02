// src/components/Contact.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const form = useRef();

  // ⚠️ REPLACE THESE 3 VALUES FROM YOUR EMAILJS DASHBOARD ⚠️
  const SERVICE_ID = "service_niaex82";        // e.g. "service_abc123"
  const TEMPLATE_ID = "template_23rjoj9";      // e.g. "template_def456"
  const PUBLIC_KEY = "Zc1ofXYJfjUOAT9_Q";        // e.g. "user_ghi789"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      
      setStatus("idle");
      setFeedback("✅ Thanks! Your request has been sent. We'll contact you within 24 hours.");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("idle");
      setFeedback("❌ Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Request a quote</h2>
      <p className="text-slate-300 mb-6 max-w-2xl">
        Share a few details about your kitchen or cabinet project and we'll
        get back with a measured quote.
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 border border-slate-800 rounded-xl p-6 bg-slate-900/40"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Name *</label>
          <input
            required
            type="text"
            name="user_name"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Email *</label>
          <input
            required
            type="email"
            name="user_email"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Phone</label>
          <input
            type="tel"
            name="user_phone"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Suburb / area</label>
          <input
            type="text"
            name="user_area"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="text-xs text-slate-300">
            Brief description of your project *
          </label>
          <textarea
            required
            name="message"
            rows={4}
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400 resize-none"
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-between gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="px-6 py-2 rounded-md bg-amber-400 text-slate-950 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send request"}
          </button>
          <div className="text-xs text-slate-400">
            Or call: <span className="font-semibold text-amber-400">0000 000 000</span>
          </div>
        </div>
        {feedback && (
          <div className="md:col-span-2 p-3 rounded-lg bg-emerald-900/50 border border-emerald-500/30 text-xs text-emerald-300">
            {feedback}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
