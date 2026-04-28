'use client';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const featuredPackages = [
  {
    title: 'Panchakarma Detox & Rejuvenation',
    sub: 'Deep Ayurvedic detox for full-body reset',
    duration: '14 Nights',
    popular: true,
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/876646',
    bg: 'linear-gradient(135deg, #2C2016 0%, #1A1410 100%)',
  },
  {
    title: 'Lotus Wellness Package',
    sub: 'Rejuvenating detox & full-body reset',
    duration: '3 Nights',
    popular: false,
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854158',
    bg: 'linear-gradient(135deg, #354024 0%, #2C2016 100%)',
  },
  {
    title: 'Anti-Stress & Depression Relief',
    sub: 'Restore emotional and mental balance',
    duration: '7 Nights',
    popular: false,
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854684',
    bg: 'linear-gradient(135deg, #4A6670 0%, #2C2016 100%)',
  },
];

const treatments = [
  { name: 'Panchakarma', desc: 'The pinnacle of Ayurvedic detoxification' },
  { name: 'Shirodhara', desc: 'Warm oil stream to calm the mind' },
  { name: 'Yoga & Meditation', desc: 'Daily practice for body and breath' },
  { name: 'Abhyanga Massage', desc: 'Full-body warm oil synchronised massage' },
  { name: 'Herbal Steam Bath', desc: 'Deep cleanse through ancient herbal infusions' },
  { name: 'Shirovasti', desc: 'Neural healing through warm oil retention' },
];


const journeySteps = [
  { num: '01', title: 'Arrival', desc: 'We arrange your airport transfer. Upon arrival, you are welcomed with herbal tea and a personal introduction to our team.' },
  { num: '02', title: 'Consultation', desc: 'Within hours of arrival, Dr. Nalaka conducts Nadi Pariksha (pulse diagnosis) to customise your entire programme.' },
  { num: '03', title: 'Programme Begins', desc: 'From your second morning, your personalised schedule unfolds — treatments, yoga at dawn, Ayurvedic meals, and evening meditation.' },
  { num: '04', title: 'Ongoing Care', desc: 'Dr. Nalaka meets with you regularly to assess progress and adjust your protocol based on how your body responds.' },
  { num: '05', title: 'Departure', desc: 'You leave with a personalised post-retreat protocol — herbal recommendations, dietary guidelines, and a lifestyle plan.' },
];

