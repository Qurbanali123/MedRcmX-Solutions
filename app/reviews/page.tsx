"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Star, Quote, ThumbsUp, TrendingUp } from "lucide-react";

const reviews = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Internal Medicine",
    location: "New York, NY",
    initials: "SM",
    rating: 5,
    text: "MedRCMx Solutions has been a game-changer for our practice. Our revenue increased by 40% in the very first quarter. The team is incredibly knowledgeable, responsive, and truly invested in our success. I cannot recommend them enough!",
    stats: { before: "68%", after: "98%", metric: "Collection Rate" },
    specialty: "Internal Medicine",
    color: "#27D083",
    featured: true,
  },
  {
    name: "Dr. James Rodriguez",
    role: "Orthopedic Surgeon",
    location: "Miami, FL",
    initials: "JR",
    rating: 5,
    text: "Switching to MedRCMx was the best financial decision I made for my practice. Our denial rate dropped from 18% to just 2% in two months. The real-time dashboard is incredibly useful and the team is always there when I need them.",
    stats: { before: "82%", after: "98%", metric: "First-Pass Rate" },
    specialty: "Orthopedics",
    color: "#38F8FF",
    featured: true,
  },
  {
    name: "Dr. Priya Patel",
    role: "Cardiologist",
    location: "Dallas, TX",
    initials: "PP",
    rating: 5,
    text: "After trying three other billing companies, MedRCMx is the only one that truly delivered on their promises. Professional, accurate, always on time, and the reporting is exceptional. My practice revenue is up 35% year over year.",
    stats: { before: "$380K", after: "$515K", metric: "Annual Revenue" },
    specialty: "Cardiology",
    color: "#27D083",
    featured: true,
  },
  {
    name: "Dr. Robert Kim",
    role: "Neurologist",
    location: "Chicago, IL",
    initials: "RK",
    rating: 5,
    text: "The credentialing team at MedRCMx is outstanding. They got me enrolled with 12 payers in record time when I opened my new practice. The billing accuracy is top-notch and their response time is unmatched.",
    stats: null,
    specialty: "Neurology",
    color: "#38F8FF",
    featured: false,
  },
  {
    name: "Dr. Angela Williams",
    role: "Behavioral Health",
    location: "Atlanta, GA",
    initials: "AW",
    rating: 5,
    text: "As a small behavioral health practice, I was worried about affordability. MedRCMx offered flexible pricing and delivered massive value. Collections improved by 52% and I now have more time to focus on my patients.",
    stats: null,
    specialty: "Behavioral Health",
    color: "#27D083",
    featured: false,
  },
  {
    name: "Maria Gonzalez",
    role: "Practice Administrator",
    location: "Phoenix, AZ",
    initials: "MG",
    rating: 5,
    text: "Managing billing for a 15-provider group was overwhelming. MedRCMx took over and everything became seamless. The monthly reports are comprehensive, the team is proactive, and our AR days dropped from 52 to 18.",
    stats: null,
    specialty: "Multi-Specialty Group",
    color: "#38F8FF",
    featured: false,
  },
  {
    name: "Dr. Thomas Park",
    role: "Gastroenterologist",
    location: "Seattle, WA",
    initials: "TP",
    rating: 5,
    text: "The prior authorization handling alone is worth every penny. My staff used to spend 3 hours a day on PAs. Now MedRCMx handles everything and our approval rate actually went up. Truly professional service.",
    stats: null,
    specialty: "Gastroenterology",
    color: "#27D083",
    featured: false,
  },
  {
    name: "Dr. Lisa Chen",
    role: "Pediatrician",
    location: "Boston, MA",
    initials: "LC",
    rating: 5,
    text: "Five stars across the board. The team is responsive, the billing is accurate, and the analytics dashboard gives me insights I never had before. My practice's financial health has never been better. 100% recommend!",
    stats: null,
    specialty: "Pediatrics",
    color: "#38F8FF",
    featured: false,
  },
  {
    name: "Dr. Hassan Omar",
    role: "Urologist",
    location: "Houston, TX",
    initials: "HO",
    rating: 5,
    text: "I was skeptical at first but MedRCMx exceeded every expectation. Their coding team is meticulous, claims go out clean the first time, and when there is a denial they fight for every dollar. Highly recommend.",
    stats: null,
    specialty: "Urology",
    color: "#27D083",
    featured: false,
  },
];

