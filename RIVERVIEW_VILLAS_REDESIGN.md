# River View Villas — Premium Website Redesign
## Claude Code Brief · Full Stack Next.js Project

---

## PROJECT OVERVIEW

**Client:** River View Villas  
**Location:** No 102/7C, Mathugama Road, Dharga Town, Bentota, Sri Lanka  
**Contact:** +94777217829 / +94777417737 | Riverviewvillas23@Gmail.Com  
**Booking Engine:** https://booking.profitroom.com/en/riverviewvillas/home  
**Goal:** Redesign the existing website (riverview-villas.com) into a high-converting, premium Ayurvedic wellness retreat website that drives package bookings.

---

## DESIGN DIRECTION

### Aesthetic: *Sacred Luxury* — Minimal, Premium, Conversion-First

**Tone:** Ultra-refined luxury wellness. Think Aman Resorts meets traditional Ayurveda. Not clinical, not generic spa. Ancient wisdom expressed through radical simplicity.

**Color Palette (CSS Variables):**
```css
:root {
  --gold:        #C9A96E;   /* Warm gold — primary accent */
  --gold-light:  #E8D5B0;   /* Soft champagne */
  --deep:        #1A1410;   /* Near-black warm brown */
  --earth:       #2C2016;   /* Rich earth brown */
  --cream:       #F7F3EE;   /* Warm off-white background */
  --sage:        #7A8C6E;   /* Muted sage green */
  --river:       #4A6670;   /* Deep river blue-grey */
  --text-dark:   #1A1410;
  --text-mid:    #5C4F3A;
  --text-light:  #9E8E78;
  --white:       #FFFFFF;
}
```

**Typography:**
- Display / Headlines: `Cormorant Garamond` (Google Fonts) — elegant, timeless, high-luxury
- Subheadings: `Cormorant Garamond Italic` — poetic weight
- Body: `Jost` (Google Fonts) — clean, modern, readable
- Accent / Labels: `Jost` uppercase letterspaced — refined sans

**Visual Language:**
- Massive full-bleed imagery with dark overlays
- Thin gold rule lines as decorative dividers
- Generous whitespace — luxury breathes
- Asymmetric layouts — text left, image right (alternating)
- Subtle parallax on hero sections
- Soft fade-in animations on scroll
- No gradients, no purple, no generic stock-photo vibes
- River and tropical garden as recurring visual motifs

---

## TECH STACK

```
Framework:      Next.js 14 (App Router)
Styling:        Tailwind CSS + custom CSS variables
Animation:      Framer Motion
Icons:          Lucide React
Fonts:          Google Fonts (Cormorant Garamond + Jost)
Booking:        External link to Profitroom booking engine
Forms:          React Hook Form + EmailJS or Resend
Image Hosting:  Next.js Image with existing /public assets
Deployment:     Vercel
```

---

## SITE STRUCTURE & PAGES

```
/                    → Home (Landing + conversion hub)
/about               → About Us & Our Story
/packages            → Ayurvedic Packages (primary conversion page)
/accommodation       → Villas & Rooms
/treatments          → Treatment Menu
/gallery             → Photo Gallery
/contact             → Contact & Enquiry Form
/blog                → (NEW) Wellness Blog — SEO & trust building
```

---

## PAGE-BY-PAGE CONTENT & COPY

---

### PAGE 1: HOME ( `/` )

#### SECTION 1 — HERO

**Full-bleed video/image background** of the river view at dawn. Dark overlay 50%.

```
Eyebrow (gold, letterspaced):   BENTOTA · SRI LANKA

Headline (Cormorant, white, massive):
"Where Ancient
Healing Meets
Sacred Stillness."

Subline (Jost, cream, 18px):
An Ayurvedic wellness retreat on the banks of the
Bentota River — where every breath is medicine.

CTA Buttons (side by side):
[PRIMARY]  Reserve Your Retreat  →  /packages
[SECONDARY — ghost]  Explore Treatments  →  /treatments
```

**Trust bar below fold (thin gold line above):**
```
Est. 2005  ·  20+ Years of Healing  ·  5 Private Villas  ·  30+ Treatments  ·  Doctor-Led Care
```

---

#### SECTION 2 — PHILOSOPHY (2-col, text left / image right)

```
Eyebrow: OUR PHILOSOPHY

Headline:
"Healing Is Not
a Luxury. It Is
a Necessity."

Body:
River View Villas was founded on a singular belief: that true wellness
cannot be rushed. Nestled on the serene banks of the Bentota River,
our retreat has guided guests from across the world through authentic
Ayurvedic healing since 2005.

We do not offer spa days. We offer transformation.

Under the care of our resident Ayurvedic physician, Dr. Nalaka Samadhi,
each guest receives a personalised treatment protocol — designed for
your unique constitution, your specific imbalances, your healing.

[Link: Meet Our Doctors →]
```

---

#### SECTION 3 — FEATURED PACKAGES (conversion anchor)

**Section headline:**
```
Eyebrow: CURATED HEALING JOURNEYS
Headline: "Find Your Path to Wellness"
Sub: From a 3-night reset to a 21-day deep transformation — every package
     is doctor-guided, all-inclusive, and built around your body's needs.
```

**3 featured package cards (most popular):**

| Card | Title | Sub | Duration | CTA |
|------|-------|-----|----------|-----|
| 1 | Panchakarma Detox & Rejuvenation | Deep Ayurvedic detox for full-body reset | 14 Nights | Reserve Now |
| 2 | Lotus Wellness Package | Rejuvenating detox and full-body reset | 3 Nights | Reserve Now |
| 3 | Anti-Stress & Depression Relief | Restore emotional and mental balance | 7 Nights | Reserve Now |

```
Bottom CTA: [View All Packages →]  →  /packages
```

---

#### SECTION 4 — TREATMENTS GRID (visual)

```
Eyebrow: ANCIENT THERAPIES, MODERN COMFORT
Headline: "30+ Treatments. One Intention: Your Wholeness."

6-cell grid (image + name + 1-line description):
1. Panchakarma — The pinnacle of Ayurvedic detoxification
2. Shirodhara — Warm oil stream to calm the mind
3. Abhyanga Massage — Full-body warm oil synchronised massage
4. Yoga & Meditation — Daily practice for body and breath
5. Herbal Steam Bath — Deep cleanse through ancient herbal infusions
6. Shirovasti — Neural healing through warm oil retention

[Explore Full Treatment Menu →]  →  /treatments
```

