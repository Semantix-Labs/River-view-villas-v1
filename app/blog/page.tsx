'use client';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'what-is-panchakarma',
    title: 'What Is Panchakarma? The Complete Guide to Ayurveda\'s Master Detox',
    excerpt: 'Panchakarma is the most comprehensive detoxification system known to ancient medicine. Here is everything you need to know before you begin your journey.',
    category: 'Treatments',
    readTime: '8 min read',
    accent: 'linear-gradient(135deg, #2C2016 0%, #354024 100%)',
  },
  {
    slug: 'shirodhara-insomnia',
    title: 'How Shirodhara Cured My Insomnia: A Guest\'s Story',
    excerpt: 'After three years of chronic insomnia, one guest found peace through a treatment she had never heard of. Her story is a testament to the power of Ayurvedic healing.',
    category: 'Guest Stories',
    readTime: '5 min read',
    accent: 'linear-gradient(135deg, #4A6670 0%, #1A1410 100%)',
  },
  {
    slug: 'ayurveda-vs-conventional',
    title: 'Ayurveda vs. Conventional Medicine: What\'s the Difference?',
    excerpt: 'Understanding the distinction between Ayurvedic and conventional medicine is key to making informed decisions about your health. Dr. Nalaka explains.',
    category: 'Education',
    readTime: '7 min read',
    accent: 'linear-gradient(135deg, #7A8C6E 0%, #2C2016 100%)',
  },
  {
    slug: 'three-doshas',
    title: 'The Three Doshas Explained: Vata, Pitta, and Kapha',
    excerpt: 'The foundation of Ayurvedic medicine lies in understanding your unique constitution. Learn how the three doshas shape your health, personality, and healing needs.',
    category: 'Education',
    readTime: '10 min read',
    accent: 'linear-gradient(135deg, #C9A96E 0%, #1A2810 100%)',
  },
  {
    slug: 'sri-lanka-ayurveda-destination',
    title: 'Why Sri Lanka Is the World\'s Best Destination for Ayurvedic Retreats',
    excerpt: 'Sri Lanka\'s climate, biodiversity, and traditional medical heritage make it uniquely suited for authentic Ayurvedic healing. Here is why it stands apart.',
    category: 'Travel',
    readTime: '6 min read',
    accent: 'linear-gradient(135deg, #354024 0%, #4A6670 100%)',
  },
  {
    slug: 'first-ayurvedic-retreat',
    title: 'What to Expect on Your First Ayurvedic Retreat',
    excerpt: 'Arriving at your first Ayurvedic retreat can feel both exciting and uncertain. This guide walks you through everything — from pulse diagnosis to post-retreat protocols.',
    category: 'Travel',
    readTime: '9 min read',
    accent: 'linear-gradient(135deg, #1A1410 0%, #7A8C6E 100%)',
  },
  {
    slug: 'arthritis-natural-approach',
    title: 'Ayurvedic Treatments for Arthritis: A Natural Approach',
    excerpt: 'Arthritis affects millions globally. Ayurveda offers a time-tested, side-effect-free approach to reducing inflammation and restoring joint mobility.',
    category: 'Health',
    readTime: '7 min read',
    accent: 'linear-gradient(135deg, #2C2016 0%, #C9A96E 100%)',
  },
  {
    slug: 'depression-anxiety-ayurveda',
    title: 'Can Ayurveda Help with Depression and Anxiety? Our Doctors Explain',
    excerpt: 'Mental health is at the heart of Ayurvedic medicine. Dr. Nalaka and Dr. Kumudinee explain how Ayurvedic protocols address the root causes of depression and anxiety.',
    category: 'Mental Wellness',
    readTime: '8 min read',
    accent: 'linear-gradient(135deg, #4A6670 0%, #354024 100%)',
  },
  {
    slug: 'bentota-river-medicine',
    title: 'The Bentota River: Why Location Is Medicine at River View Villas',
    excerpt: 'Ancient Ayurvedic texts speak of healing environments as essential to recovery. The Bentota River\'s unique ecology, sounds, and air quality make our retreat inherently therapeutic.',
    category: 'Our Story',
    readTime: '5 min read',
    accent: 'linear-gradient(135deg, #1A2810 0%, #4A6670 100%)',
  },
  {
    slug: 'what-to-pack',
    title: 'What to Pack for an Ayurvedic Retreat in Sri Lanka',
    excerpt: 'Packing for a wellness retreat requires a different mindset than a holiday. Here is the definitive guide to preparing for your stay at River View Villas.',
    category: 'Travel',
    readTime: '4 min read',
    accent: 'linear-gradient(135deg, #7A8C6E 0%, #1A1410 100%)',
  },
];


export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #354024 0%, #1A1410 60%, #2C2016 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.38)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">WELLNESS WISDOM</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px', marginBottom: '20px' }}>
              Ayurvedic Insights & Stories of Healing
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '17px', maxWidth: '520px', lineHeight: 1.75 }}>
              Ancient wisdom. Modern lives. Monthly insights to support your wellness journey — wherever you are in the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{ padding: '80px 0 0', background: 'var(--cream)' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 48px rgba(26,20,16,0.1)', marginBottom: '80px' }}>
              <div style={{ background: featured.accent, minHeight: '360px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '48px' }}>
                <span className="badge-gold" style={{ marginBottom: '16px', alignSelf: 'flex-start' }}>Featured</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: 'var(--white)', lineHeight: 1.2 }}>
                  {featured.title}
                </h2>
              </div>
              <div style={{ background: 'var(--white)', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <span className="badge-duration">{featured.category}</span>
                  <span style={{ color: 'var(--text-light)', fontSize: '12px', alignSelf: 'center' }}>{featured.readTime}</span>
                </div>
                <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.8, marginBottom: '32px' }}>{featured.excerpt}</p>
                <Link href={`/blog/${featured.slug}`} className="text-link">
                  Read Article <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* REST OF POSTS */}
      <section style={{ padding: '0 0 128px', background: 'var(--cream)' }}>
        <div className="container-rv">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={(i % 3) * 0.1}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ background: post.accent, height: '180px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                      <span className="badge-duration">{post.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <p style={{ color: 'var(--text-light)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>{post.readTime}</p>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: 600, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--text-mid)', fontSize: '14px', lineHeight: 1.7, marginBottom: 'auto', paddingBottom: '20px', flexGrow: 1 }}>
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="text-link" style={{ paddingTop: '16px', borderTop: '1px solid rgba(201,169,110,0.12)' }}>
                      Read Article <ArrowRight size={13} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
