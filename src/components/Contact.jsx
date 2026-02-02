// src/components/Contact.jsx
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const form = useRef();

  // ✅ Your EmailJS keys are already set correctly!
  const SERVICE_ID = "service_niaex82";
  const TEMPLATE_ID = "template_23rjoj9";
  const PUBLIC_KEY = "Zc1ofXYJfjUOAT9_Q";

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
    <section className="space-y-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Request a quote
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Share a few details about your kitchen or cabinet project and we'll
          get back with a measured quote within 24 hours.
        </p>
      </div>
      
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="group bg-white/70 backdrop-blur-xl rounded-3xl border-2 border-rose-100/50 shadow-2xl hover:shadow-3xl hover:border-rose-200/70 transition-all duration-500 p-8 max-w-2xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Full name *</label>
            <input
              required
              type="text"
              name="user_name"
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border-2 border-slate-200/70 text-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100/50 transition-all duration-300 shadow-sm"
              placeholder="John Smith"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Email *</label>
            <input
              required
              type="email"
              name="user_email"
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border-2 border-slate-200/70 text-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100/50 transition-all duration-300 shadow-sm"
              placeholder="john@example.com"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Phone</label>
            <input
              type="tel"
              name="user_phone"
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border-2 border-slate-200/70 text-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100/50 transition-all duration-300 shadow-sm"
              placeholder="04XX XXX XXX"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">Suburb / Area</label>
            <input
              type="text"
              name="user_area"
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border-2 border-slate-200/70 text-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100/50 transition-all duration-300 shadow-sm"
              placeholder="Wellington Central"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-slate-700 mb-2 block">
              Brief description of your project *
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border-2 border-slate-200/70 text-sm focus:border-rose-300 focus:outline-none focus:ring-4 focus:ring-rose-100/50 transition-all duration-300 resize-vertical shadow-sm"
              placeholder="Tell us about your kitchen - size, style preferences, budget range, any existing cabinets..."
            />
          </div>
          
          <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4 border-t border-rose-100/50">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:from-rose-500 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-rose-200/50 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {status === "submitting" ? "Sending..." : "Get your free quote"}
            </button>
            <div className="flex items-center text-sm text-slate-500 sm:text-base">
              Or call: <span className="font-bold text-rose-500 ml-1">021 123 4567</span>
            </div>
          </div>
        </div>
        
        {feedback && (
          <div className={`md:col-span-2 p-4 rounded-2xl text-sm font-semibold mt-4 transition-all duration-300 ${
            feedback.includes('✅') 
              ? 'bg-emerald-100/80 border-2 border-emerald-200/70 text-emerald-700 shadow-lg' 
              : 'bg-rose-100/80 border-2 border-rose-200/70 text-rose-700 shadow-lg'
          }`}>
            {feedback}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