---

#### SECTION 5 — VILLAS TEASER (full-bleed image)

```
Dark overlay image of villa with river view

Text overlay:
Eyebrow: YOUR SANCTUARY
Headline: "Five Private Villas.
           One River. Infinite Peace."

Body:
From the intimate Villa Lilly to the grand Lotus Mansion, each villa
is designed with Ayurvedic principles — natural materials, calming
colours, organic amenities — so your healing begins the moment you arrive.

[Discover Our Villas →]  →  /accommodation
```

---

#### SECTION 6 — SOCIAL PROOF (reviews)

```
Eyebrow: VOICES OF TRANSFORMATION
Headline: "What Our Guests Say"

Review 1 — Reshma D.
"I feel reborn. Dr. Nalaka and the therapists are highly professional.
The treatments truly help. I came for two weeks and left with a new start."
★★★★★

Review 2 — Judy M.
"The doctor and therapists made our intensive treatment a most memorable
experience. We loved the serenity and caring nature."
★★★★★

Review 3 — RobynK309
"When you arrive, you enter an oasis — calm and beautiful, set on the
river. The treatment rooms were immaculate and the massage sublime."
★★★★★

Review 4 — Margaret F.
"A beautiful place on the riverbank with immaculately kept gardens.
There are surprises at every turn — including a doctor's office
built to look like the roots of a bo tree."
★★★★★

Review 5 — Sightsee336020
"Amazing place with the most peaceful view. Very friendly staff and
nice food. Really amazed by the river view and great value for money."
★★★★★

[Verified TripAdvisor Reviews]
```

---

#### SECTION 7 — URGENCY / BOOKING CTA (full-bleed dark section)

```
Background: Deep earth brown (#2C2016) with subtle gold texture

Headline (gold, Cormorant):
"Your Healing Cannot Wait Any Longer."

Body (cream):
Limited rooms. Doctor-guided packages fill weeks in advance.
Secure your retreat with just a 50% deposit. Free cancellation applies.

[Reserve Your Package Now →]  →  booking engine
[Or Enquire Directly →]  →  /contact

Trust signals below:
✓ Free cancellation (T&C)   ✓ 50% deposit only   ✓ Full board included   ✓ Doctor consultation on arrival
```

---

#### SECTION 8 — VIDEO TOUR

```
Headline: "Experience River View Villas Before You Arrive"
Sub: Take a visual journey through our villas, treatment rooms,
     and the serene Bentota riverbank.

[Embedded video — /vtour.MOV with custom poster]
```

---

#### SECTION 9 — NEWSLETTER + FOOTER

```
Newsletter:
"Receive Wellness Wisdom — Monthly Ayurvedic insights, seasonal retreat
offers, and stories of healing. No noise. Only nourishment."
[Email input] [Subscribe]
```

---

### PAGE 2: ABOUT US ( `/about` )

#### SECTIONS:

**Hero:**
```
Eyebrow: OUR STORY
Headline: "Twenty Years of Healing by the River"
Background: Aerial or garden image
```

**History (2-col):**
```
Headline: "Born from a Calling, Not a Business Plan"

Body:
In 2005, River View Villas opened its doors with a single purpose:
to bring the transformative power of authentic Ayurveda to those who
seek genuine healing. Not wellness tourism. Not spa relaxation. Real,
physician-guided, measurable healing.

Two decades later, thousands of guests from Europe, Australia, the
Middle East, and beyond have left our riverside retreat renewed —
bodies detoxified, minds quieted, spirits restored.

We sit on the banks of the Bentota River in Sri Lanka's lush Western
Province — a landscape that has always been considered sacred healing
ground in ancient tradition.
```

**The Wisdom of Ayurveda (full-bleed section):**
```
Headline: "5,000 Years of Wisdom. Applied Today."

Body:
Ayurveda — the "Science of Life" — is the world's oldest holistic
healing system. At River View Villas, we practice authentic Ayurveda,
not a diluted resort version.

Every treatment begins with Pulse Diagnosis (Nadi Pariksha) — a
5,000-year-old diagnostic technique where Dr. Nalaka reads your dosha
imbalances through the pulse alone. Your entire programme is then
built around this diagnosis.

Our therapies include:
• Panchakarma — the supreme Ayurvedic detoxification process
• Herbal treatments using organically sourced local plants
• Daily yoga and pranayama
• Personalised Ayurvedic diet and herbal medicine
• Meditation and mindfulness practices
```

**Our Experts:**
```
Headline: "Healers, Not Technicians"
Sub: Our team's credentials span decades of clinical Ayurvedic practice.

Dr. Nalaka Samadhi
Pulse Diagnosis Specialist · Panchakarma Expert · Yoga Practitioner
[20+ years of Ayurvedic clinical practice. Specialist in treating
chronic conditions through Panchakarma and personalised herbal protocols.]

Dr. Kumudinee Liyanaarachchi
Ayurvedic Counselor · MA in Buddhist Ayurvedic Counseling
[Postgraduate-qualified counselor specialising in the intersection of
Buddhist philosophy and Ayurvedic healing for mental wellness.]

A D Dilki Shanika
Senior Therapist · Massage, Spa & Aromatherapy Expert
[10 years of hands-on experience in Ayurvedic massage, spa therapies,
and aromatherapy treatments.]

N D Malith Dhilshan
Senior Therapist · Panchakarma & Massage Specialist
[10 years of specialist experience in Panchakarma therapies, deep
tissue massage, and traditional Ayurvedic bodywork.]
```

**Sustainability:**
```
Headline: "We Heal People. We Protect the Earth."

Body:
Our commitment to the land that heals us runs deep. We source all
herbal ingredients locally, support the surrounding farming community,
and operate energy-efficient facilities.

Our practices:
• Locally sourced, organic herbs and ingredients
• Chemical-free, biodegradable toiletries
• Energy conservation throughout the property
• Support for the Dharga Town local economy
• Eco-certified operations

[Recognised with sustainability awards for responsible tourism practices]
```

---

### PAGE 3: PACKAGES ( `/packages` ) ← PRIMARY CONVERSION PAGE

**This is the most important page. Every element should guide to booking.**

**Hero:**
```
Eyebrow: CURATED HEALING JOURNEYS
Headline: "Your Transformation Begins With Choosing Your Path"
Sub: Every package is crafted by Dr. Nalaka Samadhi based on traditional
     Ayurvedic protocols. Full board included. Doctor-supervised throughout.
```

