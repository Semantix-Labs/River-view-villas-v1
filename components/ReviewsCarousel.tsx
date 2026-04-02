'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Reshma D.',
    country: 'United Kingdom',
    text: 'I feel reborn. Dr. Nalaka and the therapists are highly professional. The treatments truly help. I came for two weeks and left with a new start.',
  },
  {
    name: 'Judy M.',
    country: 'Australia',
    text: 'The doctor and therapists made our intensive treatment a most memorable experience. We loved the serenity and caring nature.',
  },
  {
    name: 'RobynK309',
    country: 'New Zealand',
    text: 'When you arrive, you enter an oasis — calm and beautiful, set on the river. The treatment rooms were immaculate and the massage sublime.',
  },
  {
    name: 'Margaret F.',
    country: 'Ireland',
    text: "A beautiful place on the riverbank with immaculately kept gardens. There are surprises at every turn — including a doctor's office built to look like the roots of a bo tree.",
  },
  {
    name: 'Sightsee336020',
    country: 'Germany',
    text: 'Amazing place with the most peaceful view. Very friendly staff and nice food. Really amazed by the river view and great value for money.',
  },
];

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
};

export default function ReviewsCarousel() {
  const [[index, dir], setPage] = useState([0, 0]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const paginate = useCallback((newDir: number) => {
    setPage(([prev]) => {
      const next = (prev + newDir + reviews.length) % reviews.length;
      return [next, newDir];
    });
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => paginate(1), 5000);
  }, [paginate]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, resetTimer]);

  const go = (newDir: number) => {
    paginate(newDir);
    resetTimer();
  };

  const review = reviews[index];

  return (
    <section className="section-pad" style={{ background: 'var(--cream)', overflow: 'hidden' }}>
      <div className="container-rv">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="eyebrow">VOICES OF TRANSFORMATION</span>
          <span className="gold-rule" style={{ margin: '12px auto 20px' }} />
          <h2 className="section-headline">What Our Guests Say</h2>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          {/* Slide */}
          <div style={{ minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{ width: '100%', textAlign: 'center' }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginBottom: '24px' }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(20px, 2.5vw, 26px)',
                  lineHeight: 1.6,
                  color: 'var(--text-dark)',
                  marginBottom: '28px',
                  maxWidth: '640px',
                  margin: '0 auto 28px',
                }}>
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <p style={{
                    fontFamily: 'Jost, sans-serif',
                    fontWeight: 500,
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text-dark)',
                  }}>
                    {review.name}
                  </p>
                  <p style={{ color: 'var(--text-light)', fontSize: '12px', letterSpacing: '0.08em' }}>
                    {review.country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Gold rule below quote */}
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)', opacity: 0.4, margin: '32px auto 40px' }} />

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(201,169,110,0.35)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--deep)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setPage([i, i > index ? 1 : -1]); resetTimer(); }}
                  aria-label={`Go to review ${i + 1}`}
                  style={{
                    width: i === index ? '24px' : '6px',
                    height: '6px',
                    borderRadius: '3px',
                    background: i === index ? 'var(--gold)' : 'rgba(201,169,110,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Next review"
              style={{
                width: '44px', height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(201,169,110,0.35)',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--deep)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* TripAdvisor label */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ color: 'var(--text-light)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Verified TripAdvisor Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
