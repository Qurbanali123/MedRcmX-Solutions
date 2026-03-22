"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Headphones,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 3405565214",
    sub: "Mon–Fri, 8AM–7PM EST",
    href: "tel:+92340556521",
    color: "#27D083",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@medrcmx.com",
    sub: "Response within 2 hours",
    href: "mailto:info@medrcmx.com",
    color: "#38F8FF",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    value: "Chat with an Expert",
    sub: "Available 24/7",
    href: "#",
    color: "#27D083",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    value: "Book a Free Consultation",
    sub: "30-minute strategy session",
    href: "#",
    color: "#38F8FF",
  },
];

const services = [
  "Medical Billing",
  "Medical Coding",
  "Credentialing",
  "Prior Authorization",
  "Denial Management",
  "Full RCM Management",
  "Revenue Analytics",
  "AR Follow-Up",
];

const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 7:00 PM EST" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM EST" },
  { day: "Sunday", hours: "Emergency Only" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    practice: "",
    specialty: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section 
        className="relative py-24 overflow-hidden section-bg-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="bg-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill inline-block px-3 py-1 rounded-full mb-6 bg-emerald/10 text-emerald font-bold">
            GET IN TOUCH
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s <span className="gradient-text">Grow Your</span>
            <br />
            Practice Revenue
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto font-medium">
            Schedule a free consultation or request a billing audit. Our experts
            are ready to help you maximize collections.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map(({ icon: Icon, title, value, sub, href, color }, i) => (
              <a
                key={i}
                href={href}
                className="glass-card rounded-2xl p-6 card-3d group border border-white/5 hover:border-[#27D083]/20 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div className="text-xs text-white/40 mb-1 uppercase tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>
                  {title}
                </div>
                <div className="text-sm font-700 text-white" style={{ fontFamily: "Syne, sans-serif" }}>{value}</div>
                <div className="text-xs text-white/30 mt-1">{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5">
                <div className="mb-8">
                  <h2
                    className="text-3xl font-black text-white mb-2"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    Request a <span className="gradient-text">Free Audit</span>
                  </h2>
                  <p className="text-white/50 text-sm">
                    Fill out the form below and we&apos;ll contact you within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-20 h-20 rounded-full bg-[#27D083]/15 border border-[#27D083]/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-[#27D083]" />
                    </div>
                    <h3
                      className="text-2xl font-black text-white"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Message Sent Successfully!
                    </h3>
                    <p className="text-white/50 max-w-sm mx-auto">
                      Thank you for reaching out. A MedRCMx specialist will contact
                      you within 2 hours to discuss your practice needs.
                    </p>
                    <div className="gradient-text font-700 text-sm">
                      Expect a call or email soon!
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          First Name *
                        </label>
                        <input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          Last Name *
                        </label>
                        <input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Smith"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@practice.com"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          Phone Number
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 3405565214"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          Practice Name
                        </label>
                        <input
                          name="practice"
                          value={formData.practice}
                          onChange={handleChange}
                          placeholder="ABC Medical Group"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                          Specialty
                        </label>
                        <input
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          placeholder="e.g., Cardiology"
                          className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      >
                        <option value="" className="bg-[#091e35]">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#091e35]">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-wider mb-2" style={{ fontFamily: "Space Mono, monospace" }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your practice and billing challenges..."
                        className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full px-8 py-4 rounded-2xl text-base flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0F2D4D] border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-white/30">
                      By submitting, you agree to our Privacy Policy. We never share your data.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Office Info */}
              <div className="glass-card rounded-3xl p-7 border border-[#27D083]/20">
                <h3 className="text-lg font-black text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
                  Office <span className="gradient-text">Information</span>
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#27D083]/10 border border-[#27D083]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#27D083]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Address</div>
                      <div className="text-sm text-white/70">
                          Malik Abbad Plaza<br />
                          Rawalpin, Pakistan
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#38F8FF]/10 border border-[#38F8FF]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#38F8FF]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Phone</div>
                      <a href="tel:+15551234567" className="text-sm text-white/70 hover:text-[#27D083] transition-colors">
                        +92 3405565214
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#27D083]/10 border border-[#27D083]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-[#27D083]" />
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-0.5">Email</div>
                      <a href="mailto:info@medrcmx.com" className="text-sm text-white/70 hover:text-[#27D083] transition-colors">
                        info@medrcmx.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="glass-card rounded-3xl p-7 border border-[#38F8FF]/10">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[#38F8FF]" />
                  <h3 className="text-lg font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map(({ day, hours }, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                      <span className="text-xs text-white/50">{day}</span>
                      <span className="text-xs font-700 text-[#27D083]" style={{ fontFamily: "Syne, sans-serif" }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency */}
              <div className="glass-card rounded-3xl p-7 border border-[#27D083]/20"
                style={{ background: "rgba(39,208,131,0.05)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Headphones className="w-5 h-5 text-[#27D083]" />
                  <h4 className="text-base font-black text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    24/7 Support Available
                  </h4>
                </div>
                <p className="text-xs text-white/50 mb-4">
                  For urgent billing issues outside business hours, our on-call team is available around the clock.
                </p>
                <a
                  href="tel:+15551234999"
                  className="flex items-center gap-2 text-sm font-700 text-[#27D083]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <span>Emergency Line</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Promises */}
              <div className="glass-card rounded-3xl p-7 border border-white/5">
                <h4 className="text-base font-black text-white mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
                  Our Promises
                </h4>
                <ul className="space-y-3">
                  {[
                    "Response within 2 business hours",
                    "No pressure or hard sales tactics",
                    "Free 30-day trial available",
                    "No long-term contracts required",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white/60">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#27D083] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
