'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--earth)', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container-rv">
        {/* Newsletter strip */}
        <div style={{
          borderTop: '1px solid rgba(201,169,110,0.2)',
          borderBottom: '1px solid rgba(201,169,110,0.2)',
          padding: '48px 0',
          marginBottom: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          flexWrap: 'wrap',
        }}>
          <div>
            <p className="eyebrow" style={{ marginBottom: '8px' }}>Wellness Wisdom</p>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', color: 'var(--gold-light)', fontWeight: 400 }}>
              Receive Monthly Ayurvedic Insights
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '14px', marginTop: '8px', maxWidth: '400px' }}>
              Seasonal retreat offers and stories of healing. No noise. Only nourishment.
            </p>
          </div>
          <form
            style={{ display: 'flex', gap: '0', flexShrink: 0 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="form-input"
              style={{ borderRadius: '2px 0 0 2px', minWidth: '260px', background: 'rgba(255,255,255,0.07)', color: 'var(--white)', borderColor: 'rgba(201,169,110,0.3)' }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ borderRadius: '0 2px 2px 0', whiteSpace: 'nowrap' }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          {/* Brand */}
          <div>
            <Image src="/logo.png" alt="River View Villas" width={140} height={42} style={{ height: '40px', width: 'auto', marginBottom: '20px', filter: 'brightness(0.9)' }} />
            <p style={{ color: 'var(--text-light)', fontSize: '14px', lineHeight: 1.7, maxWidth: '240px' }}>
              Ayurvedic Healing Retreat on the banks of the Bentota River, Sri Lanka. Est. 2005.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Quick Links</p>
            {[
              { href: '/about', label: 'About Us' },
              { href: '/packages', label: 'Packages' },
              { href: '/accommodation', label: 'Accommodation' },
              { href: '/treatments', label: 'Treatments' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <div key={link.href} style={{ marginBottom: '12px' }}>
                <Link href={link.href} style={{ color: 'var(--text-light)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Packages */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Packages</p>
            {[
              { href: '/packages', label: '3-Night Packages' },
              { href: '/packages', label: '5-Night Packages' },
              { href: '/packages', label: '7-Night Packages' },
              { href: '/packages', label: '14-Night Packages' },
              { href: '/packages', label: '21-Night Packages' },
            ].map((link, i) => (
              <div key={i} style={{ marginBottom: '12px' }}>
                <Link href={link.href} style={{ color: 'var(--text-light)', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                <p style={{ color: 'var(--text-light)', fontSize: '13px', lineHeight: 1.6 }}>
                  No 102/7C, Mathugama Road,<br />Dharga Town, Bentota, Sri Lanka
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="tel:+94777217829" style={{ color: 'var(--text-light)', fontSize: '13px', textDecoration: 'none' }}>+94 777 217 829</a>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <a href="mailto:Riverviewvillas23@gmail.com" style={{ color: 'var(--text-light)', fontSize: '13px', textDecoration: 'none' }}>
                  Riverviewvillas23@gmail.com
                </a>
              </div>
              {/* Social */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                <a href="#" aria-label="Instagram" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="Facebook" style={{ color: 'var(--text-light)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(201,169,110,0.1)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: 'var(--text-light)', fontSize: '12px', letterSpacing: '0.05em' }}>
            © 2026 River View Villas · All Rights Reserved
          </p>
          <p style={{ color: 'rgba(158,142,120,0.5)', fontSize: '12px', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
            Built with intention for healing.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Terms of Use', 'Privacy Policy'].map((t) => (
              <Link key={t} href="#" style={{ color: 'var(--text-light)', fontSize: '12px', textDecoration: 'none', letterSpacing: '0.05em' }}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