**Trust bar:**
```
✓ Doctor consultation on arrival  ·  ✓ Full board (Ayurvedic meals)
✓ All treatments included  ·  ✓ 50% deposit  ·  ✓ Free cancellation
```

**Filter tabs (sticky):**
```
[All]  [3 Nights]  [5 Nights]  [7 Nights]  [14 Nights]  [21 Nights]
```

**Package Cards (full content):**

Each card shows:
- Hero image
- Duration badge (e.g. "3 Nights")
- Package name
- Tagline
- 3 bullet highlights
- Inclusions (Full Board, Free Cancellation, 50% Deposit)
- Primary CTA: [Reserve This Package] → Profitroom booking link
- Secondary CTA: [Enquire] → /contact

---

**ALL PACKAGES FULL LIST:**

**3-NIGHT PACKAGES:**

```
1. Hibiscus Vitality Package
   Tagline: Quick Body Detox & Mind Refresh
   Description: The perfect introduction to Ayurvedic healing. In just
   three transformative nights, experience targeted treatments to flush
   toxins, relieve stress, and reawaken your body's natural vitality.
   Ideal for: First-time visitors, weekend wellness seekers
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854188

2. Araliya Healing Package
   Tagline: Calming and Balancing Ayurvedic Experience
   Description: Named for the frangipani flower that blooms across our
   gardens, the Araliya package gently restores doshic balance through
   calming therapies, herbal treatments, and meditative practices.
   Ideal for: Stress relief, anxiety management, inner balance
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854176

3. Lotus Wellness Package
   Tagline: Rejuvenating Detox & Full-Body Reset
   Description: A comprehensive 3-night programme combining detoxification,
   nourishing body therapies, and daily yoga — designed to leave you
   feeling completely renewed.
   Ideal for: General detox, energy restoration, full reset
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854158
```

**5-NIGHT PACKAGES:**

```
4. Lotus Weight Loss Package
   Tagline: Ayurvedic Weight Management & Detox
   Description: Combines targeted Ayurvedic fat-reduction therapies with
   a personalised dietary programme and metabolism-boosting treatments.
   Results you feel — and see.
   Ideal for: Weight management, metabolic health
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854674

5. Hibiscus Pain Relief Package
   Tagline: Relieve Pain Naturally with Ayurveda
   Description: Targeted treatments for musculoskeletal pain, joint
   stiffness, and inflammation using warm herbal poultices, medicated
   oils, and Panchakarma-based protocols.
   Ideal for: Back pain, joint pain, muscle tension
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854678

6. Araliya Anti-Stress & Depression Relief Package
   Tagline: Restore Emotional & Mental Balance
   Description: A deeply restorative programme for the overworked mind.
   Shirodhara, herbal treatments, meditation, and Ayurvedic counselling
   combine to restore emotional equilibrium.
   Ideal for: Anxiety, burnout, low mood, emotional exhaustion
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854680
```

**7-NIGHT PACKAGES:**

```
7. Hibiscus Pain Relief Package (7 Nights)
   Tagline: Chronic Pain Relief Through Panchakarma
   Description: An extended pain management programme using Panchakarma's
   detoxification techniques to address chronic pain at its root cause —
   not just the symptom.
   Ideal for: Chronic back pain, arthritis, repetitive strain
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854682

8. Araliya Anti-Stress, Insomnia & Depression Relief Package
   Tagline: Restful Mind and Restored Sleep Naturally
   Description: Seven nights of dedicated nervous system restoration.
   Combines Shirodhara, Nasyam, yoga nidra, herbal medicine, and
   counselling to rebuild healthy sleep and emotional resilience.
   Ideal for: Insomnia, chronic stress, depression, anxiety
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854684

9. Lotus Weight Loss Package (7 Nights)
   Tagline: Rebalance Metabolism with Ayurvedic Detox
   Description: Seven nights of systematic Ayurvedic weight management —
   combining Udwarthanam (powder massage), dietary therapy, herbal
   medicine, and yoga to restore healthy metabolism.
   Ideal for: Weight loss, metabolic syndrome, sluggish digestion
   Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/854686
```

**14-NIGHT PACKAGES:**

```
10. Panchakarma Detox & Rejuvenation Package ⭐ MOST POPULAR
    Tagline: Deep Ayurvedic Detox & Healing
    Description: The gold standard of Ayurvedic healing. Panchakarma —
    the five-fold purification therapy — is the most comprehensive detox
    known to ancient medicine. Over 14 nights, Dr. Nalaka guides you
    through a complete systemic cleanse that removes deep-seated toxins,
    resets your constitution, and leaves you profoundly renewed.
    Ideal for: Anyone seeking genuine, lasting transformation
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/876646

11. Ayurvedic Diabetes Management Package
    Tagline: Balance Sugar Levels with Natural Therapy
    Description: A comprehensive programme targeting blood sugar
    regulation through Panchakarma detox, herbal medicine, dietary
    management, and lifestyle guidance rooted in Ayurvedic science.
    Ideal for: Type 2 diabetes management, pre-diabetes, insulin resistance
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860456

12. Ayurvedic Treatment for Tinnitus
    Tagline: Ayurvedic Healing for Ear & Nerve Health
    Description: A specialised programme addressing tinnitus through
    Karna Purana (ear oil therapy), Nasyam, Shirodhara, and systemic
    detoxification to calm the nervous system and reduce ear noise.
    Ideal for: Tinnitus, ear ringing, nerve sensitivity
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860454

13. High Blood Pressure Management Package
    Tagline: Natural Cardiac Health Restoration
    Description: Ayurvedic treatment for hypertension through stress
    reduction therapies, herbal cardiac tonics, Shirodhara, and
    dietary protocols designed to reduce blood pressure naturally.
    Ideal for: Hypertension, cardiac wellness, stress-related BP
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860452

14. Cholesterol Management Package
    Tagline: Herbal Therapy to Cleanse Arteries
    Description: Combines Panchakarma detoxification with herbal lipid
    management, dietary therapy, and daily yoga to reduce cholesterol
    and improve cardiovascular health.
    Ideal for: High cholesterol, cardiovascular risk, metabolic health
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860450

15. Weight Loss Program (14 Nights)
    Tagline: Comprehensive Ayurvedic Fat-Burning Regimen
    Description: A medically supervised Ayurvedic weight reduction
    programme including Udwarthanam, Panchakarma, herbal metabolism
    boosters, personalised diet, and daily yoga/exercise protocols.
    Ideal for: Significant weight reduction, obesity, metabolic disorder
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860448

16. Paralysis / Parkinson's Recovery Package
    Tagline: Neural & Muscular Rehabilitation Program
    Description: An intensive programme targeting neurological conditions
    using Pizhichil (oil bath), Navarakizhi (rice poultice), Panchakarma,
    and herbal neuro-tonics to restore motor function and nerve health.
    Ideal for: Stroke recovery, Parkinson's, partial paralysis, nerve damage
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860446

17. Arthritis Treatment Package
    Tagline: Joint Pain Relief and Mobility Restoration
    Description: A targeted programme for arthritis using Janu Basti,
    Abhyanga, Kizhi (herbal poultice), anti-inflammatory herbal medicine,
    and dietary therapy to reduce inflammation and restore joint mobility.
    Ideal for: Rheumatoid arthritis, osteoarthritis, joint stiffness
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860444

18. Skin Healing Program: Psoriasis & Neurodermatitis
    Tagline: Herbal & Detox-Based Skin Healing
    Description: A deep dermatological healing programme using
    Panchakarma blood purification, herbal pastes, medicated ghee,
    and strict Ayurvedic diet to address psoriasis and chronic skin
    conditions at their root.
    Ideal for: Psoriasis, eczema, neurodermatitis, chronic skin issues
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860458

19. Migraine Relief Package
    Tagline: Root Cause Healing for Chronic Migraines
    Description: Addresses the underlying Pitta and Vata imbalances
    that cause chronic migraines through Shirodhara, Nasyam, herbal
    treatments, dietary protocol, and stress management therapies.
    Ideal for: Chronic migraine, cluster headaches, tension headaches
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860442

20. Depression Relief Package
    Tagline: Emotional Balance Through Ayurveda
    Description: A holistic programme for depression and emotional
    imbalance using Shirodhara, Abhyanga, Ayurvedic counselling,
    meditation, herbal antidepressants, and personalised dietary therapy.
    Ideal for: Depression, emotional imbalance, grief, PTSD
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860530
```