const ratingStats = [
  { stars: 5, percent: 94 },
  { stars: 4, percent: 5 },
  { stars: 3, percent: 1 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

const platforms = [
  { name: "Google", rating: "4.9", reviews: "847" },
  { name: "Clutch", rating: "5.0", reviews: "213" },
  { name: "G2", rating: "4.8", reviews: "412" },
  { name: "BBB", rating: "A+", reviews: "Accredited" },
];

export default function ReviewsPage() {
  const [filter, setFilter] = useState("all");

  const specialties = ["all", ...Array.from(new Set(reviews.map((r) => r.specialty)))];
  const filtered = filter === "all" ? reviews : reviews.filter((r) => r.specialty === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section 
        className="relative py-24 overflow-hidden section-bg-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="bg-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill inline-block px-3 py-1 rounded-full mb-6 bg-emerald/10 text-emerald font-bold">
            CLIENT REVIEWS
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Real Results from{" "}
            <span className="gradient-text">Real Practices</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto font-medium">
            Don&apos;t take our word for it — see what 1,200+ healthcare providers say
            about their experience with MedRCMx Solutions.
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Score */}
            <div className="glass-card rounded-3xl p-8 text-center border border-[#27D083]/20">
              <div
                className="text-8xl font-black gradient-text mb-2"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                4.9
              </div>
              <div className="flex justify-center gap-1 mb-3">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-6 h-6 star-filled fill-current" />
                ))}
              </div>
              <p className="text-white/50 text-sm">Based on 1,472+ verified reviews</p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {platforms.map((p, i) => (
                  <div key={i} className="bg-[#27D083]/5 border border-[#27D083]/10 rounded-xl p-3 text-center">
                    <div className="text-lg font-black gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>{p.rating}</div>
                    <div className="text-xs text-white/50">{p.name}</div>
                    <div className="text-[10px] text-white/30">{p.reviews} reviews</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakdown */}
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-black text-white mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
                Rating Breakdown
              </h3>
              <div className="space-y-4">
                {ratingStats.map(({ stars, percent }) => (
                  <div key={stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20">
                      <span className="text-sm text-white/60">{stars}</span>
                      <Star className="w-3 h-3 text-[#27D083] fill-current" />
                    </div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#27D083] to-[#38F8FF] transition-all duration-1000"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="text-sm text-white/40 w-10 text-right">{percent}%</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>97%</div>
                  <div className="text-xs text-white/40">Would Recommend</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>94%</div>
                  <div className="text-xs text-white/40">5-Star Ratings</div>
                </div>
                <div>
                  <div className="text-2xl font-black gradient-text" style={{ fontFamily: "Syne, sans-serif" }}>4+ yrs</div>
                  <div className="text-xs text-white/40">Avg. Client Tenure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-12 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black section-heading-center" style={{ fontFamily: "Syne, sans-serif" }}>
              <span className="gradient-text"> Featured Success Stories</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.filter((r) => r.featured).map(({ name, role, location, initials, rating, text, stats, color }, i) => (
              <div key={i} className="bg-[#091e35] rounded-3xl p-8 card-3d border" style={{ borderColor: `${color}20` }}>
                <Quote className="w-8 h-8 mb-4" style={{ color: `${color}40` }} />
                <div className="flex gap-1 mb-4">
                  {Array(rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 star-filled fill-current" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{text}&rdquo;</p>

                {stats && (
                  <div className="bg-[#27D083]/5 border border-[#27D083]/10 rounded-2xl p-4 mb-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xs text-white/30 mb-1">Before</div>
                      <div className="text-lg font-black text-white/50" style={{ fontFamily: "Syne, sans-serif" }}>{stats.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/30 mb-1">After</div>
                      <div className="text-lg font-black" style={{ fontFamily: "Syne, sans-serif", color }}>{stats.after}</div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-1 text-xs text-white/40">
                      <TrendingUp className="w-3 h-3 text-[#27D083]" />
                      {stats.metric}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-[#0F2D4D]"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-700 text-white" style={{ fontFamily: "Syne, sans-serif" }}>{name}</div>
                    <div className="text-xs text-white/40">{role} · {location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews with Filter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-xl text-sm font-600 capitalize transition-all duration-300 ${
                  filter === s
                    ? "bg-[#27D083]/20 text-[#27D083] border border-[#27D083]/30"
                    : "text-white/50 border border-white/10 hover:border-white/20"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {s === "all" ? "All Specialties" : s}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ name, role, location, initials, rating, text, specialty, color }, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 card-3d group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {Array(rating).fill(0).map((_, j) => (
                      <Star key={j} className="w-4 h-4 star-filled fill-current" />
                    ))}
                  </div>
                  <span
                    className="text-[10px] font-700 px-2 py-1 rounded-full"
                    style={{ background: `${color}15`, color, fontFamily: "Space Mono, monospace" }}
                  >
                    {specialty}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5 italic">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-black text-xs text-[#0F2D4D]"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
                  >
                    {initials}
                  </div>
                  <div>
                    <div className="text-sm font-700 text-white" style={{ fontFamily: "Syne, sans-serif" }}>{name}</div>
                    <div className="text-xs text-white/40">{role} · {location}</div>
                  </div>
                  <ThumbsUp className="w-4 h-4 text-[#27D083]/40 group-hover:text-[#27D083] transition-colors ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            Join 1,200+ <span className="gradient-text">Satisfied Practices</span>
          </h2>
          <p className="text-white/50 mb-8">
            Experience the MedRCMx difference — start with a free billing audit today.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-10 py-4 rounded-2xl text-base inline-flex items-center gap-2 group"
          >
            <span>Get Your Free Audit</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
