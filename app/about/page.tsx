import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  { title: 'Promote Independence', copy: 'Flexible support that adjusts to each person’s pace, routines, and strengths.' },
  { title: 'Protect Wellbeing', copy: '24/7 safeguarding, therapeutic interventions, and spaces that feel calming.' },
  { title: 'Champion Community', copy: 'Partnerships with neighbours, councils, and families to keep everyone connected.' },
  { title: 'Uphold Dignity', copy: 'Residents lead their care plans, make informed choices, and feel genuinely heard.' },
]

const whoWeSupport = [
  'Adults navigating complex mental health or trauma',
  'People with learning disabilities or neurodiversity',
  'Individuals leaving hospital or institutional care',
  'Adults at risk of homelessness or social isolation',
  'Young adults transitioning into their first tenancy',
]

export default function About() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/about/about-1.png"
          alt="Unity Care Living resident smiling"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">About Unity Care Living</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Homes filled with warmth, clinical excellence, and courageous futures
            </h1>
            <p className="text-lg text-primary-50">
              We blend therapeutic support, life-skills coaching, and community partnerships so adults across Surrey can feel
              safe, confident, and excited about the next chapter of their lives.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-50">
              <div>
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="text-sm uppercase tracking-[0.2em]">Years delivering care</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm uppercase tracking-[0.2em]">On-site team</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">92%</p>
                <p className="text-sm uppercase tracking-[0.2em]">Resident wellbeing boost</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Our story</p>
            <h2 className="text-4xl font-bold text-gray-900 zoom-in animate">
              Built by practitioners who believe in home-first recovery
            </h2>
            <p>
              Unity Care Living was founded by a collective of nurses, social workers, and housing specialists who wanted to
              reimagine supported accommodation in Surrey. We saw too many people moving from service to service without a
              place that truly felt like theirs. Today, our homes pair carefully curated interiors with clinical rigour so
              residents can exhale, regroup, and focus on their goals.
            </p>
            <p>
              Every newcomer is greeted with curiosity. We take time to learn their story, cultural background, family ties,
              and the ambitions they still carry. That empathy fuels personalised plans covering therapy, education, finances,
              and meaningful daily routines.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-100 to-white blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/about/about-2.png" alt="Residents sharing a meal" width={900} height={700} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Mission & values</p>
            <h2 className="text-4xl font-bold text-gray-900 reveal-center animate">
              We are guided by dignity, safety, and opportunity
            </h2>
            <p className="text-lg text-gray-600">
              Our mission is to deliver person-led support that develops independence while protecting wellbeing. These four
              pillars shape every conversation, care plan, and home we create.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-primary-50 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900">{pillar.title}</h3>
                <p className="mt-3 text-gray-600">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/about/about-3.png" alt="Bright living spaces" fill className="object-cover" />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/about/about-4.png" alt="Supportive staff" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Spaces with purpose</p>
            <h2 className="text-4xl font-bold text-gray-900">Beautiful homes designed for stability and growth</h2>
            <p>
              From furnished studios to shared apartments, every apartment is move-in ready with soft furnishings, smart
              technology, secure access, and therapeutic lighting. Communal lounges host film nights, cooking classes, and
              support circles, while our outdoor courtyards provide quiet moments or gardening projects.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>24/7 on-site team, nurse-led medication management, and emergency response protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Dedicated wellbeing studio for mindfulness, physiotherapy, and creative expression.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Digital concierge app for maintenance, feedback, and community announcements.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Care team</p>
            <h2 className="text-4xl font-bold text-gray-900">Multidisciplinary experts working in true partnership</h2>
            <p>
              Our team includes registered mental health nurses, positive behaviour specialists, peer mentors, counsellors,
              and tenancy sustainment officers. Weekly MDT reviews ensure every resident has a circle of support focused on
              progress, not problems.
            </p>
            <p>
              Staff receive continuous development in trauma-informed care, safeguarding, cultural competency, and co-production
              so they can champion residents’ voices with humility and confidence.
            </p>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-96">
            <Image src="/about/about-5.png" alt="Unity Care Living team" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Who we support</p>
            <h2 className="text-4xl font-bold text-gray-900">Open doors for adults aged 18-70 across Surrey</h2>
            <p className="text-lg text-gray-600">
              We tailor placements for people with a wide range of needs. Our flexible staffing model allows us to increase or
              step-down support based on progress, ensuring placements remain successful.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {whoWeSupport.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
                <span className="text-primary-700 text-xl font-bold mt-1">✓</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <Image
          src="/slider/slide-2.png"
          alt="Partners meeting"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl text-center text-white space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Partnerships</p>
            <h2 className="text-4xl font-bold">Working side-by-side with commissioners, clinicians, and families</h2>
            <p className="text-lg text-primary-50">
              Local authorities, NHS trusts, housing associations, and charities trust Unity Care Living to deliver responsive
              placements that keep individuals safe and on track. We provide transparent reporting, regular outcomes reviews, and
              open communication with everyone involved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 text-center text-white space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200">Ready to collaborate</p>
          <h2 className="text-4xl font-bold">Let’s design a supported living pathway that feels like home</h2>
          <p className="text-lg text-primary-50">
            Talk to our referrals team to explore placements, arrange visits, or co-design a bespoke service package for the people
            you support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-700 font-semibold shadow-lg shadow-black/20 transition hover:bg-primary-50"
            >
              Contact our team
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-white font-semibold transition hover:bg-white/10"
            >
              View services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

