'use client';
import { useState } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

type DurationFilter = 'All' | '3' | '5' | '7' | '14' | '21';

const packages = [
  // 3-night
  {
    id: 1, duration: 3, name: 'Hibiscus Vitality Package', tagline: 'Quick Body Detox & Mind Refresh',
    desc: 'The perfect introduction to Ayurvedic healing. In just three transformative nights, experience targeted treatments to flush toxins, relieve stress, and reawaken your body\'s natural vitality.',
    ideal: 'First-time visitors, weekend wellness seekers',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854188',
    popular: false, signature: false,
  },
  {
    id: 2, duration: 3, name: 'Araliya Healing Package', tagline: 'Calming and Balancing Ayurvedic Experience',
    desc: 'Named for the frangipani flower that blooms across our gardens, the Araliya package gently restores doshic balance through calming therapies, herbal treatments, and meditative practices.',
    ideal: 'Stress relief, anxiety management, inner balance',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854176',
    popular: false, signature: false,
  },
  {
    id: 3, duration: 3, name: 'Lotus Wellness Package', tagline: 'Rejuvenating Detox & Full-Body Reset',
    desc: 'A comprehensive 3-night programme combining detoxification, nourishing body therapies, and daily yoga — designed to leave you feeling completely renewed.',
    ideal: 'General detox, energy restoration, full reset',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854158',
    popular: true, signature: false,
  },
  // 5-night
  {
    id: 4, duration: 5, name: 'Lotus Weight Loss Package', tagline: 'Ayurvedic Weight Management & Detox',
    desc: 'Combines targeted Ayurvedic fat-reduction therapies with a personalised dietary programme and metabolism-boosting treatments. Results you feel — and see.',
    ideal: 'Weight management, metabolic health',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854674',
    popular: false, signature: false,
  },
  {
    id: 5, duration: 5, name: 'Hibiscus Pain Relief Package', tagline: 'Relieve Pain Naturally with Ayurveda',
    desc: 'Targeted treatments for musculoskeletal pain, joint stiffness, and inflammation using warm herbal poultices, medicated oils, and Panchakarma-based protocols.',
    ideal: 'Back pain, joint pain, muscle tension',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854678',
    popular: false, signature: false,
  },
  {
    id: 6, duration: 5, name: 'Araliya Anti-Stress & Depression Relief Package', tagline: 'Restore Emotional & Mental Balance',
    desc: 'A deeply restorative programme for the overworked mind. Shirodhara, herbal treatments, meditation, and Ayurvedic counselling combine to restore emotional equilibrium.',
    ideal: 'Anxiety, burnout, low mood, emotional exhaustion',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854680',
    popular: false, signature: false,
  },
  // 7-night
  {
    id: 7, duration: 7, name: 'Hibiscus Pain Relief Package', tagline: 'Chronic Pain Relief Through Panchakarma',
    desc: 'An extended pain management programme using Panchakarma\'s detoxification techniques to address chronic pain at its root cause — not just the symptom.',
    ideal: 'Chronic back pain, arthritis, repetitive strain',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854682',
    popular: false, signature: false,
  },
  {
    id: 8, duration: 7, name: 'Araliya Anti-Stress, Insomnia & Depression Relief Package', tagline: 'Restful Mind and Restored Sleep Naturally',
    desc: 'Seven nights of dedicated nervous system restoration. Combines Shirodhara, Nasyam, yoga nidra, herbal medicine, and counselling to rebuild healthy sleep and emotional resilience.',
    ideal: 'Insomnia, chronic stress, depression, anxiety',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854684',
    popular: true, signature: false,
  },
  {
    id: 9, duration: 7, name: 'Lotus Weight Loss Package', tagline: 'Rebalance Metabolism with Ayurvedic Detox',
    desc: 'Seven nights of systematic Ayurvedic weight management — combining Udwarthanam (powder massage), dietary therapy, herbal medicine, and yoga to restore healthy metabolism.',
    ideal: 'Weight loss, metabolic syndrome, sluggish digestion',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/854686',
    popular: false, signature: false,
  },
  // 14-night
  {
    id: 10, duration: 14, name: 'Panchakarma Detox & Rejuvenation Package', tagline: 'Deep Ayurvedic Detox & Healing',
    desc: 'The gold standard of Ayurvedic healing. Panchakarma — the five-fold purification therapy — is the most comprehensive detox known to ancient medicine. Over 14 nights, Dr. Nalaka guides you through a complete systemic cleanse that removes deep-seated toxins, resets your constitution, and leaves you profoundly renewed.',
    ideal: 'Anyone seeking genuine, lasting transformation',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/876646',
    popular: true, signature: false,
  },
  {
    id: 11, duration: 14, name: 'Ayurvedic Diabetes Management Package', tagline: 'Balance Sugar Levels with Natural Therapy',
    desc: 'A comprehensive programme targeting blood sugar regulation through Panchakarma detox, herbal medicine, dietary management, and lifestyle guidance rooted in Ayurvedic science.',
    ideal: 'Type 2 diabetes management, pre-diabetes, insulin resistance',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860456',
    popular: false, signature: false,
  },
  {
    id: 12, duration: 14, name: 'Ayurvedic Treatment for Tinnitus', tagline: 'Ayurvedic Healing for Ear & Nerve Health',
    desc: 'A specialised programme addressing tinnitus through Karna Purana (ear oil therapy), Nasyam, Shirodhara, and systemic detoxification to calm the nervous system and reduce ear noise.',
    ideal: 'Tinnitus, ear ringing, nerve sensitivity',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860454',
    popular: false, signature: false,
  },
  {
    id: 13, duration: 14, name: 'High Blood Pressure Management Package', tagline: 'Natural Cardiac Health Restoration',
    desc: 'Ayurvedic treatment for hypertension through stress reduction therapies, herbal cardiac tonics, Shirodhara, and dietary protocols designed to reduce blood pressure naturally.',
    ideal: 'Hypertension, cardiac wellness, stress-related BP',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860452',
    popular: false, signature: false,
  },
  {
    id: 14, duration: 14, name: 'Cholesterol Management Package', tagline: 'Herbal Therapy to Cleanse Arteries',
    desc: 'Combines Panchakarma detoxification with herbal lipid management, dietary therapy, and daily yoga to reduce cholesterol and improve cardiovascular health.',
    ideal: 'High cholesterol, cardiovascular risk, metabolic health',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860450',
    popular: false, signature: false,
  },
  {
    id: 15, duration: 14, name: 'Weight Loss Program', tagline: 'Comprehensive Ayurvedic Fat-Burning Regimen',
    desc: 'A medically supervised Ayurvedic weight reduction programme including Udwarthanam, Panchakarma, herbal metabolism boosters, personalised diet, and daily yoga/exercise protocols.',
    ideal: 'Significant weight reduction, obesity, metabolic disorder',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860448',
    popular: false, signature: false,
  },
  {
    id: 16, duration: 14, name: "Paralysis / Parkinson's Recovery Package", tagline: 'Neural & Muscular Rehabilitation Program',
    desc: 'An intensive programme targeting neurological conditions using Pizhichil (oil bath), Navarakizhi (rice poultice), Panchakarma, and herbal neuro-tonics to restore motor function and nerve health.',
    ideal: "Stroke recovery, Parkinson's, partial paralysis, nerve damage",
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860446',
    popular: false, signature: false,
  },
  {
    id: 17, duration: 14, name: 'Arthritis Treatment Package', tagline: 'Joint Pain Relief and Mobility Restoration',
    desc: 'A targeted programme for arthritis using Janu Basti, Abhyanga, Kizhi (herbal poultice), anti-inflammatory herbal medicine, and dietary therapy to reduce inflammation and restore joint mobility.',
    ideal: 'Rheumatoid arthritis, osteoarthritis, joint stiffness',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860444',
    popular: false, signature: false,
  },
  {
    id: 18, duration: 14, name: 'Skin Healing Program: Psoriasis & Neurodermatitis', tagline: 'Herbal & Detox-Based Skin Healing',
    desc: 'A deep dermatological healing programme using Panchakarma blood purification, herbal pastes, medicated ghee, and strict Ayurvedic diet to address psoriasis and chronic skin conditions at their root.',
    ideal: 'Psoriasis, eczema, neurodermatitis, chronic skin issues',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860458',
    popular: false, signature: false,
  },
  {
    id: 19, duration: 14, name: 'Migraine Relief Package', tagline: 'Root Cause Healing for Chronic Migraines',
    desc: 'Addresses the underlying Pitta and Vata imbalances that cause chronic migraines through Shirodhara, Nasyam, herbal treatments, dietary protocol, and stress management therapies.',
    ideal: 'Chronic migraine, cluster headaches, tension headaches',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860442',
    popular: false, signature: false,
  },
  {
    id: 20, duration: 14, name: 'Depression Relief Package', tagline: 'Emotional Balance Through Ayurveda',
    desc: 'A holistic programme for depression and emotional imbalance using Shirodhara, Abhyanga, Ayurvedic counselling, meditation, herbal antidepressants, and personalised dietary therapy.',
    ideal: 'Depression, emotional imbalance, grief, PTSD',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860530',
    popular: false, signature: false,
  },
  // 21-night
  {
    id: 21, duration: 21, name: 'Panchakarma Deep Healing & Transformation Package', tagline: 'Full-Body Detox & Spiritual Renewal',
    desc: 'The ultimate Ayurvedic experience. Twenty-one nights is the classical duration prescribed in ancient Ayurvedic texts for complete systemic transformation. This is not a holiday. This is a rebirth. Under Dr. Nalaka\'s supervision, you will emerge from this programme as a measurably different person — physically, mentally, and spiritually.',
    ideal: 'Those ready for total transformation',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/876648',
    popular: false, signature: true,
  },
  {
    id: 22, duration: 21, name: 'Ayurvedic Diabetes Management Package', tagline: 'Long-Term Natural Blood Sugar Control',
    desc: 'A 21-night comprehensive programme for lasting blood sugar management through Ayurvedic protocols.',
    ideal: 'Long-term diabetes management',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860992',
    popular: false, signature: false,
  },
  {
    id: 23, duration: 21, name: 'Skin Healing Program', tagline: 'Intensive Healing for Chronic Skin Issues',
    desc: 'Extended skin healing programme for deep-seated dermatological conditions.',
    ideal: 'Chronic psoriasis, eczema, severe skin conditions',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860458',
    popular: false, signature: false,
  },
  {
    id: 24, duration: 21, name: 'High Blood Pressure Management Package', tagline: 'Herbal Detox for Heart & Circulation Health',
    desc: '21-night comprehensive cardiac wellness programme using Ayurvedic protocols.',
    ideal: 'Chronic hypertension, cardiovascular wellness',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860988',
    popular: false, signature: false,
  },
  {
    id: 25, duration: 21, name: 'Tinnitus Treatment Package', tagline: 'Restorative Therapy for Ear Health',
    desc: 'Extended Karna Purana and Nasyam therapy for lasting tinnitus relief.',
    ideal: 'Chronic tinnitus, ear health, neural sensitivity',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860990',
    popular: false, signature: false,
  },
  {
    id: 26, duration: 21, name: 'Cholesterol Management Package', tagline: 'Cleanse & Strengthen the Cardiovascular System',
    desc: 'Deep Panchakarma-based lipid management over 21 nights for lasting cardiovascular health.',
    ideal: 'Severe hypercholesterolaemia, cardiovascular risk',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860603',
    popular: false, signature: false,
  },
  {
    id: 27, duration: 21, name: 'Weight Loss Program', tagline: 'Comprehensive Slimming with Ayurveda',
    desc: 'The most comprehensive Ayurvedic weight reduction programme available.',
    ideal: 'Significant weight loss, obesity, metabolic transformation',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860601',
    popular: false, signature: false,
  },
  {
    id: 28, duration: 21, name: "Paralysis / Parkinson's Recovery Package", tagline: 'Long-Term Nerve Strengthening & Healing',
    desc: 'Extended neurological rehabilitation using classical Panchakarma and Rasayana therapies.',
    ideal: 'Stroke recovery, advanced neurological conditions',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860599',
    popular: false, signature: false,
  },
  {
    id: 29, duration: 21, name: 'Arthritis Treatment Package', tagline: 'Joint Rejuvenation & Flexibility Restoration',
    desc: '21-night intensive joint healing programme for chronic arthritis.',
    ideal: 'Chronic arthritis, severe joint conditions',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860597',
    popular: false, signature: false,
  },
  {
    id: 30, duration: 21, name: 'Migraine Relief Package', tagline: 'Comprehensive Healing for Chronic Migraines',
    desc: 'Extended Shirodhara and Nasyam therapy for deep-rooted migraine resolution.',
    ideal: 'Chronic migraine, severe headache disorders',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860596',
    popular: false, signature: false,
  },
  {
    id: 31, duration: 21, name: 'Depression Relief Package', tagline: 'Emotional & Mental Balance Transformation',
    desc: '21-night comprehensive mental wellness programme for deep emotional healing.',
    ideal: 'Severe depression, PTSD, chronic emotional imbalance',
    link: 'https://booking.profitroom.com/en/riverviewvillas/details/offer/860530',
    popular: false, signature: false,
  },
];

