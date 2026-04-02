'use client';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const villas = [
  {
    name: 'Carpe Diem Villa',
    tagline: 'Seize the Day. By the River.',
    desc: 'Set amidst a lush tropical garden with a year-round outdoor pool, Carpe Diem Villa offers a stunning river view and intimate privacy. The villa features four air-conditioned rooms with en-suite bathrooms, a communal hall, and a kitchen — perfect for a small group seeking a complete retreat experience.',
    activities: 'Billiards, fishing, cycling (bicycles complimentary)',
    amenities: ['Free parking', 'Free water bottles', 'Free Wi-Fi', 'Laundry service', 'Room service', 'Forest view', 'Airport taxi service'],
    link: 'https://booking.profitroom.com/en/riverviewvillas/home',
    accent: 'linear-gradient(135deg, #4A6670 0%, #1A2810 100%)',
  },
  {
    name: 'Villa Araliya',
    tagline: 'Named for the Frangipani. Scented Like Peace.',
    desc: 'Villa Araliya offers serene accommodations with a focus on Ayurvedic wellness. Elegantly furnished rooms with modern amenities overlook the surrounding tropical nature. Personalised Ayurvedic treatments and therapies are available throughout your stay.',
    activities: null,
    amenities: ['Luxurious rooms', 'Organic dining options', 'Ayurvedic treatment packages', 'Yoga and meditation sessions'],
    link: 'https://booking.profitroom.com/en/riverviewvillas/home',
    accent: 'linear-gradient(135deg, #7A8C6E 0%, #2C2016 100%)',
  },
  {
    name: 'Villa Orchid',
    tagline: 'Rare. Refined. Restorative.',
    desc: 'Villa Orchid provides a tranquil escape with a strong emphasis on Ayurvedic healing. Spacious rooms, each designed to enhance relaxation and well-being, open onto herbal gardens where many of our treatment ingredients are grown.',
    activities: null,
    amenities: ['Spacious rooms', 'Herbal gardens', 'Ayurvedic treatments', 'Meditation and yoga areas'],
    link: 'https://booking.profitroom.com/en/riverviewvillas/home',
    accent: 'linear-gradient(135deg, #354024 0%, #1A1410 100%)',
  },
  {
    name: 'Villa Lilly',
    tagline: 'Pure. Gentle. Healing.',
    desc: 'Villa Lilly is designed for guests seeking a holistic Ayurvedic experience in a comfortable, unhurried setting. Wellness services include personalised dietary plans and a full range of therapeutic treatments curated to your dosha.',
    activities: null,
    amenities: ['Comfortable accommodations', 'Therapeutic treatments', 'Ayurvedic wellness services', 'Personalised dietary plans'],
    link: 'https://booking.profitroom.com/en/riverviewvillas/home',
    accent: 'linear-gradient(135deg, #C9A96E 0%, #2C2016 100%)',
  },
  {
    name: 'Lotus Mansion',
    tagline: 'Where Luxury and Ancient Wisdom Become One.',
    desc: 'Lotus Mansion is our signature property — combining the highest level of luxury with the full depth of traditional Ayurvedic practices. Beautifully appointed rooms, a private garden, and exclusive Ayurvedic services make this the choice for guests seeking a truly immersive, comprehensive wellness experience.',
    activities: null,
    amenities: ['Luxurious rooms', 'Private garden', 'Exclusive Ayurvedic services', 'Comprehensive wellness programs'],
    link: 'https://booking.profitroom.com/en/riverviewvillas/home',
    accent: 'linear-gradient(135deg, #1A2810 0%, #2C2016 100%)',
    signature: true,
  },
];

const amenitiesBar = [
  'Organic chemical-free toiletries',
  'Herbal teas & Ayurvedic beverages',
  'Yoga mats & meditation spaces',
  'Natural light & Ayurvedic colour principles',
  'Free Wi-Fi',
  'Laundry service',
  'Room service',
  'Airport transfers',
];

export default function AccommodationPage() {
  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #1A2810 0%, #2C2016 60%, #4A6670 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.38)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">YOUR SANCTUARY</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '680px', marginBottom: '20px' }}>
              Five Private Villas. One Sacred River.
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '17px', maxWidth: '560px', lineHeight: 1.75 }}>
              Each villa is designed around Ayurvedic principles — natural materials, river-facing views, organic amenities. Your healing begins the moment you arrive.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* AMENITIES BAR */}
      <div style={{ background: 'var(--deep)', padding: '20px 0', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
        <div className="container-rv">
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {amenitiesBar.map(a => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold)' }} />
                <span style={{ color: 'rgba(247,243,238,0.58)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif' }}>{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VILLAS */}
      <section className="section-pad">
        <div className="container-rv">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {villas.map((villa, i) => (
              <FadeIn key={villa.name} delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 48px rgba(26,20,16,0.1)' }}>
                  {/* Image side */}
                  <div style={{
                    background: villa.accent,
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '40px',
                    order: i % 2 === 0 ? 0 : 1,
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {villa.signature && (
                      <div style={{ position: 'absolute', top: '24px', right: '24px' }}>
                        <span className="badge-dark">Signature Villa</span>
                      </div>
                    )}
                    <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '80px', height: '80px', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.2)' }} />
                    <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '13px', fontStyle: 'italic', color: 'rgba(247,243,238,0.55)', marginBottom: '8px' }}>{villa.tagline}</p>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '36px', fontWeight: 600, color: 'var(--white)', lineHeight: 1.1 }}>{villa.name}</h2>
                  </div>

                  {/* Content side */}
                  <div style={{ background: 'var(--white)', padding: '48px 40px', order: i % 2 === 0 ? 1 : 0 }}>
                    <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>{villa.desc}</p>
                    {villa.activities && (
                      <p style={{ color: 'var(--text-light)', fontSize: '14px', marginBottom: '24px' }}>
                        <span style={{ fontWeight: 500, color: 'var(--text-dark)' }}>Activities: </span>{villa.activities}
                      </p>
                    )}
                    <div style={{ marginBottom: '32px' }}>
                      <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '12px' }}>Amenities</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {villa.amenities.map(am => (
                          <div key={am} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <CheckCircle2 size={12} strokeWidth={1.5} style={{ color: 'var(--sage)' }} />
                            <span style={{ color: 'var(--text-mid)', fontSize: '13px' }}>{am}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href={villa.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Reserve {villa.name.split(' ').slice(0, 2).join(' ')} <ArrowRight size={15} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section style={{ background: 'var(--earth)', padding: '96px 0' }}>
        <div className="container-rv" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">DIRECT BOOKING</span>
            <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '16px' }}>
              Ready to Choose Your Villa?
            </h2>
            <p style={{ color: 'rgba(247,243,238,0.62)', fontSize: '16px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
              Book directly with us for the best available rate. All rooms include Ayurvedic breakfast. Package inclusions vary — see our Packages page for full board and treatment inclusions.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://booking.profitroom.com/en/riverviewvillas/home" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Check Availability <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Us Directly
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
