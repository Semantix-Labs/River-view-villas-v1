'use client';
import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';

type Category = 'All' | 'Body Therapies' | 'Head & Neural' | 'Herbal & Detox' | 'Mind & Spirit' | 'Beauty & Skin';

const treatments = [
  {
    id: 1, name: 'Abhyanga (Full Body Massage)', category: 'Body Therapies', signature: false,
    desc: 'The cornerstone of Ayurvedic bodywork. Two therapists work in synchronised strokes, applying warm herbal oils chosen for your dosha. Penetrates deep into muscle tissue, lubricates joints, stimulates lymphatic drainage, and induces profound relaxation.',
    benefits: 'Relieves deep tissue tension, aids physical recovery, improves circulation, reduces Vata imbalance.',
    duration: '60–90 minutes',
  },
  {
    id: 2, name: 'Intensive Massage', category: 'Body Therapies', signature: false,
    desc: 'A deep-pressure therapeutic massage targeting chronic muscular tension, adhesions, and deep-seated stress. Stronger pressure than Abhyanga — ideal for physically active guests or those with significant muscle tension.',
    benefits: 'Relieves deep tissue tension, aids physical recovery.',
    duration: '60–90 minutes',
  },
  {
    id: 3, name: 'Powder Massage (Udwarthanam)', category: 'Body Therapies', signature: false,
    desc: 'A unique dry massage using herbal powders rubbed vigorously against the grain of body hair. Stimulates fat metabolism, reduces Kapha accumulation, exfoliates skin, and improves texture. A key component of weight management programmes.',
    benefits: 'Stimulates skin, reduces fat deposits, improves texture.',
    duration: '45–60 minutes',
  },
  {
    id: 4, name: 'Thermo Massage (Kizhi)', category: 'Body Therapies', signature: false,
    desc: 'Warm herbal poultices (bundles of medicinal herbs tied in cloth and heated) are rhythmically applied to the body. Deep heat penetrates joints and muscles to relieve pain, reduce inflammation, and promote healing.',
    benefits: 'Uses heat to soothe and relax muscles, relieves joint pain.',
    duration: '60–75 minutes',
  },
  {
    id: 5, name: 'Sincone Massage', category: 'Body Therapies', signature: false,
    desc: 'A therapeutic massage technique that combines modern and traditional elements to rejuvenate the body, stimulate circulatory function, and promote lymphatic detoxification.',
    benefits: 'Rejuvenates body, stimulates circulation, detoxifies.',
    duration: '60 minutes',
  },
  {
    id: 6, name: 'Sharwanga Dhara', category: 'Body Therapies', signature: false,
    desc: 'Warm medicated oil or herbal decoction is poured rhythmically over the entire body in a continuous stream, combined with gentle massage. Profoundly relieves joint pain, reduces stress, and deeply rejuvenates.',
    benefits: 'Relieves joint pain, reduces stress, rejuvenates deeply.',
    duration: '60–75 minutes',
  },
  {
    id: 7, name: 'Shirodhara', category: 'Head & Neural', signature: true,
    desc: 'The most iconic of all Ayurvedic treatments. A gentle, continuous stream of warm medicated oil flows onto the forehead at the "third eye" point for an extended period. The effect on the nervous system is extraordinary — guests frequently enter a state of profound calm that resembles meditation.',
    benefits: 'Calms the mind, alleviates chronic stress, treats insomnia, relieves anxiety and depression, enhances mental clarity.',
    duration: '45–60 minutes',
  },
  {
    id: 8, name: 'Shirovasti', category: 'Head & Neural', signature: true,
    desc: 'A cap-like structure is placed on the head, filled with warm medicated oil that remains in contact with the scalp for a therapeutic period. Treats neurological conditions, facial paralysis, and severe headaches.',
    benefits: 'Treats neural ailments, enhances mental clarity.',
    duration: '30–45 minutes',
  },
  {
    id: 9, name: 'Head Massage', category: 'Head & Neural', signature: false,
    desc: 'Targeted massage of the scalp, neck, and upper shoulders using medicated herbal oils. Stimulates hair follicles, improves scalp circulation, relieves tension headaches, and promotes hair growth.',
    benefits: 'Eases headaches, stimulates scalp, fosters hair growth.',
    duration: '30–45 minutes',
  },
  {
    id: 10, name: 'Face Massage', category: 'Head & Neural', signature: false,
    desc: 'A gentle, rejuvenating facial massage using Ayurvedic herbal face oils. Stimulates facial circulation, reduces puffiness, relieves sinus congestion, and enhances natural radiance.',
    benefits: 'Enhances beauty, reduces stress and sinus congestion.',
    duration: '30 minutes',
  },
  {
    id: 11, name: 'Foot Massage (Pada Abhyanga)', category: 'Head & Neural', signature: false,
    desc: 'In Ayurveda, the feet are considered a map of the entire body. Medicated oil massage of the feet and lower legs promotes relaxation, relieves foot pain, boosts circulation, and supports restful sleep.',
    benefits: 'Promotes relaxation, relieves pain, boosts circulation.',
    duration: '30–45 minutes',
  },
  {
    id: 12, name: 'Panchakarma', category: 'Herbal & Detox', signature: true,
    desc: 'The supreme purification therapy of Ayurveda — a systematic five-fold detoxification process that eliminates deep-seated toxins (Ama) from the body\'s tissues. Always conducted under physician supervision. The five classical procedures include Vamana, Virechana, Basti, Nasyam, and Raktamokshana.',
    benefits: 'Detoxifies body at cellular level, enhances vitality, treats chronic disease, resets constitution, profound rejuvenation.',
    duration: 'Programme-based (minimum 7 nights)',
  },
  {
    id: 13, name: 'Herbal Inhalation (Nasyam)', category: 'Herbal & Detox', signature: false,
    desc: 'Medicated herbal oils or herbal steam are administered through the nasal passages — the "gateway to the head." Treats chronic sinusitis, migraines, nasal congestion, and boosts mental alertness and sensory clarity.',
    benefits: 'Treats respiratory conditions, boosts mental alertness.',
    duration: '20–30 minutes',
  },
  {
    id: 14, name: 'Steam Bath (Swedana)', category: 'Herbal & Detox', signature: false,
    desc: 'Full-body herbal steam bath using a medicated herbal decoction. Opens pores, promotes sweating to expel toxins, deeply cleanses the skin, relaxes muscles, and prepares the body for subsequent oil treatments.',
    benefits: 'Cleanses skin, relaxes muscles, detoxifies the body.',
    duration: '20–30 minutes',
  },
  {
    id: 15, name: 'Herbal Bath', category: 'Herbal & Detox', signature: false,
    desc: 'A full immersion bath prepared with a therapeutic blend of Ayurvedic herbs, flowers, and medicated ingredients. Cleanses the body energetically and physically, relieves stress, and enhances skin health.',
    benefits: 'Cleanses body, relieves stress, enhances skin health.',
    duration: '30–45 minutes',
  },
  {
    id: 16, name: 'Special Herbals', category: 'Herbal & Detox', signature: false,
    desc: 'Tailored internal herbal formulations — decoctions, churnas, medicated ghees, and herbal tablets — prescribed by Dr. Nalaka based on your diagnosis to support long-term health and longevity.',
    benefits: 'Tailored herbal remedies for health and longevity.',
    duration: 'Ongoing (as prescribed)',
  },
  {
    id: 17, name: 'Body Scrub', category: 'Beauty & Skin', signature: false,
    desc: 'A therapeutic full-body exfoliation using natural Ayurvedic scrub ingredients including herbal powders, turmeric, sandalwood, and nourishing oils. Removes dead skin cells, improves circulation, and reveals radiant skin.',
    benefits: 'Exfoliates, rejuvenates skin, improves circulation.',
    duration: '45–60 minutes',
  },
  {
    id: 18, name: 'Flower Bath', category: 'Beauty & Skin', signature: false,
    desc: 'A luxurious bath drawn with fresh tropical flowers and aromatic Ayurvedic herbs. Uplifts the spirit, nourishes and beautifies the skin, and promotes deep relaxation.',
    benefits: 'Uplifts spirits, beautifies skin, promotes relaxation.',
    duration: '30–45 minutes',
  },
  {
    id: 19, name: 'Yoga', category: 'Mind & Spirit', signature: false,
    desc: 'Daily yoga sessions conducted in our open-air yoga pavilion overlooking the Bentota River. Suitable for all levels — from complete beginners to advanced practitioners. Combines Hatha and Vinyasa approaches with pranayama (breathwork).',
    benefits: 'Improves health, enhances flexibility and mental peace.',
    duration: '60–90 minutes (daily)',
  },
  {
    id: 20, name: 'Meditation', category: 'Mind & Spirit', signature: false,
    desc: 'Guided meditation sessions using classical techniques including mindfulness, trataka (candle gazing), nada yoga (sound meditation), and yoga nidra (yogic sleep). Conducive to the deep stillness that the riverbank naturally invites.',
    benefits: 'Achieves clarity, calms emotions, enhances well-being.',
    duration: '30–60 minutes',
  },
  {
    id: 21, name: 'Monk Horoscope (Jyotish Consultation)', category: 'Mind & Spirit', signature: false,
    desc: 'A traditional Vedic astrology consultation using your birth chart to provide guidance on life decisions, timing, health tendencies, and spiritual path. Offered as a unique complement to the healing experience.',
    benefits: 'Guides life decisions through astrological wisdom.',
    duration: '45–60 minutes',
  },
];

