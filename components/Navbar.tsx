"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        menuOpen
          ? "bg-white/30 backdrop-blur-xl border-b border-emerald/10 shadow-lg text-black"
          : scrolled || pathname !== "/" 
          ? "bg-white border-b border-emerald/10 shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/logo1.svg"
                alt="MedRCMx Logo"
                width={280}
                height={80}
                className="w-48 sm:w-64 md:w-80 object-contain transition-all duration-300 group-hover:scale-105"
                priority
              />
              {/* Optional glowing dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald rounded-full animate-pulse" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkTextColor =
                menuOpen || scrolled || pathname !== "/" 
                  ? "text-black" // black text when navbar is white or blurred
                  : isActive
                  ? "text-emerald" // active link on homepage
                  : "text-white/80 hover:text-white"; // default homepage links

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${linkTextColor}`}
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-emerald/10 rounded-lg border border-emerald/20" />
                    )}
                    <span className="relative">{link.label}</span>
                    {!isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald group-hover:w-4/5 transition-all duration-300 rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="btn-primary px-6 py-2.5 rounded-xl text-sm flex items-center gap-2"
            >
              <span>Get Free Audit</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-emerald/30 text-emerald"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/30 backdrop-blur-xl border-t border-emerald/10 px-4 py-6 space-y-2">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            const linkTextColor =
              menuOpen || scrolled || pathname !== "/" 
                ? isActive
                  ? "bg-emerald/10 text-emerald border border-emerald/20"
                  : "text-black hover:bg-white/5"
                : isActive
                ? "bg-emerald/10 text-emerald border border-emerald/20"
                : "text-white/70 hover:text-white hover:bg-white/5";

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${linkTextColor}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full px-6 py-3 rounded-xl text-sm flex items-center justify-center gap-2 mt-4"
          >
            <span>Get Free Audit</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}