**21-NIGHT PACKAGES:**

```
21. Panchakarma Deep Healing & Transformation Package ⭐ PREMIUM
    Tagline: Full-Body Detox & Spiritual Renewal
    Description: The ultimate Ayurvedic experience. Twenty-one nights
    is the classical duration prescribed in ancient Ayurvedic texts for
    complete systemic transformation. This is not a holiday. This is a
    rebirth. Under Dr. Nalaka's supervision, you will emerge from this
    programme as a measurably different person — physically, mentally,
    and spiritually.
    Ideal for: Those ready for total transformation
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/876648

22. Ayurvedic Diabetes Management Package (21 Nights)
    Tagline: Long-Term Natural Blood Sugar Control
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860992

23. Skin Healing Program (21 Nights)
    Tagline: Intensive Healing for Chronic Skin Issues
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860458

24. High Blood Pressure Management Package (21 Nights)
    Tagline: Herbal Detox for Heart & Circulation Health
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860988

25. Tinnitus Treatment Package (21 Nights)
    Tagline: Restorative Therapy for Ear Health
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860990

26. Cholesterol Management Package (21 Nights)
    Tagline: Cleanse & Strengthen the Cardiovascular System
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860603

27. Weight Loss Program (21 Nights)
    Tagline: Comprehensive Slimming with Ayurveda
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860601

28. Paralysis / Parkinson's Recovery Package (21 Nights)
    Tagline: Long-Term Nerve Strengthening & Healing
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860599

29. Arthritis Treatment Package (21 Nights)
    Tagline: Joint Rejuvenation & Flexibility Restoration
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860597

30. Migraine Relief Package (21 Nights)
    Tagline: Comprehensive Healing for Chronic Migraines
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860596

31. Depression Relief Package (21 Nights)
    Tagline: Emotional & Mental Balance Transformation
    Booking Link: https://booking.profitroom.com/en/riverviewvillas/details/offer/860530
```

**Bottom of Packages Page — "Not Sure Which Package?" CTA:**
```
Headline: "Not Sure Which Package Is Right for You?"
Body: Our team — guided by Dr. Nalaka — will assess your health goals
and recommend the perfect programme for your body and timeline.
CTA: [Request a Free Consultation →]  →  /contact (pre-fill: "Package consultation")
```

---

### PAGE 4: ACCOMMODATION ( `/accommodation` )

**Hero:**
```
Eyebrow: YOUR SANCTUARY
Headline: "Five Private Villas. One Sacred River."
Sub: Each villa is designed around Ayurvedic principles — natural materials,
     river-facing views, organic amenities. Your healing begins the
     moment you arrive.
```

**Ayurvedic Amenities Bar:**
```
Organic chemical-free toiletries  ·  Herbal teas & Ayurvedic beverages
Yoga mats & meditation spaces  ·  Natural light & Ayurvedic colour principles
Free Wi-Fi  ·  Laundry service  ·  Room service  ·  Airport transfers
```

**Villa Cards (one per villa, alternating layout):**

```
VILLA 1: Carpe Diem Villa
Tagline: "Seize the Day. By the River."
Description:
Set amidst a lush tropical garden with a year-round outdoor pool,
Carpe Diem Villa offers a stunning river view and intimate privacy.
The villa features four air-conditioned rooms with en-suite bathrooms,
a communal hall, and a kitchen — perfect for a small group seeking
a complete retreat experience.
Activities: Billiards, fishing, cycling (bicycles complimentary)
Amenities: Free parking · Free water bottles · Free Wi-Fi ·
           Laundry service · Room service · Forest view · Airport taxi service
[Reserve Carpe Diem →]

VILLA 2: Villa Araliya
Tagline: "Named for the Frangipani. Scented Like Peace."
Description:
Villa Araliya offers serene accommodations with a focus on Ayurvedic
wellness. Elegantly furnished rooms with modern amenities overlook the
surrounding tropical nature. Personalised Ayurvedic treatments and
therapies are available throughout your stay.
Amenities: Luxurious rooms · Organic dining options ·
           Ayurvedic treatment packages · Yoga and meditation sessions
[Reserve Villa Araliya →]

VILLA 3: Villa Orchid
Tagline: "Rare. Refined. Restorative."
Description:
Villa Orchid provides a tranquil escape with a strong emphasis on
Ayurvedic healing. Spacious rooms, each designed to enhance relaxation
and well-being, open onto herbal gardens where many of our treatment
ingredients are grown.
Amenities: Spacious rooms · Herbal gardens · Ayurvedic treatments ·
           Meditation and yoga areas
[Reserve Villa Orchid →]

VILLA 4: Villa Lilly
Tagline: "Pure. Gentle. Healing."
Description:
Villa Lilly is designed for guests seeking a holistic Ayurvedic
experience in a comfortable, unhurried setting. Wellness services
include personalised dietary plans and a full range of therapeutic
treatments curated to your dosha.
Amenities: Comfortable accommodations · Therapeutic treatments ·
           Ayurvedic wellness services · Personalised dietary plans
[Reserve Villa Lilly →]

VILLA 5: Lotus Mansion ⭐ SIGNATURE PROPERTY
Tagline: "Where Luxury and Ancient Wisdom Become One."
Description:
Lotus Mansion is our signature property — combining the highest level
of luxury with the full depth of traditional Ayurvedic practices.
Beautifully appointed rooms, a private garden, and exclusive Ayurvedic
services make this the choice for guests seeking a truly immersive,
comprehensive wellness experience.
Amenities: Luxurious rooms · Private garden · Exclusive Ayurvedic services ·
           Comprehensive wellness programs
[Reserve Lotus Mansion →]
```

