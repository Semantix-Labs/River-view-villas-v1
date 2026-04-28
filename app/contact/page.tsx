'use client';
import { useState } from 'react';
import FadeIn from '@/components/FadeIn';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '', email: '', phone: '', country: '',
    interest: '', duration: '', message: '', source: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '55vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(155deg, #1A2810 0%, #1A1410 60%, #4A6670 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,20,16,0.38)', zIndex: 1 }} />
        <div className="container-rv" style={{ position: 'relative', zIndex: 2, paddingTop: '160px', paddingBottom: '100px' }}>
          <FadeIn>
            <span className="eyebrow">REACH OUT</span>
            <span className="gold-rule" />
            <h1 className="page-headline" style={{ color: 'var(--white)', maxWidth: '640px', marginBottom: '20px' }}>
              Let&apos;s Begin Your Healing Journey
            </h1>
            <p style={{ color: 'rgba(247,243,238,0.65)', fontSize: '17px', maxWidth: '520px', lineHeight: 1.75 }}>
              Reach out to us directly. Our team will respond within 24 hours with personalised guidance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-pad">
        <div className="container-rv">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '80px', alignItems: 'start' }}>

            {/* FORM */}
            <FadeIn>
              {submitted ? (
                <div style={{ background: 'var(--white)', borderRadius: '4px', padding: '60px 48px', textAlign: 'center', boxShadow: '0 4px 48px rgba(26,20,16,0.08)' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '28px', color: 'var(--deep)' }}>✓</span>
                  </div>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '32px', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>
                    Your Journey Begins
                  </h2>
                  <p style={{ color: 'var(--text-mid)', fontSize: '16px', lineHeight: 1.75 }}>
                    Thank you for reaching out. Dr. Nalaka&apos;s team will contact you within 24 hours with personalised guidance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <h2 className="section-headline" style={{ marginBottom: '8px' }}>Send an Enquiry</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" required type="text" className="form-input" placeholder="Your full name" value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input id="email" name="email" required type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" className="form-input" placeholder="+44 7700 900000" value={form.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="country">Country of Residence</label>
                      <input id="country" name="country" type="text" className="form-input" placeholder="United Kingdom" value={form.country} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="interest">I am interested in</label>
                    <select id="interest" name="interest" className="form-input" value={form.interest} onChange={handleChange} style={{ cursor: 'pointer' }}>
                      <option value="">Select enquiry type</option>
                      <option>General Enquiry</option>
                      <option>Package Recommendation</option>
                      <option>Accommodation Booking</option>
                      <option>Group / Corporate Retreat</option>
                      <option>Day Visit / Treatment Only</option>
                      <option>Media / Press</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="duration">Duration of Stay</label>
                    <select id="duration" name="duration" className="form-input" value={form.duration} onChange={handleChange} style={{ cursor: 'pointer' }}>
                      <option value="">Select duration</option>
                      <option>3 Nights</option>
                      <option>5 Nights</option>
                      <option>7 Nights</option>
                      <option>14 Nights</option>
                      <option>21 Nights</option>
                      <option>Not Yet Decided</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="message">Health Goals / Message</label>
                    <textarea
                      id="message" name="message"
                      className="form-input"
                      rows={5}
                      placeholder="Please share your health goals, current health concerns, or any questions you have for Dr. Nalaka..."
                      value={form.message}
                      onChange={handleChange}
                      style={{ resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="source">How did you hear about us?</label>
                    <select id="source" name="source" className="form-input" value={form.source} onChange={handleChange} style={{ cursor: 'pointer' }}>
                      <option value="">Please select</option>
                      <option>TripAdvisor</option>
                      <option>Google Search</option>
                      <option>Instagram</option>
                      <option>Friend / Recommendation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {error && (
                    <p style={{ color: '#c0392b', fontSize: '14px', background: '#fdf0ef', border: '1px solid #f5c6c2', borderRadius: '4px', padding: '12px 16px' }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{ justifyContent: 'center', padding: '18px 40px', opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer' }}
                  >
                    {loading ? 'Sending…' : 'Submit — Begin My Journey'}
                  </button>
                </form>
              )}
            </FadeIn>

            {/* CONTACT DETAILS */}
            <FadeIn delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {/* Details */}
                <div>
                  <span className="eyebrow" style={{ marginBottom: '20px', display: 'block' }}>CONTACT DETAILS</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { icon: <MapPin size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />, content: 'No 102/7C, Mathugama Road, Dharga Town, Bentota, Sri Lanka' },
                      { icon: <Phone size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />, content: '+94 777 217 829 · +94 777 417 737' },
                      { icon: <Mail size={16} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />, content: 'Riverviewvillas23@gmail.com' },
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        {item.icon}
                        <p style={{ color: 'var(--text-mid)', fontSize: '15px', lineHeight: 1.6 }}>{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Getting there */}
                <div style={{ background: 'var(--white)', borderRadius: '4px', padding: '32px', boxShadow: '0 2px 32px rgba(26,20,16,0.06)' }}>
                  <span className="eyebrow" style={{ marginBottom: '16px', display: 'block' }}>GETTING HERE</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { label: 'From Colombo', time: '90 minutes by road (Galle Road)' },
                      { label: 'From Bentota', time: '10 minutes by car or tuk-tuk' },
                      { label: 'From Bandaranaike Airport (CMB)', time: '2 hours' },
                      { label: 'From Mattala Airport (HRI)', time: '2.5 hours' },
                    ].map(item => (
                      <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingBottom: '12px', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
                        <Car size={14} strokeWidth={1.5} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                        <div>
                          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-dark)' }}>{item.label}</p>
                          <p style={{ color: 'var(--text-light)', fontSize: '13px' }}>{item.time}</p>
                        </div>
                      </div>
                    ))}
                    <p style={{ color: 'var(--text-light)', fontSize: '13px', fontStyle: 'italic' }}>
                      Airport taxi service available on request — mention in your enquiry.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <span className="eyebrow" style={{ marginBottom: '16px', display: 'block' }}>RESPONSE HOURS</span>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Clock size={16} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
                    <p style={{ color: 'var(--text-mid)', fontSize: '15px' }}>We respond within 24 hours, 7 days a week</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section style={{ background: 'var(--deep)', padding: '64px 0' }}>
        <div className="container-rv">
          <FadeIn>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '400px', background: 'linear-gradient(145deg, #354024 0%, #1A2810 50%, #4A6670 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
              <MapPin size={32} strokeWidth={1.5} style={{ color: 'var(--gold)' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', color: 'var(--white)', fontStyle: 'italic' }}>No 102/7C, Mathugama Road, Dharga Town, Bentota</p>
              <a
                href="https://maps.google.com/?q=River+View+Villas+Bentota+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ marginTop: '8px' }}
              >
                Open in Google Maps
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
