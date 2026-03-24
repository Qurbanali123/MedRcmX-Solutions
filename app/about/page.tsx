"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
} from "lucide-react";

const teamMembers = [
  {
  name: "Mehfooz Hussain",
  designation: "Founder and CEO",
  role: "RCM Expert and Credentialing Specialist",
  bio: "RCM expert specializing in medical billing, coding, and provider credentialing with a focus on accuracy and efficient revenue cycle management.",
  image: "/funderr.jpeg",
},
{
  name: "Akbar Hussain",
  designation: "COO",
  role: "RCM Expert and Virtual Assistant",
  bio: "Experienced in medical billing and virtual assistance, focused on optimizing workflows and improving operational efficiency.",
  image: "/COO.jpeg",
},
{
  name: "Shamshad Nazi",
  role: "Virtual Assistant",
  bio: "HR professional skilled in team leadership, recruitment, and improving organizational performance.",
  image: "/manager.png",
},
{
  name: "Nosheen Kanwal",
  role: "Social Media Marketer",
  bio: "A skilled marketer who creates engaging content and strategies to drive growth. Excels in campaign management and audience engagement with a data-driven approach",
  image: "/marketer.jpeg",
},
{
  name: "Kamran Nazir",
  role: "Medical Biller and Credentialing Specialist",
  bio: "Leadership skill with expertise in billing, credentialing, and ensuring accurate claims with strong compliance standards.",
  image: "/team.png",
},
{
  name: "Qurban Ali",
  role: "Web Developer and SEO Expert",
  bio: "Web developer focused on building responsive websites and improving SEO for better visibility and performance.",
  image: "/Devloper.png",
}
 
];
const milestones = [
  { year: "2018", title: "Founded", desc: "Started with a vision to simplify medical billing for independent practices." },
  { year: "2020", title: "40 Clients", desc: "Reached our first major milestone serving 40+ healthcare providers." },
  { year: "20222", title: "Tech Platform", desc: "Launched proprietary RCM platform with real-time analytics." },
  { year: "2025", title: "HIPAA 5010", desc: "Achieved full compliance with enhanced HIPAA EDI standards." },
  { year: "2025", title: "100+ Clients", desc: "Serving over 100 providers nationwide across all specialties." },
  { year: "2026", title: "AI Integration", desc: "Integrated AI-powered coding and claim scrubbing technology." },
];

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    desc: "We obsess over billing accuracy, maintaining 99.9% clean claim rates that maximize your revenue.",
    color: "#27D083",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    desc: "Every decision we make is rooted in what's best for your practice and your patients.",
    color: "#38F8FF",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Real-time dashboards and monthly reports keep you fully informed about your financial health.",
    color: "#27D083",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Continuous improvement and training ensure our team stays ahead of industry changes.",
    color: "#38F8FF",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section 
        className="relative py-24 overflow-hidden section-bg-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill inline-block px-3 py-1 rounded-full mb-6 bg-emerald/20 text-emerald font-bold">
            ABOUT US
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Redefining{" "}
            <span className="gradient-text">Medical Billing</span>
            <br />
            Since 2018
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            MedRCMx Solutions was built on a simple belief: healthcare providers
            should focus on healing, not chasing payments. We handle the rest.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-10 border border-[#27D083]/20 card-3d group">
              <div className="w-14 h-14 rounded-2xl bg-[#27D083]/15 border border-[#27D083]/30 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#27D083]" />
              </div>
              <h3
                className="text-2xl font-black text-white mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our <span className="gradient-text">Mission</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                To empower healthcare providers with intelligent, transparent, and
                results-driven revenue cycle management solutions that maximize
                collections, reduce denials, and free clinicians to focus on what
                matters most — patient care.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-10 border border-[#38F8FF]/20 card-3d group">
              <div className="w-14 h-14 rounded-2xl bg-[#38F8FF]/15 border border-[#38F8FF]/30 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#38F8FF]" />
              </div>
              <h3
                className="text-2xl font-black text-white mb-4"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our <span style={{ color: "#38F8FF" }}>Vision</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                To become the most trusted revenue cycle management partner in
                North America — where every healthcare provider, regardless of
                size or specialty, has access to world-class billing expertise and
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-gradient-to-r from-[#27D083]/10 via-transparent to-[#38F8FF]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: TrendingUp, val: "$30M+", label: "Revenue Recovered" },
              { icon: Users, val: "200+", label: "Providers Served" },
              { icon: Award, val: "8+", label: "Years Experience" },
              { icon: Star, val: "4.9/5", label: "Client Satisfaction" },
            ].map(({ icon: Icon, val, label }, i) => (
              <div key={i} className="space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-[#27D083]/10 border border-[#27D083]/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#27D083]" />
                </div>
                <div className="text-3xl font-black gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>{val}</div>
                <div className="text-sm text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-pill inline-block px-3 py-1 rounded-full mb-4">
                OUR JOURNEY
              </div>
              <h2
                className="text-4xl md:text-5xl font-black mb-6 section-heading"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                From a Small Team to{" "}
                <span className="gradient-text">Industry Leader</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
               MedRCMx Solutions was founded in 2018 by Mehfooz Hussain. The company specializes in providing comprehensive revenue cycle management (RCM) solutions, including medical billing, credentialing, coding, and healthcare administrative services. By combining industry expertise with innovative technology, MedRCMx Solutions helps healthcare providers streamline operations, optimize revenue, and maintain compliance, delivering efficient and reliable services that drive growth and improve financial performance.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
               Today, we proudly serve over 200 healthcare providers across 40+ specialties in all 50 states, processing millions of claims annually with an industry-leading 98.2% first-pass clean claim rate.
              </p>
              <ul className="space-y-3">
                {[
                  "AAPC & AHIMA Certified Coding Team",
                  "SOC 2 Type II & HIPAA Compliant",
                  "Named Top RCM Company 2023 & 2024",
                  "BBB A+ Accredited Business",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-[#27D083] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#27D083] via-[#38F8FF] to-[#27D083]/20" />
              <div className="space-y-6 pl-16">
                {milestones.map(({ year, title, desc }, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-10 top-2 w-4 h-4 rounded-full border-2 border-[#27D083] bg-[#091e35]"
                      style={{ borderColor: i % 2 === 0 ? "#27D083" : "#38F8FF" }}
                    />
                    <div className="glass-card rounded-2xl p-5 border border-white/5 hover:border-[#27D083]/20 transition-all">
                      <div
                        className="text-xs font-black mb-1 gradient-text"
                        style={{ fontFamily: "Space Mono, monospace" }}
                      >
                        {year}
                      </div>
                      <div
                        className="text-base font-700 text-white mb-1"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {title}
                      </div>
                      <p className="text-xs text-white/40">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-section-gradient">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

          <div className="text-center mb-14">
            <div className="tag-pill inline-block px-3 py-1 rounded-full mb-6 bg-emerald/10 text-emerald font-bold">
              CORE VALUES
            </div>
            <h2
              className="text-4xl md:text-5xl font-black section-heading-center"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
             <span className="gradient-text">  Built on Integrity</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <div key={i} className="bg-[#091e35] rounded-3xl p-7 card-3d text-center group ">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center group-hover:scale-110 transition-transform "
                  style={{ background: `${color}15`, border: `2px solid ${color}30` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-lg font-black text-white mb-3" style={{ fontFamily: "Syne, sans-serif" }}>{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<section className="py-20 overflow-hidden relative">
  {/* Header */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
    <h2
      className="text-4xl md:text-5xl font-black mb-2 gradient-text"
      style={{ fontFamily: "Syne, sans-serif" }}
    >
      Meet Our <span className="gradient-text">Team</span>
    </h2>
    <p className="text-white/60 text-lg max-w-2xl mx-auto">
      Our experts in medical billing, credentialing, HR, and development work together to streamline your revenue cycle management.
    </p>
  </div>

  {/* Cards */}
  <div
    className="relative w-full flex justify-center"
    onMouseEnter={(e) => {
      const el = e.currentTarget.querySelector('.scroll-wrapper') as HTMLElement;
      if (el && window.innerWidth <= 640) el.style.animationPlayState = 'paused';
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget.querySelector('.scroll-wrapper') as HTMLElement;
      if (el && window.innerWidth <= 640) el.style.animationPlayState = 'running';
    }}
  >
    <div className="relative w-full max-w-7xl flex justify-start">
      {/* Cards Wrapper */}
      <div
        className="scroll-wrapper flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full sm:overflow-x-visible overflow-y-auto"
        style={{ maxHeight: '80vh' }}
        ref={(el) => {
          if (!el) return;
          let isDown = false;
          let startY = 0;
          let scrollTop = 0;

          const startDrag = (e: TouchEvent) => {
            if (window.innerWidth > 640) return;
            isDown = true;
            startY = e.touches[0].pageY - (el as HTMLElement).offsetTop;
            scrollTop = (el as HTMLElement).scrollTop;
          };

          const moveDrag = (e: TouchEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.touches[0].pageY - (el as HTMLElement).offsetTop;
            const walk = (y - startY) * 1.5;
            (el as HTMLElement).scrollTop = scrollTop - walk;
          };

          const endDrag = () => { isDown = false; };

          el.addEventListener('touchstart', startDrag, { passive: false });
          el.addEventListener('touchmove', moveDrag, { passive: false });
          el.addEventListener('touchend', endDrag);
        }}
      >
        {teamMembers.map(({ name, designation, role, bio, image }, i) => (
          <div
            key={i}
            className="team-card bg-[#091e35] rounded-3xl p-7 flex-shrink-0 shadow-[0_8px_25px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_35px_rgba(0,0,255,0.25)] transition-all duration-300 mx-auto"
          >
            <div className="w-32 h-32 mx-auto mb-5 p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>
            <h4 className="text-lg font-bold text-white mb-1 text-center">{name}</h4>
            <div className="text-sm text-blue-400 font-semibold text-center">{designation}</div>
            <div className="text-xs text-gray-300 mb-3 text-center">{role}</div>
            <p className="text-sm text-white/60 leading-relaxed text-center">{bio}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    /* REMOVE slide animation on desktop */
    .scroll-wrapper {
      display: flex;
      scroll-behavior: smooth;
    }

    /* MOBILE ONLY */
    @media (max-width: 640px) {
      .scroll-wrapper {
        flex-direction: column;
        align-items: center;    
        animation: none;
        width: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 80vh;
        -webkit-overflow-scrolling: touch;
        gap: 24px;
        padding-right: 16px;    
      }

      .team-card {
        width: 90%;
        max-width: 320px;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(40px) scale(0.95);
        animation: cardFadeUp 0.6s ease forwards;
      }

      .team-card:nth-child(1) { animation-delay: 0.1s; }
      .team-card:nth-child(2) { animation-delay: 0.2s; }
      .team-card:nth-child(3) { animation-delay: 0.3s; }
      .team-card:nth-child(4) { animation-delay: 0.4s; }
      .team-card:nth-child(5) { animation-delay: 0.5s; }

      @keyframes cardFadeUp {
        from { opacity: 0; transform: translateY(40px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
    }

    @media (min-width: 641px) and (max-width: 1024px) {
      .team-card { width: 260px; }
    }

    @media (min-width: 1025px) {
      .team-card { width: 300px; }
    }
  `}</style>
</section>
      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Partner with <span className="gradient-text">MedRCMx</span> Today
          </h2>
          <p className="text-white/50 mb-8">Join 200+ healthcare providers maximizing their revenue.</p>
          <Link
            href="/contact"
            className="btn-primary px-10 py-4 rounded-2xl text-base inline-flex items-center gap-2 group"
          >
            <span>Start Your Free Audit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
