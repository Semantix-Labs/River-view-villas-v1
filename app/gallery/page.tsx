'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';

type GalleryFilter = 'All' | 'Villas & Rooms' | 'Treatments' | 'Nature & Gardens' | 'Food & Dining' | 'Yoga & Meditation';

// Gallery items with CSS gradient backgrounds simulating imagery
const galleryItems: { category: GalleryFilter; label: string; bg: string; aspect: string }[] = [
  { category: 'Villas & Rooms', label: 'Carpe Diem Villa', bg: 'linear-gradient(145deg, #4A6670 0%, #1A2810 100%)', aspect: '4/3' },
  { category: 'Treatments', label: 'Shirodhara', bg: 'linear-gradient(145deg, #C9A96E 0%, #2C2016 100%)', aspect: '3/4' },
  { category: 'Nature & Gardens', label: 'Bentota River at Dawn', bg: 'linear-gradient(145deg, #354024 0%, #4A6670 100%)', aspect: '4/3' },
  { category: 'Villas & Rooms', label: 'Lotus Mansion', bg: 'linear-gradient(145deg, #2C2016 0%, #354024 100%)', aspect: '3/4' },
  { category: 'Treatments', label: 'Abhyanga Massage', bg: 'linear-gradient(145deg, #7A8C6E 0%, #1A1410 100%)', aspect: '1/1' },
  { category: 'Food & Dining', label: 'Ayurvedic Breakfast', bg: 'linear-gradient(145deg, #C9A96E 0%, #7A8C6E 100%)', aspect: '4/3' },
  { category: 'Yoga & Meditation', label: 'Morning Yoga Pavilion', bg: 'linear-gradient(145deg, #4A6670 0%, #354024 100%)', aspect: '4/3' },
  { category: 'Nature & Gardens', label: 'Herbal Garden', bg: 'linear-gradient(145deg, #354024 0%, #1A2810 100%)', aspect: '3/4' },
  { category: 'Treatments', label: 'Panchakarma Treatment', bg: 'linear-gradient(145deg, #1A1410 0%, #C9A96E 100%)', aspect: '1/1' },
  { category: 'Villas & Rooms', label: 'Villa Araliya Garden View', bg: 'linear-gradient(145deg, #7A8C6E 0%, #2C2016 100%)', aspect: '4/3' },
  { category: 'Food & Dining', label: 'Herbal Tea Ritual', bg: 'linear-gradient(145deg, #C9A96E 0%, #2C2016 100%)', aspect: '3/4' },
  { category: 'Yoga & Meditation', label: 'River Meditation', bg: 'linear-gradient(145deg, #4A6670 0%, #1A1410 100%)', aspect: '4/3' },
  { category: 'Nature & Gardens', label: 'Tropical Garden Path', bg: 'linear-gradient(145deg, #354024 0%, #7A8C6E 100%)', aspect: '1/1' },
  { category: 'Villas & Rooms', label: 'Villa Orchid', bg: 'linear-gradient(145deg, #1A2810 0%, #4A6670 100%)', aspect: '4/3' },
  { category: 'Treatments', label: 'Herbal Steam Bath', bg: 'linear-gradient(145deg, #2C2016 0%, #7A8C6E 100%)', aspect: '3/4' },
  { category: 'Food & Dining', label: 'Ayurvedic Dinner', bg: 'linear-gradient(145deg, #7A8C6E 0%, #C9A96E 100%)', aspect: '4/3' },
];

const filters: GalleryFilter[] = ['All', 'Villas & Rooms', 'Treatments', 'Nature & Gardens', 'Food & Dining', 'Yoga & Meditation'];

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryFilter>('All');
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.category === active);

  return (
    <div style={{ background: 'var(--deep)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #1A2810 0%, #2C2016 60%, #4A6670 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.45)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">THE VISUAL STORY</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px', marginBottom: '20px' }}>
              A Glimpse into River View Villas
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '17px', maxWidth: '520px', lineHeight: 1.75 }}>
              Every image tells the story of what awaits you — the serenity, the healing, the river.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FILTER + GALLERY */}
      <section className="section-pad" style={{ background: 'var(--deep)' }}>
        <div className="container-rv">
          {/* Filter */}
          <FadeIn>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '56px', borderBottom: '1px solid rgba(201,169,110,0.12)', paddingBottom: '0' }}>
              {filters.map(f => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: '12px 20px',
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 500,
                    fontSize: '11px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    borderBottom: active === f ? '2px solid var(--gold)' : '2px solid transparent',
                    color: active === f ? 'var(--gold)' : 'rgba(247,243,238,0.45)',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    marginBottom: '-1px',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Masonry-style grid */}
          <div style={{ columns: '3', columnGap: '16px' }}>
            {filtered.map((item, i) => (
              <FadeIn key={i} delay={(i % 3) * 0.06}>
                <div
                  style={{
                    breakInside: 'avoid',
                    marginBottom: '16px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    background: item.bg,
                    aspectRatio: item.aspect,
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                >
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px', background: 'linear-gradient(to top, rgba(26,20,16,0.7) 0%, transparent 100%)' }}>
                    <p style={{ color: 'var(--white)', fontSize: '13px', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>{item.label}</p>
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
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '22px', color: 'var(--gold-light)', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.6 }}>
              &ldquo;Words and images can only do so much. The only way to truly understand River View Villas is to experience it.&rdquo;
            </p>
            <a href="https://booking.profitroom.com/en/riverviewvillas/home" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Reserve Your Stay <ArrowRight size={16} strokeWidth={1.5} />
            </a>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