**Booking CTA section:**
```
Headline: "Ready to Choose Your Villa?"
Body: Book directly with us for the best available rate. All rooms
      include Ayurvedic breakfast. Package inclusions vary — see our
      Packages page for full board and treatment inclusions.
CTA: [Check Availability →]  →  Profitroom booking engine
CTA: [Contact Us Directly →]  →  /contact
```

---

### PAGE 5: TREATMENTS ( `/treatments` )

**Hero:**
```
Eyebrow: THE HEALING ARTS
Headline: "30+ Treatments. Five Thousand Years of Wisdom."
Sub: All treatments use organically sourced ingredients. Every protocol
     is supervised by our resident Ayurvedic physician.
```

**Intro text:**
```
At River View Villas, we practice Ayurveda as it was intended —
not as a spa menu, but as a medical system. Every treatment is
prescribed after pulse diagnosis (Nadi Pariksha). We do not sell
treatments à la carte; we prescribe them as part of a healing protocol.

That said, guests staying with us may explore individual treatments
under guidance. The menu below represents our full therapeutic offering.
```

**Treatment Grid (searchable/filterable by category):**

**Categories:**
- Body Therapies
- Head & Neural Treatments
- Herbal & Detox
- Mind & Spirit
- Beauty & Skin

**ALL 21 TREATMENTS WITH EXPANDED COPY:**

