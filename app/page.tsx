"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Star,
  ChevronRight,
  Activity,
  DollarSign,
  Users,
  Award,
  Zap,
  FileText,
  BarChart3,
  HeartPulse,
  BadgeCheck,
} from "lucide-react";

/* ────────────────────────────────────────────────────────────── */
/* Animated Counter                                               */
/* ────────────────────────────────────────────────────────────── */
function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, started]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* Floating 3D Particles Canvas                                   */
/* ────────────────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      r: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 400 + 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 0.5,
      color: Math.random() > 0.5 ? "#27D083" : "#38F8FF",
      alpha: Math.random() * 0.6 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const scale = 400 / p.z;
        const screenX = p.x * scale + (width / 2) * (1 - scale);
        const screenY = p.y * scale + (height / 2) * (1 - scale);
        const screenR = p.r * scale;

        ctx.beginPath();
        ctx.arc(screenX, screenY, Math.max(0.1, screenR), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (scale * 0.5);
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#27D083";
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-40"
    />
  );
}

/* ────────────────────────────────────────────────────────────── */
/* Rotating 3D Globe (CSS)                                        */
/* ────────────────────────────────────────────────────────────── */
function Globe3D() {
  return (
    <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
      {/* Outer ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-secondary/90"
        style={{ animation: "spin 20s linear infinite" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(0,86,179,0.8)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-5 h-3 rounded-full bg-accent shadow-[0_0_15px_rgba(0,168,232,0.8)]" />
      </div>

      {/* Middle ring */}
      <div
        className="absolute inset-8 rounded-full border border-accent/70"
        style={{ animation: "spin 14s linear infinite reverse" }}
      >
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary/60 shadow-[0_0_10px_rgba(0,86,179,0.6)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 rounded-full bg-accent/60" />
      </div>

      {/* Inner ring */}
      <div
        className="absolute inset-16 rounded-full border border-secondary/70"
        style={{ animation: "spin 8s linear infinite" }}
      >
        <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(0,198,292,0.8)]" />
      </div>

      {/* Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary to-accent border border-secondary/30 shadow-[0_0_60px_rgba(0,86,179,0.3)] flex items-center justify-center">
            <HeartPulse
              className="w-12 h-12 text-white"
              style={{ filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
            />
          </div>
          {/* Glow pulse */}
          <div className="absolute inset-0 rounded-full bg-secondary/10 animate-ping" />
        </div>
      </div>

      {/* Floating data cards */}
      <div className="absolute -top-4 -right-4  backdrop-blur-md rounded-2xl px-4 py-3 border border-emerald/20 shadow-xl animate-float">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-emerald" />
          <div>
            <div className="text-[10px] text-white/90 font-bold uppercase">
              Collection Rate
            </div>
            <div
              className="text-sm font-black text-emerald"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              98.2%
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -bottom-4 -left-4  backdrop-blur-md rounded-2xl px-4 py-3 border border-cyan/20 shadow-xl"
        style={{ animation: "float 6s ease-in-out 2s infinite" }}
      >
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-cyan" />
          <div>
            <div className="text-[10px] text-white/90 font-bold uppercase">
              Revenue Boost
            </div>
            <div
              className="text-sm font-black text-cyan"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              +32%
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-1/2 -right-8 -translate-y-1/2  backdrop-blur-md rounded-2xl px-4 py-3 border border-emerald/20 shadow-xl"
        style={{ animation: "float 6s ease-in-out 1s infinite" }}
      >
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-emerald" />
          <div>
            <div className="text-[10px] text-white/90 font-bold uppercase">
              Claim Speed
            </div>
            <div
              className="text-sm font-black text-white"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              24 hrs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── */
/* Main Page                                                       */
/* ────────────────────────────────────────────────────────────── */
const services = [
  {
    icon: FileText,
    title: "Medical Billing",
    desc: "Accurate, timely claim submissions with maximum reimbursement rates.",
  },
  {
    icon: Activity,
    title: "Medical Coding",
    desc: "Certified coders ensuring compliance and optimal code selection.",
  },
  {
    icon: BadgeCheck,
    title: "Credentialing",
    desc: "Fast provider enrollment and re-credentialing with all payers.",
  },
  {
    icon: Shield,
    title: "Denial Management",
    desc: "Aggressive follow-up and appeals to recover denied claims.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    desc: "Real-time dashboards and detailed financial performance reports.",
  },
  {
    icon: Zap,
    title: "Prior Authorization",
    desc: "Expedited PA process to prevent delays in patient care.",
  },
];

const stats = [
  { icon: DollarSign, value: 30, suffix: "M+", label: "Revenue Collected" },
  { icon: Users, value: 200, suffix: "+", label: "Providers Served" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Clean Claim Rate" },
  { icon: Award, value: 8, suffix: "+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Internal Medicine, NYC",
    text: "MedRCMx transformed our billing operations. Our revenue increased by 40% in the first quarter alone. Absolutely phenomenal service.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Dr. James Rodriguez",
    role: "Orthopedic Surgery, FL",
    text: "The team is incredibly responsive and knowledgeable. Denial rates dropped from 18% to just 2%. I highly recommend them.",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Dr. Priya Patel",
    role: "Cardiology Group, TX",
    text: "Switching to MedRCMx was the best decision for our practice. Professional, accurate, and always on time. 5 stars!",
    rating: 5,
    avatar: "PP",
  },
];

const whyUs = [
  { icon: CheckCircle2, text: "HIPAA Compliant & Fully Secure" },
  { icon: CheckCircle2, text: "Dedicated Account Manager" },
  { icon: CheckCircle2, text: "99.9% Clean Claim Rate" },
  { icon: CheckCircle2, text: "Real-Time Reporting Dashboard" },
  { icon: CheckCircle2, text: "All Specialties & Insurance Payers" },
  { icon: CheckCircle2, text: "No Setup Fees or Long-Term Contracts" },
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden section-bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070')",
        }}
      >
        <div className="bg-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="tag-pill inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 text-emerald mt-">
                <span className="w-1 h-1 rounded-full bg-emerald animate-pulse" />
                #1 Medical Billing Company
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Maximize Your <span className="gradient-text">Healthcare</span>
                <br />
                Revenue with
                <br />
                <span className="gradient-text">Expert RCM</span>
              </h1>

              <p className="text-white text-lg leading-relaxed max-w-lg">
                MedRCMx Solutions delivers end-to-end revenue cycle management,
                medical billing, and coding services that boost your collections
                while reducing administrative burden.
              </p>

              {/* Features list */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyUs.slice(0, 4).map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-white/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald flex-shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-primary px-8 py-4 rounded-2xl text-base flex items-center gap-2 group"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="btn-outline px-8 py-4 rounded-2xl text-base flex items-center gap-2 group"
                >
                  <span>Our Services</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-white/10 ">
                {[
                  { val: "98%", label: "Collection Rate" },
                  { val: "$30M+", label: "Revenue Managed" },
                  { val: "24hr", label: "Claim Turnaround" },
                ].map((s, i) => (
                  <div key={i}>
                    <div
                      className="text-2xl font-black text-emerald"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs text-white/50">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – 3D Globe */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <Globe3D />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 relative">
        {/* Transparent Blur Background */}
        <div className="absolute inset-0 bg-transparent backdrop-blur-2xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, suffix, label }, i) => (
              <div key={i} className="content-card p-6 text-center group">
                <div className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-emerald/10 border border-emerald/20">
                  <Icon className="w-6 h-6 text-emerald" />
                </div>
                <div
                  className="text-4xl font-black text-white mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <Counter end={value} suffix={suffix} />
                </div>
                <div className="text-sm text-white/50 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section
        className="py-20 relative section-bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2053')",
        }}
      >
        <div className="bg-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block px-4 py-2 text-xs rounded-full 
        bg-emerald text-white border border-blue-400 
         hover:bg-blue-600 transition-colors duration-300"
            >
              What We Offer
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white section-heading-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Comprehensive <span className="text-[#38F8FF]">RCM Services</span>
            </h2>
            <p className="text-white/70 mt-6 max-w-xl mx-auto">
              From billing to analytics, we handle your entire revenue cycle so
              you can focus on patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="content-card p-7 group cursor-pointer 
  bg-gray-900/50 backdrop-blur-2xl rounded-xl 
  border border-white/10 shadow-lg transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl mb-5 flex items-center justify-center 
               transition-all duration-300 group-hover:scale-110 
               bg-emerald/10 border border-emerald/20"
                >
                  <Icon className="w-7 h-7 text-emerald" />
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">{desc}</p>

                {/* Learn more */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-outline px-8 py-4 rounded-2xl text-base inline-flex items-center gap-2 group shadow-sm"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        className="py-20 relative overflow-hidden section-bg-image"
        style={{
          backgroundImage: "url('doc.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="bg-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left – Visual */}
            <div className="relative">
              {/* Process flow */}
              <div className="content-card p-8 space-y-4 bg-[#091e35] rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 rounded-full bg-emerald" />
                  <span
                    className="text-sm text-white/50 uppercase tracking-[0.15em]"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    Our Process
                  </span>
                </div>
                {[
                  {
                    step: "01",
                    title: "Charge Capture",
                    desc: "Accurate capture of all billable services",
                  },
                  {
                    step: "02",
                    title: "Coding & Review",
                    desc: "Expert ICD-10 and CPT code assignment",
                  },
                  {
                    step: "03",
                    title: "Claim Submission",
                    desc: "Electronic submission to all payers",
                  },
                  {
                    step: "04",
                    title: "Payment Posting",
                    desc: "Accurate ERA/EOB reconciliation",
                  },
                  {
                    step: "05",
                    title: "AR Follow-up",
                    desc: "Aggressive collection and denial management",
                  },
                ].map(({ step, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black bg-emerald/10 border border-emerald/20 text-emerald">
                        {step}
                      </div>
                      {i < 4 && <div className="w-px h-6 bg-emerald/20 mt-1" />}
                    </div>
                    <div className="pt-1.5">
                      <div
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {title}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Badge */}
              <div className="absolute -top-6 -right-6 bg-navy-light rounded-2xl px-5 py-4 text-center shadow-2xl border border-emerald/10 animate-float">
                <div
                  className="text-3xl font-black text-emerald"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  A+
                </div>
                <div className="text-xs text-white/50">BBB Rating</div>
              </div>
            </div>

            {/* Right – Content */}
            <div className="space-y-8">
              <div className="tag-pill inline-block px-3 py-1 rounded-full bg-emerald/10 text-emerald">
                WHY CHOOSE US
              </div>
              <h2
                className="text-4xl md:text-5xl font-black text-white section-heading leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Trusted by
                <br />
                <span className="gradient-text">200+ Healthcare</span>
                <br />
                Providers
              </h2>
              <p className="text-white/60 leading-relaxed">
                We combine cutting-edge technology with human expertise to
                deliver unmatched billing accuracy, faster payments, and
                transparent reporting that puts you in control of your revenue.
              </p>

              <ul className="space-y-4">
                {whyUs.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/20 transition-all">
                      <Icon className="w-4 h-4 text-emerald" />
                    </div>
                    <span className="text-white/70 group-hover:text-white transition-colors text-sm">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="btn-primary px-8 py-4 rounded-2xl text-base inline-flex items-center gap-2 group shadow-lg"
              >
                <span>Learn About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-20 relative overflow-hidden section-bg-image"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="bg-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="tag-pill inline-block px-3 py-1 rounded-full mb-4 bg-emerald/10 text-emerald">
              CLIENT REVIEWS
            </div>
            <h2
              className="text-4xl md:text-5xl font-black text-white section-heading-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating, avatar }, i) => (
              <div
                key={i}
                className="content-card p-7 group"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5 text-yellow-400">
                  {Array(rating)
                    .fill(0)
                    .map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-emerald text-navy-dark flex items-center justify-center font-black text-sm">
                    {avatar}
                  </div>
                  <div>
                    <div
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {name}
                    </div>
                    <div className="text-xs text-white/40">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="btn-outline px-8 py-4 rounded-2xl text-base inline-flex items-center gap-2 group"
            >
              <span>Read All Reviews</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-12 relative overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72  blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-navy-light blue-500/50 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden 
      bg-white/5 backdrop-blur-xl 
      shadow-2xl border border-white/10"
          >
            <div className="relative text-center space-y-6">
              {/* Tag Pill */}
              <div
                className=" tag-pill inline-block px-3 py-1 rounded-full 
          bg-emerald-500/10 text-emerald-400 border border-emerald-400/30"
              >
                GET STARTED TODAY
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-black text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Ready to <span className="text-emerald-400">Transform</span>{" "}
                Your
                <br />
                Practice Revenue?
              </h2>

              {/* Description */}
              <p className="text-white/60 max-w-xl mx-auto">
                Schedule a free consultation and let our experts analyze your
                current billing to identify lost revenue opportunities.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link
                  href="/contact"
                  className="btn-primary px-10 py-4 rounded-2xl text-base inline-flex items-center gap-2 group"
                >
                  <span>Schedule a free consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="https://wa.me/923405565214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl text-base flex items-center gap-2 
                  border border-white/20 text-white hover:bg-white/10 
                  transition-all duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
