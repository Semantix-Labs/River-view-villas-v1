'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/packages', label: 'Packages' },
  { href: '/accommodation', label: 'Accommodation' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* ── Drawer ── */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 2000;
          width: min(320px, 88vw);
          background: #2C2016;
          display: flex;
          flex-direction: column;
          box-shadow: -8px 0 48px rgba(26,20,16,0.45);
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }

        /* ── Backdrop ── */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1500;
          background: rgba(26,20,16,0.6);
          backdrop-filter: blur(3px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.38s ease;
        }
        .drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* ── Staggered links ── */
        .drawer-link {
          opacity: 0;
          transform: translateX(20px);
          transition: opacity 0.3s ease, transform 0.3s ease, color 0.2s ease;
        }
        .mobile-drawer.open .drawer-link:nth-child(1) { opacity:1; transform:translateX(0); transition-delay:0.10s; }
        .mobile-drawer.open .drawer-link:nth-child(2) { opacity:1; transform:translateX(0); transition-delay:0.16s; }
        .mobile-drawer.open .drawer-link:nth-child(3) { opacity:1; transform:translateX(0); transition-delay:0.22s; }
        .mobile-drawer.open .drawer-link:nth-child(4) { opacity:1; transform:translateX(0); transition-delay:0.28s; }
        .mobile-drawer.open .drawer-link:nth-child(5) { opacity:1; transform:translateX(0); transition-delay:0.34s; }
        .mobile-drawer.open .drawer-link:nth-child(6) { opacity:1; transform:translateX(0); transition-delay:0.40s; }
        .mobile-drawer.open .drawer-link:nth-child(7) { opacity:1; transform:translateX(0); transition-delay:0.46s; }

        .drawer-cta {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease 0.52s, transform 0.3s ease 0.52s;
        }
        .mobile-drawer.open .drawer-cta {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Hide desktop nav on mobile ── */
        .desktop-nav { display: none; }
        @media (min-width: 1024px) {
          .desktop-nav { display: flex; }
          .mobile-trigger { display: none !important; }
        }
      `}</style>

      {/* ── Top navbar ── */}
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: '96px',
        display: 'flex',
        alignItems: 'center',
        background: scrolled ? 'rgba(26,20,16,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.4s ease',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.12)' : 'none',
      }}>
        <div className="container-rv" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image
              src="/logo.png"
              alt="River View Villas"
              width={220}
              height={70}
              style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://booking.profitroom.com/en/riverviewvillas/home"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '12px' }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-trigger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--white)',
              padding: '8px',
              lineHeight: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={`drawer-backdrop${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Slide-in drawer ── */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">

        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 24px 20px',
          borderBottom: '1px solid rgba(201,169,110,0.12)',
          flexShrink: 0,
        }}>
          <Image
            src="/logo.png"
            alt="River View Villas"
            width={140}
            height={44}
            style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(247,243,238,0.55)',
              padding: '4px',
              lineHeight: 0,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,243,238,0.55)')}
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Links */}
        <div style={{ flex: 1, padding: '32px 24px 24px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="drawer-link"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 600,
                fontSize: '26px',
                color: 'rgba(247,243,238,0.85)',
                textDecoration: 'none',
                padding: '16px 0',
                borderBottom: '1px solid rgba(201,169,110,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,243,238,0.85)')}
            >
              {link.label}
              <ArrowRight size={15} strokeWidth={1.5} style={{ color: 'rgba(201,169,110,0.5)', flexShrink: 0 }} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="drawer-cta" style={{
          padding: '20px 24px 32px',
          borderTop: '1px solid rgba(201,169,110,0.12)',
          flexShrink: 0,
        }}>
          <a
            href="https://booking.profitroom.com/en/riverviewvillas/home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ width: '100%', justifyContent: 'center', padding: '16px', boxSizing: 'border-box' }}
          >
            Reserve Your Retreat
          </a>
          <p style={{
            color: 'rgba(247,243,238,0.3)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginTop: '14px',
            fontFamily: 'Jost, sans-serif',
          }}>
            Bentota · Sri Lanka · Est. 2005
          </p>
        </div>
      </div>
    </>
  );
}