```
BODY THERAPIES:

1. Abhyanga (Full Body Massage)
   Category: Body Therapy
   Description: The cornerstone of Ayurvedic bodywork. Two therapists
   work in synchronised strokes, applying warm herbal oils chosen for
   your dosha. Penetrates deep into muscle tissue, lubricates joints,
   stimulates lymphatic drainage, and induces profound relaxation.
   Benefits: Relieves deep tissue tension, aids physical recovery,
   improves circulation, reduces Vata imbalance.
   Duration: 60–90 minutes

2. Intensive Massage
   Category: Body Therapy
   Description: A deep-pressure therapeutic massage targeting chronic
   muscular tension, adhesions, and deep-seated stress. Stronger
   pressure than Abhyanga — ideal for physically active guests or
   those with significant muscle tension.
   Benefits: Relieves deep tissue tension, aids physical recovery.
   Duration: 60–90 minutes

3. Powder Massage (Udwarthanam)
   Category: Body Therapy
   Description: A unique dry massage using herbal powders rubbed
   vigorously against the grain of body hair. Stimulates fat metabolism,
   reduces Kapha accumulation, exfoliates skin, and improves texture.
   A key component of weight management programmes.
   Benefits: Stimulates skin, reduces fat deposits, improves texture.
   Duration: 45–60 minutes

4. Thermo Massage (Kizhi)
   Category: Body Therapy
   Description: Warm herbal poultices (bundles of medicinal herbs
   tied in cloth and heated) are rhythmically applied to the body.
   Deep heat penetrates joints and muscles to relieve pain, reduce
   inflammation, and promote healing.
   Benefits: Uses heat to soothe and relax muscles, relieves joint pain.
   Duration: 60–75 minutes

5. Sincone Massage
   Category: Body Therapy
   Description: A therapeutic massage technique that combines modern
   and traditional elements to rejuvenate the body, stimulate
   circulatory function, and promote lymphatic detoxification.
   Benefits: Rejuvenates body, stimulates circulation, detoxifies.
   Duration: 60 minutes

6. Sharwanga Dhara
   Category: Body Therapy
   Description: Warm medicated oil or herbal decoction is poured
   rhythmically over the entire body in a continuous stream, combined
   with gentle massage. Profoundly relieves joint pain, reduces stress,
   and deeply rejuvenates.
   Benefits: Relieves joint pain, reduces stress, rejuvenates deeply.
   Duration: 60–75 minutes

HEAD & NEURAL TREATMENTS:

7. Shirodhara ⭐ SIGNATURE
   Category: Head & Neural
   Description: The most iconic of all Ayurvedic treatments. A gentle,
   continuous stream of warm medicated oil flows onto the forehead at
   the "third eye" point for an extended period. The effect on the
   nervous system is extraordinary — guests frequently enter a state
   of profound calm that resembles meditation.
   Benefits: Calms the mind, alleviates chronic stress, treats insomnia,
   relieves anxiety and depression, enhances mental clarity.
   Duration: 45–60 minutes

8. Shirovasti
   Category: Head & Neural
   Description: A cap-like structure is placed on the head, filled with
   warm medicated oil that remains in contact with the scalp for a
   therapeutic period. Treats neurological conditions, facial paralysis,
   and severe headaches.
   Benefits: Treats neural ailments, enhances mental clarity.
   Duration: 30–45 minutes

9. Head Massage
   Category: Head & Neural
   Description: Targeted massage of the scalp, neck, and upper
   shoulders using medicated herbal oils. Stimulates hair follicles,
   improves scalp circulation, relieves tension headaches, and promotes
   hair growth.
   Benefits: Eases headaches, stimulates scalp, fosters hair growth.
   Duration: 30–45 minutes

10. Face Massage
    Category: Head & Neural
    Description: A gentle, rejuvenating facial massage using Ayurvedic
    herbal face oils. Stimulates facial circulation, reduces puffiness,
    relieves sinus congestion, and enhances natural radiance.
    Benefits: Enhances beauty, reduces stress and sinus congestion.
    Duration: 30 minutes

11. Foot Massage (Pada Abhyanga)
    Category: Head & Neural
    Description: In Ayurveda, the feet are considered a map of the
    entire body. Medicated oil massage of the feet and lower legs
    promotes relaxation, relieves foot pain, boosts circulation, and
    supports restful sleep.
    Benefits: Promotes relaxation, relieves pain, boosts circulation.
    Duration: 30–45 minutes

HERBAL & DETOX:

12. Panchakarma ⭐ SIGNATURE
    Category: Herbal & Detox
    Description: The supreme purification therapy of Ayurveda — a
    systematic five-fold detoxification process that eliminates deep-
    seated toxins (Ama) from the body's tissues. Panchakarma requires
    proper preparation (Purvakarma) and post-treatment care (Paschatkarma)
    and is always conducted under physician supervision. The five
    classical procedures include Vamana (emesis), Virechana (purgation),
    Basti (enema therapy), Nasyam (nasal therapy), and Raktamokshana
    (blood purification).
    Benefits: Detoxifies body at cellular level, enhances vitality,
    treats chronic disease, resets constitution, profound rejuvenation.
    Duration: Programme-based (minimum 7 nights recommended)

13. Herbal Inhalation (Nasyam)
    Category: Herbal & Detox
    Description: Medicated herbal oils or herbal steam are administered
    through the nasal passages — the "gateway to the head." Treats
    chronic sinusitis, migraines, nasal congestion, and boosts mental
    alertness and sensory clarity.
    Benefits: Treats respiratory conditions, boosts mental alertness.
    Duration: 20–30 minutes

14. Steam Bath (Swedana)
    Category: Herbal & Detox
    Description: Full-body herbal steam bath using a medicated herbal
    decoction. Opens pores, promotes sweating to expel toxins, deeply
    cleanses the skin, relaxes muscles, and prepares the body for
    subsequent oil treatments.
    Benefits: Cleanses skin, relaxes muscles, detoxifies the body.
    Duration: 20–30 minutes

15. Herbal Bath
    Category: Herbal & Detox
    Description: A full immersion bath prepared with a therapeutic
    blend of Ayurvedic herbs, flowers, and medicated ingredients.
    Cleanses the body energetically and physically, relieves stress,
    and enhances skin health.
    Benefits: Cleanses body, relieves stress, enhances skin health.
    Duration: 30–45 minutes

16. Special Herbals
    Category: Herbal & Detox
    Description: Tailored internal herbal formulations — decoctions,
    churnas, medicated ghees, and herbal tablets — prescribed by Dr.
    Nalaka based on your diagnosis to support long-term health and
    longevity.
    Benefits: Tailored herbal remedies for health and longevity.
    Duration: Ongoing (as prescribed)

BEAUTY & SKIN:

17. Body Scrub
    Category: Beauty & Skin
    Description: A therapeutic full-body exfoliation using natural
    Ayurvedic scrub ingredients including herbal powders, turmeric,
    sandalwood, and nourishing oils. Removes dead skin cells, improves
    circulation, and reveals radiant skin.
    Benefits: Exfoliates, rejuvenates skin, improves circulation.
    Duration: 45–60 minutes

18. Flower Bath
    Category: Beauty & Skin
    Description: A luxurious bath drawn with fresh tropical flowers
    and aromatic Ayurvedic herbs. Uplifts the spirit, nourishes and
    beautifies the skin, and promotes deep relaxation.
    Benefits: Uplifts spirits, beautifies skin, promotes relaxation.
    Duration: 30–45 minutes

MIND & SPIRIT:

19. Yoga
    Category: Mind & Spirit
    Description: Daily yoga sessions conducted in our open-air yoga
    pavilion overlooking the Bentota River. Suitable for all levels —
    from complete beginners to advanced practitioners. Combines Hatha
    and Vinyasa approaches with pranayama (breathwork).
    Benefits: Improves health, enhances flexibility and mental peace.
    Duration: 60–90 minutes (daily sessions)

20. Meditation
    Category: Mind & Spirit
    Description: Guided meditation sessions using classical techniques
    including mindfulness, trataka (candle gazing), nada yoga (sound
    meditation), and yoga nidra (yogic sleep). Conducive to the deep
    stillness that the riverbank naturally invites.
    Benefits: Achieves clarity, calms emotions, enhances well-being.
    Duration: 30–60 minutes

21. Monk Horoscope (Jyotish Consultation)
    Category: Mind & Spirit
    Description: A traditional Vedic astrology consultation using your
    birth chart to provide guidance on life decisions, timing, health
    tendencies, and spiritual path. Offered as a unique complement to
    the healing experience.
    Benefits: Guides life decisions through astrological wisdom.
    Duration: 45–60 minutes
```

**Bottom CTA:**
```
Headline: "Ready to Begin Your Treatment Journey?"
Body: All treatments are prescribed after consultation with Dr. Nalaka.
      The easiest way to experience our treatments is through one of
      our all-inclusive packages.
CTA: [View Our Packages →]  →  /packages
CTA: [Book a Consultation →]  →  /contact
```

---

### PAGE 6: GALLERY ( `/gallery` )

**Filterable gallery:**
- All
- Villas & Rooms
- Treatments
- Nature & Gardens
- Food & Dining
- Yoga & Meditation

**Featured video:** Embedded video tour (vtour.MOV) above fold.

**Gallery intro:**
```
Headline: "A Glimpse into River View Villas"
Sub: Every image tells the story of what awaits you —
     the serenity, the healing, the river.
```

**Bottom CTA:**
```
"Words and images can only do so much. The only way to truly
understand River View Villas is to experience it."
[Reserve Your Stay →]  →  booking engine
```

---

### PAGE 7: CONTACT ( `/contact` )

**Hero:**
```
Headline: "Let's Begin Your Healing Journey"
Sub: Reach out to us directly. Our team will respond within 24 hours
     with personalised guidance.
```

**Contact form fields:**
```
Full Name *
Email Address *
Phone / WhatsApp
Country of Residence
Interested In: [Dropdown]
  - General Enquiry
  - Package Recommendation
  - Accommodation Booking
  - Group / Corporate Retreat
  - Day Visit / Treatment Only
  - Media / Press
Duration of Stay [Dropdown]
  - 3 Nights
  - 5 Nights
  - 7 Nights
  - 14 Nights
  - 21 Nights
  - Not Yet Decided
Health Goals / Message [Textarea]
How did you hear about us? [Dropdown]
  - TripAdvisor
  - Google Search
  - Instagram
  - Friend / Recommendation
  - Other

[Submit — Begin My Journey]
```