export default function HomePage() {
  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/header vidoe.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text legibility */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />

        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '140px', paddingBottom: '120px' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="eyebrow" style={{ marginBottom: '20px', display: 'block' }}>BENTOTA · SRI LANKA</span>
            <h1 className="hero-headline" style={{ marginTop: '16px', marginBottom: '28px' }}>
              Where Ancient<br />
              Healing Meets<br />
              Sacred Stillness.
            </h1>
            <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 300, fontSize: '18px', color: 'rgba(247,243,238,0.82)', lineHeight: 1.75, maxWidth: '540px', marginBottom: '48px' }}>
              An Ayurvedic wellness retreat on the banks of the Bentota River — where every breath is medicine.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/packages" className="btn-primary">
                Reserve Your Retreat <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link href="/treatments" className="btn-secondary">
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
          borderTop: '1px solid rgba(201,169,110,0.2)',
          background: 'rgba(26,20,16,0.55)',
          backdropFilter: 'blur(8px)',
          padding: '18px 0',
          overflow: 'hidden',
        }}>
          <style>{`
            @keyframes trust-scroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .trust-track {
              display: flex;
              width: max-content;
              animation: trust-scroll 18s linear infinite;
            }
            .trust-track:hover { animation-play-state: paused; }
            /* Desktop: static centered row */
            @media (min-width: 768px) {
              .trust-track {
                animation: none;
                width: 100%;
                justify-content: center;
                flex-wrap: nowrap;
              }
              .trust-clone { display: none; }
            }
          `}</style>

          {/* Scrolling on mobile, static on desktop */}
          <div className="trust-track">
            {/* Original set */}
            {['Est. 2005', '20+ Years of Healing', '5 Private Villas', '30+ Treatments', 'Doctor-Led Care'].map((t) => (
              <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingRight: '40px', flexShrink: 0, fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.6)' }}>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(201,169,110,0.45)', flexShrink: 0, display: 'inline-block' }} />
                {t}
              </span>
            ))}
            {/* Duplicate for seamless loop (mobile only) */}
            {['Est. 2005', '20+ Years of Healing', '5 Private Villas', '30+ Treatments', 'Doctor-Led Care'].map((t) => (
              <span key={`clone-${t}`} className="trust-clone" style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingRight: '40px', flexShrink: 0, fontFamily: 'Jost, sans-serif', fontWeight: 400, fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(247,243,238,0.6)' }}>
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(201,169,110,0.45)', flexShrink: 0, display: 'inline-block' }} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container-rv">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <FadeIn>
              <span className="eyebrow">OUR PHILOSOPHY</span>
              <span className="gold-rule" />
              <h2 className="section-headline" style={{ marginBottom: '24px' }}>
                &ldquo;Healing Is Not<br />a Luxury. It Is<br />a Necessity.&rdquo;
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, maxWidth: '520px', marginBottom: '20px' }}>
                River View Villas was founded on a singular belief: that true wellness cannot be rushed. Nestled on the serene banks of the Bentota River, our retreat has guided guests from across the world through authentic Ayurvedic healing since 2005.
              </p>
              <p style={{ color: 'var(--text-dark)', fontSize: '21px', lineHeight: 1.6, maxWidth: '480px', marginBottom: '24px', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>
                We do not offer spa days. We offer transformation.
              </p>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, maxWidth: '520px', marginBottom: '40px' }}>
                Under the care of our resident Ayurvedic physician, Dr. Nalaka Samadhi, each guest receives a personalised treatment protocol — designed for your unique constitution, your specific imbalances, your healing.
              </p>
              <Link href="/about" className="text-link">
                Meet Our Doctors <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
                <Image
                  src="/OUR%20PHILOSOPHY.png"
                  alt="Ayurvedic treatment at River View Villas"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark gradient overlay with stats */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,20,16,0.88) 0%, rgba(26,20,16,0.15) 55%, transparent 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {[
                    { num: '5,000+', label: 'Years of Ancient Wisdom' },
                    { num: '20+', label: 'Years Healing Guests' },
                    { num: '30+', label: 'Ancient Treatments' },
                    { num: '5', label: 'Private Villas' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>{stat.num}</p>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', color: 'rgba(247,243,238,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '8px' }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="section-pad" style={{ background: 'var(--deep)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="eyebrow">CURATED HEALING JOURNEYS</span>
              <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
              <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '16px' }}>Find Your Path to Wellness</h2>
              <p style={{ color: 'rgba(247,243,238,0.6)', fontSize: '16px', maxWidth: '540px', margin: '0 auto' }}>
                From a 3-night reset to a 21-day deep transformation — every package is doctor-guided, all-inclusive, and built around your body&apos;s needs.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '48px' }}>
            {featuredPackages.map((pkg, i) => (
              <FadeIn key={pkg.title} delay={i * 0.1}>
                <div style={{
                  background: pkg.bg,
                  borderRadius: '4px',
                  padding: '40px 32px',
                  border: '1px solid rgba(201,169,110,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '320px',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'default',
                }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    <span className="badge-duration">{pkg.duration}</span>
                    {pkg.popular && <span className="badge-gold">Most Popular</span>}
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: 600, color: 'var(--white)', marginBottom: '12px', lineHeight: 1.2 }}>
                    {pkg.title}
                  </h3>
                  <p style={{ color: 'rgba(247,243,238,0.58)', fontSize: '14px', marginBottom: 'auto', paddingBottom: '32px' }}>{pkg.sub}</p>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 24px', fontSize: '12px' }}>
                      Reserve Now
                    </a>
                    <Link href="/packages" className="btn-secondary" style={{ padding: '11px 24px', fontSize: '12px' }}>
                      Details
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/packages" className="text-link" style={{ color: 'var(--gold)' }}>
              View All 31 Packages <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* TREATMENTS GRID */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span className="eyebrow">ANCIENT THERAPIES, MODERN COMFORT</span>
              <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
              <h2 className="section-headline">
                30+ Treatments. One Intention: Your Wholeness.
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', marginBottom: '48px' }}>
            {treatments.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.08}>
                <div className="treatment-card">
                  <div style={{ width: '32px', height: '1px', background: 'var(--gold)', marginBottom: '16px' }} />
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '10px' }}>
                    {t.name}
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '14px', lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/treatments" className="text-link">
              Explore Full Treatment Menu <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* VILLAS TEASER */}
      <section style={{ position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1A2810 0%, #2C3820 50%, #1A1410 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.42)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, padding: '80px 40px' }}>
          <FadeIn>
            <div style={{ maxWidth: '640px' }}>
              <span className="eyebrow">YOUR SANCTUARY</span>
              <span className="gold-rule" style={{ marginTop: '16px' }} />
              <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '20px' }}>
                Five Private Villas.<br />One River. Infinite Peace.
              </h2>
              <p style={{ color: 'rgba(247,243,238,0.72)', fontSize: '16px', lineHeight: 1.75, maxWidth: '480px', marginBottom: '40px' }}>
                From the intimate Villa Lilly to the grand Lotus Mansion, each villa is designed with Ayurvedic principles — natural materials, calming colours, organic amenities — so your healing begins the moment you arrive.
              </p>
              <Link href="/accommodation" className="btn-primary">
                Discover Our Villas <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REVIEWS — sliding carousel */}
      <ReviewsCarousel />

      {/* JOURNEY STEPS */}
      <section className="section-pad" style={{ background: 'var(--earth)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ marginBottom: '64px' }}>
              <span className="eyebrow">YOUR HEALING JOURNEY</span>
              <span className="gold-rule" />
              <h2 className="section-headline" style={{ color: 'var(--white)' }}>Your Journey, Step by Step</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {journeySteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '52px', fontWeight: 600, color: 'rgba(201,169,110,0.18)', lineHeight: 1, marginBottom: '12px' }}>{step.num}</p>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: 'var(--gold-light)', marginBottom: '12px' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(247,243,238,0.52)', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ background: 'var(--deep)', padding: '100px 0' }}>
        <div className="container-rv" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">BEGIN YOUR HEALING</span>
            <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 600, fontStyle: 'italic', color: 'var(--gold)', marginBottom: '20px', maxWidth: '640px', margin: '0 auto 20px', lineHeight: 1.2 }}>
              &ldquo;Your Healing Cannot Wait Any Longer.&rdquo;
            </h2>
            <p style={{ color: 'rgba(247,243,238,0.62)', fontSize: '16px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
              Limited rooms. Doctor-guided packages fill weeks in advance. Secure your retreat with just a 50% deposit. Free cancellation applies.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="https://booking.profitroom.com/en/riverviewvillas/home" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Reserve Your Package Now <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Enquire Directly
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Free cancellation (T&C)', '50% deposit only', 'Full board included', 'Doctor consultation on arrival'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={14} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(247,243,238,0.52)', fontSize: '13px' }}>{t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
