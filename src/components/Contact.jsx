// src/components/Contact.jsx
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    // Fake submit – integrate EmailJS, Formspree or your backend here
    setTimeout(() => setStatus("sent"), 800);
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Request a quote</h2>
      <p className="text-slate-300 mb-6 max-w-2xl">
        Share a few details about your kitchen or cabinet project and we’ll
        get back with a measured quote.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 border border-slate-800 rounded-xl p-6 bg-slate-900/40"
      >
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Name</label>
          <input
            required
            name="name"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Email</label>
          <input
            required
            type="email"
            name="email"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Phone</label>
          <input
            name="phone"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-300">Suburb / area</label>
          <input
            name="area"
            className="rounded-md bg-slate-900 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-amber-400"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-1">
          <label className="text-xs text-slate-300">
            Brief description of your project
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
            disabled={status === "submitting" || status === "sent"}
            className="px-6 py-2 rounded-md bg-amber-400 text-slate-950 text-sm font-semibold disabled:opacity-60"
          >
            {status === "idle" && "Send request"}
            {status === "submitting" && "Sending..."}
            {status === "sent" && "Request sent"}
          </button>
          <div className="text-xs text-slate-400">
            Prefer to call? Phone: 0000 000 000
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
