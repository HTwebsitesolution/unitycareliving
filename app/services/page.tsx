import Image from 'next/image'
import Link from 'next/link'

const focusAreas = [
  {
    title: '24/7 Supported Living',
    copy: 'Clinical teams provide round-the-clock supervision, medication management, and crisis response so residents feel safe.',
    image: '/services/service-1.png',
  },
  {
    title: 'Therapeutic Lifestyle',
    copy: 'Holistic routines blending therapy, movement, nutrition, and mindfulness to nurture body and mind.',
    image: '/services/service-2.png',
  },
  {
    title: 'Skills & Independence',
    copy: 'Daily living coaching covering budgeting, tenancy sustainment, cooking, and transport confidence.',
    image: '/services/service-3.png',
  },
]

const programmes = [
  'Clinical mental health support with psychiatrists, psychologists, and nurse practitioners.',
  'Purpose-built accommodation ranging from studios to shared apartments with adaptive technology.',
  'Group programmes covering trauma recovery, self-regulation, and peer support.',
  'Educational and vocational coaching with links to colleges, apprenticeships, and employers.',
  'Family and relationship services including mediation, supervised visits, and psychoeducation.',
  'Community connection pathways: volunteering, clubs, mentorships, and local partnerships.',
]

export default function Services() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <Image
          src="/services/service-4.png"
          alt="Unity Care Living support team"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/70 to-primary-600/70" />
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Our services</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Complete supported living pathways for adults with complex needs
            </h1>
            <p className="text-lg text-primary-50">
              We combine therapeutic care, safe accommodation, and vibrant community opportunities so every resident can grow in a
              place that feels like home.
            </p>
            <div className="flex flex-wrap gap-8 text-primary-50">
              <div>
                <p className="text-4xl font-bold text-white">120+</p>
                <p className="text-sm uppercase tracking-[0.2em]">Residents supported</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm uppercase tracking-[0.2em]">On-site teams</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">30+</p>
                <p className="text-sm uppercase tracking-[0.2em]">Partner agencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Person-first approach</p>
            <h2 className="text-4xl font-bold text-gray-900">
              Care plans that feel personal, practical, and hopeful
            </h2>
            <p className="text-lg text-gray-600">
              Every resident journey begins with curiosity and co-production. We bring clinicians, families, and commissioners
              together to design flexible support that evolves over time.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-3xl border border-primary-50 bg-white shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image src={area.image} alt={area.title} fill className="object-cover" style={{ objectPosition: 'center 20%' }} />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-900">{area.title}</h3>
                  <p className="text-gray-600">{area.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-lg text-gray-600">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Specialist housing</p>
            <h2 className="text-4xl font-bold text-gray-900">Modern accommodation that balances calm with clinical rigour</h2>
            <p>
              Apartments are furnished with adaptive technology, sensory lighting, and secure access, while communal lounges host
              film nights, cooking classes, and wellbeing circles. Outdoor courtyards offer gardening projects and quiet time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>24/7 onsite staff with digital nurse-call systems and rapid-response protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Therapeutic rooms for counselling, art therapy, and family visits.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Smart concierge app for maintenance requests, feedback, and event listings.</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary-100 to-white blur-3xl" aria-hidden />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/services/service-5.png" alt="Modern communal lounge" width={900} height={700} className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Core programmes</p>
            <h2 className="text-4xl font-bold text-gray-900">Integrated services that evolve with each resident</h2>
            <p className="text-lg text-gray-600">
              By blending clinical care, life-skills coaching, and community participation, we create wraparound plans residents
              can sustain long after they move on.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {programmes.map((line) => (
              <div
                key={line}
                className="flex items-start gap-3 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:bg-primary-50/40"
              >
                <span className="text-primary-700 text-xl font-bold mt-1">✓</span>
                <p className="text-gray-700">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Group therapy & wellbeing</p>
            <h2 className="text-4xl font-bold text-gray-900">Specialist groups that heal, skill-build, and connect</h2>
            <p>
              Residents can choose from trauma recovery circles, domestic abuse programmes, SHOUT emotional-awareness sessions,
              anger management, and mindfulness groups. Creative arts, exercise therapy, and community outings bring balance and
              joy.
            </p>
            <p>
              Peer mentors with lived experience support each programme, helping residents develop confidence and
              self-regulation while building friendships.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/services/service-6.png"
                alt="Group therapy circle"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/services/service-7.png"
                alt="Creative wellbeing session"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-gray-600 text-lg">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-500">Referrals & partnerships</p>
            <h2 className="text-4xl font-bold text-gray-900">Simple, transparent referral process for professionals</h2>
            <p>
              We work closely with local authorities, NHS trusts, housing providers, and criminal justice partners. Each referral
              receives a rapid response, detailed needs assessment, and collaborative placement planning.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Dedicated referrals team with weekly placement meetings for timely decisions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Comprehensive risk assessments, tenancy planning, and transition support.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-700 text-xl font-bold">•</span>
                <span>Transparent reporting, outcome tracking, and commissioner dashboards.</span>
              </li>
            </ul>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
            >
              Refer or collaborate
            </Link>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-96">
            <Image src="/services/service-8.png" alt="Referral discussion" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <Image
          src="/services/service-9.png"
          alt="Unity Care Living residents"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Let’s talk</p>
            <h2 className="text-4xl font-bold">Ready to explore placements or bespoke packages?</h2>
            <p className="text-lg text-primary-50">
              Our referrals team will tailor a guided tour, share outcome data, and co-design a pathway that matches the needs of
              the people you support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-700 font-semibold shadow-lg shadow-black/20 transition hover:bg-primary-50"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-white font-semibold transition hover:bg-white/10"
              >
                Discover our story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