**Contact details:**
```
Address:   No 102/7C, Mathugama Road, Dharga Town, Sri Lanka
Phone:     +94777217829
Phone 2:   +94777417737
WhatsApp:  +94777217829
Email:     Riverviewvillas23@Gmail.Com
```

**Embedded Google Map**

**Getting There section:**
```
From Colombo: 90 minutes by road (Galle Road)
From Bentota: 10 minutes by car or tuk-tuk
From Bandaranaike Airport (CMB): 2 hours
From Mattala Airport (HRI): 2.5 hours
Airport Taxi Service: Available on request — contact us to arrange
```

---

### PAGE 8: BLOG ( `/blog` ) ← NEW PAGE

**Purpose:** SEO, trust-building, organic traffic for search terms like
"Ayurveda Sri Lanka", "Panchakarma retreat", "Ayurvedic treatment for arthritis"

**Suggested initial blog posts:**

```
1. "What Is Panchakarma? The Complete Guide to Ayurveda's Master Detox"
2. "How Shirodhara Cured My Insomnia: A Guest's Story"
3. "Ayurveda vs. Conventional Medicine: What's the Difference?"
4. "The Three Doshas Explained: Vata, Pitta, and Kapha"
5. "Why Sri Lanka Is the World's Best Destination for Ayurvedic Retreats"
6. "What to Expect on Your First Ayurvedic Retreat"
7. "Ayurvedic Treatments for Arthritis: A Natural Approach"
8. "Can Ayurveda Help with Depression and Anxiety? Our Doctors Explain"
9. "The Bentota River: Why Location Is Medicine at River View Villas"
10. "What to Pack for an Ayurvedic Retreat in Sri Lanka"
```

---

## NAVIGATION STRUCTURE

```
Logo (top left)                        [Book Now] button (top right, gold)

Desktop Nav:
About  |  Packages  |  Accommodation  |  Treatments  |  Gallery  |  Blog  |  Contact

Mobile: Hamburger → full-screen overlay menu
```

---

## FOOTER CONTENT

```
Logo + tagline:
"River View Villas — Ayurvedic Healing Retreat, Sri Lanka"

Column 1 — Quick Links:
About Us · Packages · Accommodation · Treatments · Gallery · Blog · Contact

Column 2 — Packages:
3-Night Packages · 5-Night Packages · 7-Night Packages
14-Night Packages · 21-Night Packages

Column 3 — Contact:
No 102/7C, Mathugama Road, Dharga Town, Sri Lanka
+94777217829 / +94777417737
Riverviewvillas23@Gmail.Com

Column 4 — Social:
[TripAdvisor icon]  [Instagram icon]  [Facebook icon]  [WhatsApp icon]

Bottom bar:
© 2025 River View Villas · All Rights Reserved · Terms of Use · Privacy Policy
Built with intention for healing.
```

---

## KEY CTAs (Summary)

| Location | CTA Text | Destination |
|----------|----------|-------------|
| Hero | "Reserve Your Retreat" | /packages |
| Hero secondary | "Explore Treatments" | /treatments |
| Philosophy section | "Meet Our Doctors" | /about |
| Package teaser | "View All Packages" | /packages |
| Each package card | "Reserve This Package" | Profitroom (per package link) |
| Not sure section | "Request Free Consultation" | /contact |
| Footer sticky | "Book Now" | Profitroom home |
| Treatments page | "View Our Packages" | /packages |
| Gallery | "Reserve Your Stay" | Profitroom home |
| Contact form | "Begin My Journey" | Form submit |

---

## CONVERSION OPTIMISATION NOTES

### What the Current Site Is Missing:
1. **No urgency or scarcity signals** → Add "Limited availability" near CTAs
2. **No clear package hierarchy** → Add "Most Popular" and "Best Value" badges
3. **No trust badges** → Add "Est. 2005", "Doctor-Led", "20+ Years" prominently
4. **CTAs bury the booking link** → Every package needs a direct booking button
5. **No consultation pathway** → Add "Not sure?" → consultation form for warm leads
6. **Reviews not prominent** → Feature 3 reviews on homepage above fold
7. **No before/after journey storytelling** → Add "What to Expect" timeline
8. **No WhatsApp CTA** → Add floating WhatsApp button (huge for Sri Lanka tourism)
9. **No FAQ section** → Add FAQ addressing: cost, cancellation, diet, what to bring
10. **Accommodation page doesn't cross-sell packages** → Link from villa to package

### New Sections to Add (Not on Existing Site):
1. **Floating WhatsApp button** — bottom right, always visible
2. **"Quiz: Which Package Is Right for You?"** — interactive tool → lead capture
3. **FAQ page / accordion** — reduces friction to booking
4. **Testimonial video section** — if video testimonials available
5. **Blog** — SEO and authority building
6. **"As Seen In" / Awards bar** — if press mentions or awards exist
7. **What to Expect timeline** — arrival → consultation → treatment → departure
8. **Instagram feed embed** — social proof and freshness

### Sticky Elements:
- **Sticky "Book Now" button** in header (always visible on scroll)
- **Floating WhatsApp button** (bottom right)
- **Cookie-less session to remember package interest** → show relevant CTA

---

## WHAT TO EXPECT SECTION (Add to Homepage or About)

```
Headline: "Your Healing Journey, Step by Step"

Step 1: Arrival
Your journey begins at Bentota station or we arrange your airport
transfer. Upon arrival, you are welcomed with herbal tea and a
personal introduction to our team.

Step 2: Consultation
Within hours of arrival, you meet Dr. Nalaka for your initial
Nadi Pariksha (pulse diagnosis). This 30-minute consultation
determines your Ayurvedic constitution and customises your
entire programme.

Step 3: Your Programme Begins
From your second morning, your personalised schedule unfolds —
treatments in the morning, yoga at dawn, Ayurvedic meals, rest,
and evening meditation.

Step 4: Ongoing Adjustment
Dr. Nalaka meets with you regularly throughout your stay to assess
progress and adjust your protocol based on how your body responds.

Step 5: Departure
You leave with a personalised post-retreat protocol — herbal
recommendations, dietary guidelines, and a lifestyle plan to
sustain your healing at home.
```