const inclusions = ['Doctor consultation on arrival', 'Full board (Ayurvedic meals)', 'All treatments included', '50% deposit to book', 'Free cancellation'];

export default function PackagesPage() {
  const [filter, setFilter] = useState<DurationFilter>('All');
  const filtered = filter === 'All' ? packages : packages.filter(p => p.duration === parseInt(filter));
  const durations: DurationFilter[] = ['All', '3', '5', '7', '14', '21'];

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #2C2016 0%, #1A1410 60%, #354024 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.4)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">CURATED HEALING JOURNEYS</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px', marginBottom: '20px' }}>
              Your Transformation Begins With Choosing Your Path
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '16px', maxWidth: '520px', lineHeight: 1.75 }}>
              Every package is crafted by Dr. Nalaka Samadhi based on traditional Ayurvedic protocols. Full board included. Doctor-supervised throughout.
            </p>
          </FadeIn>
        </div>
        {/* Trust bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, borderTop: '1px solid rgba(201,169,110,0.2)', background: 'rgba(26,20,16,0.55)', backdropFilter: 'blur(8px)', padding: '16px 0' }}>
          <div className="container-rv">
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {inclusions.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={12} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ color: 'rgba(247,243,238,0.6)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + PACKAGES */}
      <section className="section-pad">
        <div className="container-rv">
          {/* Filter tabs */}
          <FadeIn>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '56px', borderBottom: '1px solid rgba(201,169,110,0.15)', paddingBottom: '0' }}>
              {durations.map(d => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  style={{
                    padding: '12px 24px',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    borderBottom: filter === d ? '2px solid var(--gold)' : '2px solid transparent',
                    color: filter === d ? 'var(--gold)' : 'var(--text-light)',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    marginBottom: '-1px',
                  }}
                >
                  {d === 'All' ? 'All Packages' : `${d} Nights`}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Package cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {filtered.map((pkg, i) => (
              <FadeIn key={pkg.id} delay={(i % 3) * 0.1}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  {/* Card header */}
                  <div style={{ background: 'linear-gradient(135deg, var(--deep) 0%, var(--earth) 100%)', padding: '28px 28px 24px', position: 'relative' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      <span className="badge-duration">{pkg.duration} Nights</span>
                      {pkg.popular && <span className="badge-gold">Most Popular</span>}
                      {pkg.signature && <span className="badge-dark">Signature</span>}
                    </div>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 600, color: 'var(--white)', lineHeight: 1.25, marginBottom: '8px' }}>
                      {pkg.name}
                    </h3>
                    <p style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '0.08em', fontFamily: 'Jost, sans-serif', fontWeight: 400 }}>{pkg.tagline}</p>
                  </div>
                  {/* Card body */}
                  <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.75, marginBottom: '16px', flexGrow: 1 }}>{pkg.desc}</p>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
                      <span style={{ color: 'var(--text-light)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Jost, sans-serif', fontWeight: 500 }}>Ideal for:</span>
                      <span style={{ color: 'var(--text-mid)', fontSize: '13px', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif' }}>{pkg.ideal}</span>
                    </div>
                    {/* Inclusions */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid rgba(201,169,110,0.12)', marginBottom: '24px' }}>
                      {['Full Board', 'Free Cancellation', '50% Deposit'].map(inc => (
                        <div key={inc} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CheckCircle2 size={12} strokeWidth={1.5} style={{ color: 'var(--sage)' }} />
                          <span style={{ color: 'var(--text-light)', fontSize: '11px' }}>{inc}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <a href={pkg.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '12px 20px', fontSize: '12px', flexGrow: 1, justifyContent: 'center' }}>
                        Reserve This Package
                      </a>
                      <Link href="/contact" className="btn-ghost-dark" style={{ padding: '11px 20px', fontSize: '12px' }}>
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section style={{ background: 'var(--deep)', padding: '96px 0' }}>
        <div className="container-rv" style={{ textAlign: 'center' }}>
          <FadeIn>
            <span className="eyebrow">FREE CONSULTATION</span>
            <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-headline" style={{ color: 'var(--white)', marginBottom: '16px' }}>
              Not Sure Which Package Is Right for You?
            </h2>
            <p style={{ color: 'rgba(247,243,238,0.62)', fontSize: '16px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.75 }}>
              Our team — guided by Dr. Nalaka — will assess your health goals and recommend the perfect programme for your body and timeline.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Free Consultation <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
