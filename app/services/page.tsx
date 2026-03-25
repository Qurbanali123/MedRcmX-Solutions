"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  FileText,
  Activity,
  BadgeCheck,
  Shield,
  BarChart3,
  Zap,
  ClipboardList,
  Phone,
  DollarSign,
  RefreshCw,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    id: "billing",
    icon: FileText,
    title: "Medical Billing",
    shortDesc: "Complete billing services with 98%+ first-pass acceptance.",
    fullDesc:
      "Our expert billing team handles the complete claim lifecycle from charge capture to payment posting. We use advanced scrubbing technology to ensure clean, accurate claims that maximize reimbursement on the first submission.",
    features: [
      "Electronic claim submission to 2,500+ payers",
      "Real-time eligibility verification",
      "Advanced claim scrubbing & editing",
      "ERA/EOB reconciliation",
      "Patient statement management",
      "Monthly financial reporting",
    ],
    color: "#27D083",
    badge: "MOST POPULAR",
  },
  {
    id: "coding",
    icon: Activity,
    title: "Medical Coding",
    shortDesc: "Certified coders for all specialties ensuring compliance.",
    fullDesc:
      "Our AAPC and AHIMA-certified coders accurately assign ICD-10, CPT, and HCPCS codes for all specialties. We stay current with all coding updates and payer-specific guidelines to ensure compliant, optimized code selection.",
    features: [
      "ICD-10-CM/PCS & CPT/HCPCS coding",
      "All 40+ medical specialties",
      "Annual CPT/ICD update training",
      "Payer-specific coding guidelines",
      "Coding audits & education",
      "E/M level optimization",
    ],
    color: "#38F8FF",
    badge: null,
  },
  {
    id: "credentialing",
    icon: BadgeCheck,
    title: "Provider Credentialing",
    shortDesc: "Fast enrollment with all major payers and networks.",
    fullDesc:
      "We manage the entire credentialing and re-credentialing process, minimizing gaps in billing and accelerating your time to first payment. Our credentialing specialists have deep relationships with all major insurance networks.",
    features: [
      "Initial provider enrollment",
      "Re-credentialing management",
      "CAQH profile maintenance",
      "Group & individual NPI setup",
      "Medicare & Medicaid enrollment",
      "Payer contract negotiation",
    ],
    color: "#27D083",
    badge: null,
  },
  {
    id: "denial",
    icon: Shield,
    title: "Denial Management",
    shortDesc: "Aggressive appeals to recover every dollar owed.",
    fullDesc:
      "Our denial management team identifies root causes, implements corrective actions, and aggressively appeals every denied claim. We maintain detailed denial analytics to continuously improve your first-pass acceptance rate.",
    features: [
      "Real-time denial tracking",
      "Root cause analysis",
      "Timely appeal submissions",
      "Payer-specific appeal strategies",
      "Denial trend reporting",
      "Process improvement plans",
    ],
    color: "#38F8FF",
    badge: null,
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Revenue Analytics",
    shortDesc: "Real-time dashboards and actionable financial insights.",
    fullDesc:
      "Our analytics platform provides complete visibility into your practice's financial health with customizable dashboards, KPI tracking, and benchmarking against industry standards. Make data-driven decisions with confidence.",
    features: [
      "Custom financial dashboards",
      "KPI & benchmark reporting",
      "Payer performance analysis",
      "Provider productivity reports",
      "Accounts receivable aging",
      "Revenue forecasting",
    ],
    color: "#27D083",
    badge: null,
  },
  {
    id: "auth",
    icon: Zap,
    title: "Prior Authorization",
    shortDesc: "Expedited PA handling to eliminate care delays.",
    fullDesc:
      "Our prior authorization specialists manage all PA requests, follow-ups, and peer-to-peer reviews to ensure timely approvals. We minimize delays in patient care while protecting your revenue from authorization-related denials.",
    features: [
      "Electronic & phone PA submission",
      "Urgent authorization tracking",
      "Peer-to-peer review support",
      "PA status monitoring",
      "Retrospective authorization",
      "Denial prevention alerts",
    ],
    color: "#38F8FF",
    badge: null,
  },
  {
    id: "ar",
    icon: DollarSign,
    title: "AR Follow-Up",
    shortDesc: "Dedicated AR teams for aging claims recovery.",
    fullDesc:
      "Our dedicated AR follow-up teams work aging reports aggressively to recover outstanding balances. We make personalized payer calls, submit corrected claims, and escalate issues to maximize every dollar collected.",
    features: [
      "Dedicated AR specialists",
      "Weekly aging report reviews",
      "Payer-specific follow-up calls",
      "Insurance payment disputes",
      "Balance billing management",
      "Write-off minimization",
    ],
    color: "#27D083",
    badge: null,
  },
  {
    id: "rcm",
    icon: RefreshCw,
    title: "Full RCM Management",
    shortDesc: "Complete revenue cycle outsourcing for maximum results.",
    fullDesc:
      "Our comprehensive RCM management service covers your entire revenue cycle from scheduling to final payment. Dedicated account managers, complete process ownership, and guaranteed performance metrics make this our most powerful offering.",
    features: [
      "Dedicated account manager",
      "End-to-end billing workflow",
      "Performance-based SLAs",
      "Monthly strategy reviews",
      "Staff training & support",
      "Technology & software included",
    ],
    color: "#38F8FF",
    badge: "BEST VALUE",
  },
];