---

## FAQ CONTENT

```
Q: Do I need to have health problems to come?
A: Not at all. Many of our guests are in good health and come for
   preventative care, deep relaxation, stress relief, or simply
   to experience authentic Ayurveda. We welcome guests at all stages
   of their wellness journey.

Q: What is included in the packages?
A: All packages include full board (three Ayurvedic meals daily),
   accommodation in your chosen villa, an initial doctor consultation,
   all listed treatments, daily yoga and meditation, and a departure
   wellness consultation.

Q: What is the cancellation policy?
A: Free cancellation is available subject to our terms and conditions.
   A 50% deposit is required to secure your booking.

Q: What should I bring?
A: Light, loose, comfortable clothing. We provide towels, yoga mats,
   herbal toiletries, and everything you need for treatment. Leave
   heavy jewellery and electronics at home — you won't need them.

Q: Is the food included? Can dietary restrictions be accommodated?
A: Yes. Full board is included in all packages. Our Ayurvedic chef
   prepares a personalised dietary plan based on your consultation.
   Vegetarian by default; other requirements accommodated on request.

Q: Can I come as a couple?
A: Absolutely. We welcome couples, solo travellers, and small groups.
   Each person receives an individual consultation and programme —
   healing is personal, even when shared.

Q: Is this suitable for serious health conditions?
A: Yes. Our 14 and 21-night programmes are specifically designed for
   conditions including arthritis, diabetes, hypertension, depression,
   Parkinson's, and more. All are conducted under Dr. Nalaka's
   medical supervision. Please disclose all medical history in your
   pre-arrival consultation.

Q: How far is the retreat from Colombo / Bentota?
A: We are 90 minutes from Colombo (Galle Road), 10 minutes from
   Bentota, and 2 hours from Bandaranaike International Airport.
   We arrange airport taxi service on request.
```

---

## TECHNICAL REQUIREMENTS FOR CLAUDE CODE

```
1. Framework: Next.js 14 with App Router
2. Styling: Tailwind CSS with custom CSS variables (see color palette above)
3. Fonts: Google Fonts — Cormorant Garamond (400, 400i, 600, 700) + Jost (300, 400, 500)
4. Animation: Framer Motion — fade-in on scroll, stagger children, parallax
5. Images: Next.js <Image> optimisation — use existing /public assets
6. Booking: External links to Profitroom — open in new tab
7. WhatsApp: Floating button → wa.me/94777217829
8. Contact Form: React Hook Form + EmailJS (or Resend API)
9. Package Filter: Client-side filter by duration tabs (no page reload)
10. Treatment Search: Client-side search/filter by name and category
11. Video: HTML5 <video> tag for /vtour.MOV with poster image
12. SEO: next/metadata for each page, structured data (LocalBusiness schema)
13. Mobile: 100% responsive, mobile-first breakpoints
14. Performance: Lazy loading images, prefetch booking links
15. Analytics: Google Tag Manager placeholder
```

---

## FILE STRUCTURE RECOMMENDATION

```
/app
  /page.tsx                    → Home
  /about/page.tsx              → About Us
  /packages/page.tsx           → Packages (main conversion page)
  /accommodation/page.tsx      → Accommodation
  /treatments/page.tsx         → Treatments
  /gallery/page.tsx            → Gallery
  /contact/page.tsx            → Contact
  /blog/page.tsx               → Blog index
  /blog/[slug]/page.tsx        → Blog post
  /layout.tsx                  → Root layout (nav + footer)

/components
  /ui
    Button.tsx
    Badge.tsx
    Card.tsx
  /layout
    Navbar.tsx
    Footer.tsx
    FloatingWhatsApp.tsx
  /sections
    Hero.tsx
    PackageCard.tsx
    TreatmentCard.tsx
    VillaCard.tsx
    ReviewCarousel.tsx
    CTABand.tsx
    TrustBar.tsx
    NewsletterSignup.tsx
    WhatToExpect.tsx
    FAQAccordion.tsx

/lib
  packages.ts                  → Package data array
  treatments.ts                → Treatment data array
  villas.ts                    → Villa data array

/public
  /images                      → All optimised images
  vtour.MOV                    → Video tour
```

---

## BOOKING LINKS REFERENCE

```
Main Booking Engine:  https://booking.profitroom.com/en/riverviewvillas/home

Package Direct Links:
854188 → 3-Night Hibiscus Vitality
854176 → 3-Night Araliya Healing
854158 → 3-Night Lotus Wellness
854674 → 5-Night Lotus Weight Loss
854678 → 5-Night Hibiscus Pain Relief
854680 → 5-Night Araliya Anti-Stress
854682 → 7-Night Hibiscus Pain Relief
854684 → 7-Night Araliya Anti-Stress & Insomnia
854686 → 7-Night Lotus Weight Loss
876646 → 14-Night Panchakarma Detox ⭐
860456 → 14-Night Diabetes Management
860454 → 14-Night Tinnitus Treatment
860452 → 14-Night Blood Pressure Management
860450 → 14-Night Cholesterol Management
860448 → 14-Night Weight Loss Program
860446 → 14-Night Paralysis/Parkinson's
860444 → 14-Night Arthritis Treatment
860458 → 14-Night Skin Healing (Psoriasis)
860442 → 14-Night Migraine Relief
860530 → 14-Night Depression Relief
876648 → 21-Night Panchakarma Deep Healing ⭐ PREMIUM
860992 → 21-Night Diabetes Management
860988 → 21-Night Blood Pressure Management
860990 → 21-Night Tinnitus Treatment
860603 → 21-Night Cholesterol Management
860601 → 21-Night Weight Loss
860599 → 21-Night Paralysis/Parkinson's
860597 → 21-Night Arthritis Treatment
860596 → 21-Night Migraine Relief
860530 → 21-Night Depression Relief

Booking URL pattern:
https://booking.profitroom.com/en/riverviewvillas/details/offer/{OFFER_ID}
```

---

## REFERENCE IMAGES NOTE

When reference images are provided, apply these design principles:
- Match the premium, editorial tone of the reference
- Adapt typography and layout to the Sacred Luxury aesthetic defined above
- Preserve the warm earth/gold/cream palette regardless of reference
- Ensure all conversion elements (CTAs, trust signals, booking buttons) remain prominent
- The reference is inspiration for visual quality, not a template to copy

---

*Document prepared for Claude Code use — River View Villas Website Redesign*
*Version 1.0 · April 2025*
