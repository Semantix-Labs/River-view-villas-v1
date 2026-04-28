'use client';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const team = [
  {
    name: 'Dr. Nalaka Samadhi',
    title: 'Lead Physician',
    credentials: 'Pulse Diagnosis Specialist · Panchakarma Expert · Yoga Practitioner',
    bio: '20+ years of Ayurvedic clinical practice. Specialist in treating chronic conditions through Panchakarma and personalised herbal protocols.',
    image: '/expert/Dr.Nalaka%20Samadhi.png',
  },
  {
    name: 'Dr. Kumudinee Liyanaarachchi',
    title: 'Ayurvedic Counselor',
    credentials: 'MA in Buddhist Ayurvedic Counseling',
    bio: 'Postgraduate-qualified counselor specialising in the intersection of Buddhist philosophy and Ayurvedic healing for mental wellness.',
    image: '/expert/Dr.%20Kumudinee%20Liyanaarachchi.png',
  },
  {
    name: 'A D Dilki Shanika',
    title: 'Senior Therapist',
    credentials: 'Massage, Spa & Aromatherapy Expert',
    bio: '10 years of hands-on experience in Ayurvedic massage, spa therapies, and aromatherapy treatments.',
    image: '/expert/A%20D%20Dilki%20Shanika.png',
  },
  {
    name: 'N D Malith Dhilshan',
    title: 'Senior Therapist',
    credentials: 'Panchakarma & Massage Specialist',
    bio: '10 years of specialist experience in Panchakarma therapies, deep tissue massage, and traditional Ayurvedic bodywork.',
    image: '/expert/N%20D%20Malith%20Dhilshan.png',
  },
];

const sustainability = [
  'Locally sourced, organic herbs and ingredients',
  'Chemical-free, biodegradable toiletries',
  'Energy conservation throughout the property',
  'Support for the Dharga Town local economy',
  'Eco-certified operations',
];

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(145deg, #354024 0%, #1A1410 60%, #2C2016 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.4)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">OUR STORY</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px' }}>
              Twenty Years of Healing by the River
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* HISTORY */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container-rv">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <FadeIn>
              <span className="eyebrow">OUR FOUNDING</span>
              <span className="gold-rule" />
              <h2 className="section-headline" style={{ marginBottom: '24px' }}>
                Born from a Calling, Not a Business Plan
              </h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                In 2005, River View Villas opened its doors with a single purpose: to bring the transformative power of authentic Ayurveda to those who seek genuine healing. Not wellness tourism. Not spa relaxation. Real, physician-guided, measurable healing.
              </p>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
                Two decades later, thousands of guests from Europe, Australia, the Middle East, and beyond have left our riverside retreat renewed — bodies detoxified, minds quieted, spirits restored.
              </p>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8 }}>
                We sit on the banks of the Bentota River in Sri Lanka&apos;s lush Western Province — a landscape that has always been considered sacred healing ground in ancient tradition.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ borderRadius: '4px', overflow: 'hidden', position: 'relative', minHeight: '480px' }}>
                <Image
                  src="/OUR%20FOUNDING%20.png"
                  alt="River View Villas founding story"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,20,16,0.90) 0%, rgba(26,20,16,0.2) 60%, transparent 100%)', zIndex: 1 }} />
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 2 }}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '24px', fontStyle: 'italic', color: 'var(--gold-light)', lineHeight: 1.5, marginBottom: '28px' }}>
                    &ldquo;Ancient wisdom expressed through radical simplicity.&rdquo;
                  </p>
                  <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                    {[{ n: '2005', l: 'Founded' }, { n: '20+', l: 'Years' }, { n: '5', l: 'Villas' }].map(s => (
                      <div key={s.l}>
                        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1 }}>{s.n}</p>
                        <p style={{ color: 'rgba(247,243,238,0.55)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '6px' }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* AYURVEDA WISDOM */}
      <section className="section-pad" style={{ background: 'var(--deep)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
              <span className="eyebrow">THE SCIENCE OF LIFE</span>
              <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
              <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '24px' }}>
                5,000 Years of Wisdom. Applied Today.
              </h2>
              <p style={{ color: 'rgba(247,243,238,0.68)', fontSize: '17px', lineHeight: 1.8, marginBottom: '20px' }}>
                Ayurveda — the &ldquo;Science of Life&rdquo; — is the world&apos;s oldest holistic healing system. At River View Villas, we practice authentic Ayurveda, not a diluted resort version.
              </p>
              <p style={{ color: 'rgba(247,243,238,0.68)', fontSize: '17px', lineHeight: 1.8, marginBottom: '40px' }}>
                Every treatment begins with Pulse Diagnosis (Nadi Pariksha) — a 5,000-year-old diagnostic technique where Dr. Nalaka reads your dosha imbalances through the pulse alone. Your entire programme is then built around this diagnosis.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px', marginTop: '48px' }}>
            {[
              { title: 'Panchakarma', desc: 'The supreme Ayurvedic detoxification process' },
              { title: 'Herbal Treatments', desc: 'Organically sourced local plants and herbs' },
              { title: 'Yoga & Pranayama', desc: 'Daily practice for body and breath' },
              { title: 'Ayurvedic Diet', desc: 'Personalised dietary and herbal medicine' },
              { title: 'Meditation', desc: 'Mindfulness and contemplative practices' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div style={{ borderLeft: '2px solid rgba(201,169,110,0.3)', paddingLeft: '24px' }}>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', color: 'var(--gold-light)', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(247,243,238,0.5)', fontSize: '14px', lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ marginBottom: '64px' }}>
              <span className="eyebrow">OUR EXPERTS</span>
              <span className="gold-rule" />
              <h2 className="section-headline" style={{ marginBottom: '16px' }}>Healers, Not Technicians</h2>
              <p style={{ color: 'var(--text-mid)', fontSize: '16px', maxWidth: '480px' }}>
                Our team&apos;s credentials span decades of clinical Ayurvedic practice.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="card" style={{ padding: '0', height: '100%', overflow: 'hidden' }}>
                  {/* Photo */}
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(26,20,16,0.55) 100%)' }} />
                  </div>
                  {/* Text */}
                  <div style={{ padding: '28px 32px 32px' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '4px' }}>{member.name}</h3>
                    <p style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif', fontWeight: 500, marginBottom: '8px' }}>{member.title}</p>
                    <p style={{ color: 'var(--text-light)', fontSize: '12px', marginBottom: '14px', fontStyle: 'italic' }}>{member.credentials}</p>
                    <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.7 }}>{member.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="section-pad" style={{ background: 'var(--earth)' }}>
        <div className="container-rv">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <FadeIn>
              <span className="eyebrow">SUSTAINABILITY</span>
              <span className="gold-rule" />
              <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '24px' }}>
                We Heal People. We Protect the Earth.
              </h2>
              <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>
                Our commitment to the land that heals us runs deep. We source all herbal ingredients locally, support the surrounding farming community, and operate energy-efficient facilities.
              </p>
              <Link href="/contact" className="btn-primary">
                Learn More <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {sustainability.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ color: 'rgba(247,243,238,0.7)', fontSize: '15px' }}>{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