const faqs = [
  {
    q: "How quickly can you start billing for my practice?",
    a: "We can typically onboard a new practice within 3-5 business days. Our team handles the complete setup including EHR integration, payer enrollment, and staff training.",
  },
  {
    q: "Do you work with my existing EHR/Practice Management software?",
    a: "Yes! We integrate with virtually all EHR and PM systems including Epic, Athena, Kareo, eClinicalWorks, NextGen, and 100+ others.",
  },
  {
    q: "How do you handle HIPAA compliance?",
    a: "We are fully HIPAA compliant with SOC 2 Type II certification. All staff undergoes regular HIPAA training, and data is encrypted at rest and in transit.",
  },
  {
    q: "What are your fees?",
    a: "We offer flexible pricing including percentage-of-collections and flat-fee models. Contact us for a customized quote based on your specialty, volume, and needs.",
  },
  {
    q: "What specialties do you serve?",
    a: "We serve 40+ specialties including Primary Care, Cardiology, Orthopedics, Behavioral Health, Radiology, Oncology, Neurology, and many more.",
  },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState("billing");

  const active = services.find((s) => s.id === activeService) || services[0];

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
            OUR SERVICES
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Complete <span className="gradient-text">Revenue Cycle</span>
            <br />
            Solutions
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
            End-to-end medical billing, coding, and RCM services designed to
            maximize your collections and streamline your practice operations.
          </p>
        </div>
      </section>

      {/* Interactive Service Explorer */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left – Service List */}
            <div className="space-y-2">
              {services.map((svc) => {
                const Icon = svc.icon;
                const isActive = activeService === svc.id;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setActiveService(svc.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 ${
                      isActive
                        ? "bg-[#27D083]/10 border border-[#27D083]/30"
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive ? `${svc.color}20` : "rgba(255,255,255,0.05)",
                        border: `1px solid ${isActive ? svc.color + "40" : "rgba(255,255,255,0.1)"}`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: isActive ? svc.color : "rgba(255,255,255,0.4)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-sm font-600 truncate"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          color: isActive ? "white" : "rgba(255,255,255,0.6)",
                        }}
                      >
                        {svc.title}
                      </div>
                      {svc.badge && (
                        <span
                          className="text-[10px] font-700 px-2 py-0.5 rounded-full"
                          style={{
                            fontFamily: "Space Mono, monospace",
                            background: `${svc.color}20`,
                            color: svc.color,
                          }}
                        >
                          {svc.badge}
                        </span>
                      )}
                    </div>
                    {isActive && (
                      <div className="w-1.5 h-8 rounded-full" style={{ background: active.color }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right – Service Detail */}
            <div className="lg:col-span-2">
              <div
                key={active.id}
                className="glass-card rounded-3xl p-8 md:p-10 h-full border transition-all duration-300"
                style={{ borderColor: `${active.color}20` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: `${active.color}15`, border: `1px solid ${active.color}30` }}
                  >
                    <active.icon className="w-8 h-8" style={{ color: active.color }} />
                  </div>
                  {active.badge && (
                    <span
                      className="text-xs font-700 px-3 py-1.5 rounded-full"
                      style={{
                        fontFamily: "Space Mono, monospace",
                        background: `${active.color}20`,
                        color: active.color,
                        border: `1px solid ${active.color}30`,
                      }}
                    >
                      {active.badge}
                    </span>
                  )}
                </div>

                <h3
                  className="text-3xl font-black text-white mb-4"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {active.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-8">{active.fullDesc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {active.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: active.color }} />
                      <span className="text-sm text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="btn-primary px-7 py-3.5 rounded-2xl text-sm inline-flex items-center gap-2 group"
                >
                  <span>Get Started with {active.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-black section-heading-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
           <span className="gradient-text"> All Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, shortDesc, color, badge }, i) => (
              <div key={i} className="bg-[#091e35] rounded-3xl p-6 card-3d group">
                {badge && (
                  <div
                    className="text-[10px] font-700 px-2 py-1 rounded-full mb-4 inline-block"
                    style={{ fontFamily: "Space Mono, monospace", background: `${color}20`, color }}
                  >
                    {badge}
                  </div>
                )}
                <div
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-base font-700 text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag-pill inline-block px-3 py-1 rounded-full mb-4">FAQ</div>
            <h2
              className="text-4xl font-black section-heading-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Common <span className="gradient-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-[#27D083]/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="text-sm font-600 text-white" style={{ fontFamily: "Syne, sans-serif" }}>{q}</span>
                  <ChevronDown
                    className="w-5 h-5 text-[#27D083] flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-white/50 leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Not sure which service you need?
          </h2>
          <p className="text-white/50 mb-8">
            Schedule a free consultation — our experts will analyze your practice and recommend the right solution.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-10 py-4 rounded-2xl text-base inline-flex items-center gap-2 group"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+923405565214"
              className="btn-outline px-8 py-4 rounded-2xl text-base inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>+92 3405565214</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