const categories: Category[] = ['All', 'Body Therapies', 'Head & Neural', 'Herbal & Detox', 'Mind & Spirit', 'Beauty & Skin'];

export default function TreatmentsPage() {
  const [active, setActive] = useState<Category>('All');
  const filtered = [...(active === 'All' ? treatments : treatments.filter(t => t.category === active))]
    .sort((a, b) => (b.signature ? 1 : 0) - (a.signature ? 1 : 0));

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #2C2016 0%, #1A1410 55%, #4A6670 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.38)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">THE HEALING ARTS</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px', marginBottom: '20px' }}>
              30+ Treatments. Five Thousand Years of Wisdom.
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '17px', maxWidth: '560px', lineHeight: 1.75 }}>
              All treatments use organically sourced ingredients. Every protocol is supervised by our resident Ayurvedic physician.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: 'var(--deep)', padding: '64px 0' }}>
        <div className="container-rv">
          <FadeIn>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '20px', color: 'var(--gold-light)', lineHeight: 1.7, maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
              &ldquo;At River View Villas, we practice Ayurveda as it was intended — not as a spa menu, but as a medical system. Every treatment is prescribed after pulse diagnosis (Nadi Pariksha).&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="section-pad">
        <div className="container-rv">
          {/* Category filter */}
          <FadeIn>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '56px', borderBottom: '1px solid rgba(201,169,110,0.15)', paddingBottom: '0' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: '12px 20px',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    borderBottom: active === cat ? '2px solid var(--gold)' : '2px solid transparent',
                    color: active === cat ? 'var(--gold)' : 'var(--text-light)',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    marginBottom: '-1px',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px' }}>
            {filtered.map((t, i) => (
              <FadeIn key={t.id} delay={(i % 3) * 0.08}>
                <div className="treatment-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                    {t.signature && <span className="badge-gold" style={{ fontSize: '10px', padding: '4px 10px' }}>Signature</span>}
                    <span style={{ color: 'var(--text-light)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif', alignSelf: 'center' }}>{t.category}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '10px', lineHeight: 1.25 }}>
                    {t.name}
                  </h3>
                  <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{t.desc}</p>
                  <div style={{ borderTop: '1px solid rgba(201,169,110,0.12)', paddingTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <p style={{ color: 'var(--sage)', fontSize: '12px', lineHeight: 1.6 }}><strong style={{ fontWeight: 500 }}>Benefits:</strong> {t.benefits}</p>
                    <p style={{ color: 'var(--text-light)', fontSize: '12px', letterSpacing: '0.05em' }}><strong style={{ fontWeight: 500 }}>Duration:</strong> {t.duration}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--earth)', padding: '96px 0' }}>
        <div className="container-rv" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">BEGIN YOUR JOURNEY</span>
            <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '16px' }}>
              Ready to Begin Your Treatment Journey?
            </h2>
            <p style={{ color: 'rgba(247,243,238,0.62)', fontSize: '16px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.75 }}>
              All treatments are prescribed after consultation with Dr. Nalaka. The easiest way to experience our treatments is through one of our all-inclusive packages.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/packages" className="btn-primary">
                View Our Packages <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
