"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const services = [
  "Medical Billing",
  "Medical Coding",
  "Credentialing",
  "Prior Authorization",
  "Denial Management",
  "Revenue Cycle Management",
  "Website Development and SEO",
  
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark border-t border-emerald/10 overflow-hidden">
      {/* CTA Banner */}
      <div className="relative border-b border-emerald/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="content-card p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="tag-pill inline-block px-3 py-1 rounded-full mb-4 bg-emerald/10 text-emerald">
                FREE CONSULTATION
              </div>
    <h3
  className="text-3xl md:text-4xl mb-2"
  style={{ fontFamily: "Syne, sans-serif" }}
>
  <span className="text-white">Ready to Maximize Your </span>
  <span className="gradient-text">Revenue?</span>
</h3>
              <p className="text-white/60 max-w-md font-medium">
                Get a free billing audit and discover how much revenue you&apos;re
                leaving on the table.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-2xl text-base whitespace-nowrap flex items-center gap-2 group shadow-xl"
            >
              <span>Start Free Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald flex items-center justify-center font-black text-navy-dark text-lg shadow-lg">
                M
              </div>
              <div>
                <span
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Med<span className="text-emerald">RCMx</span>
                </span>
                <div
                  className="text-[10px] text-emerald/70 tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  Solutions
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
              Your trusted partner in revenue cycle management. We maximize
              healthcare provider revenues through expert billing and coding
              services.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-emerald/20 flex items-center justify-center text-white/40 hover:text-emerald hover:border-emerald/40 transition-all duration-300 bg-navy-light"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-emerald uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-emerald text-sm flex items-center gap-2 group transition-all duration-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald/40 group-hover:bg-emerald transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold text-emerald uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-emerald text-sm flex items-center gap-2 group transition-all duration-300 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald/40 group-hover:bg-emerald transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold text-emerald uppercase tracking-[0.15em] mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-emerald" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5 font-bold">Phone</div>
                  <a href="tel:+15551234567" className="text-white/70 hover:text-emerald text-sm transition-colors font-semibold">
                    +92 3405565214
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-emerald" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5 font-bold">Email</div>
                  <a href="mailto:info@medrcmx.com" className="text-white/70 hover:text-emerald text-sm transition-colors font-semibold">
                    info@medrcmx.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5 font-bold">Address</div>
                  <p className="text-white/70 text-sm font-semibold">
                    Malik Abbad Plaza,<br />Rawalpindi, Pakistan
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-emerald/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} MedRCMx Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "HIPAA Compliance"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/40 hover:text-emerald text-xs transition-colors font-bold"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
