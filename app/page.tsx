import Image from 'next/image'
import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  return (
    <div className="min-h-screen space-y-12">
      <HeroSlider />

      {/* Services Section */}
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="grid max-w-6xl mx-auto gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500 mb-4">
                Everything Needed To Thrive
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 fade-up-delayed">
                Supported living pathways that blend clinical care with homely comfort
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We help people with complex needs sustain their tenancy and build stability through personalised
                wraparound services.
              </p>
              <div className="space-y-4">
                {[
                  'Person-centred housing support tailored to individual circumstances',
                  'Mental health crisis intervention and ongoing emotional wellbeing assistance',
                  'Daily living skills development to promote long-term independence',
                  'Tenancy sustainment support to prevent homelessness',
                  'Community integration and social connection facilitation',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-bold">
                      ✓
                    </span>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary-700">24/7</p>
                  <p className="text-sm uppercase tracking-wide text-gray-500">On-Site Support</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary-700">12+</p>
                  <p className="text-sm uppercase tracking-wide text-gray-500">Specialist Programs</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-100 to-white blur-xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/homepage/home-1.png"
                  alt="Support workers assisting resident"
                  width={800}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Film */}
      <section className="relative my-20 fade-up">
        <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] overflow-hidden isolate rounded-[2.5rem] shadow-[0_30px_80px_rgba(7,19,19,0.35)]">
          <video
            src="/media/our-place.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
            poster="/slider/slide-1.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl space-y-4 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">
                  Our space. Our stories.
                </p>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  Step inside Unity Care Living and feel the calm, homely energy residents experience every day.
                </h3>
                <p className="text-lg text-primary-50">
                  This short film captures the warmth of our community, the dedication of our teams, and the sense of safety
                  that comes from truly supported living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Unity Care Living */}
      <section className="py-20 bg-gray-50 fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Life at Unity</p>
              <h2 className="text-4xl font-bold text-gray-900 slide-in-left">
                Homely spaces filled with warmth, purpose, and daily inspiration
              </h2>
              <p className="text-lg text-gray-600">
                Residents enjoy beautifully designed accommodation, restorative wellbeing sessions, and uplifting communal
                experiences that encourage friendships and personal growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white p-6 shadow-[0px_15px_40px_rgba(67,95,93,0.08)] hover:-translate-y-1 transition">
                  <p className="text-3xl font-bold text-primary-700 mb-2">Creative</p>
                  <p className="text-gray-600">Art, music, and therapeutic workshops tailored to personal interests.</p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-[0px_15px_40px_rgba(67,95,93,0.08)] hover:-translate-y-1 transition">
                  <p className="text-3xl font-bold text-primary-700 mb-2">Connected</p>
                  <p className="text-gray-600">Community outings and volunteering that build pride and belonging.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="relative h-80 sm:h-full overflow-hidden rounded-3xl shadow-xl pulse-slow">
                <Image
                  src="/homepage/home-2.png"
                  alt="Residents enjoying a communal activity"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <div className="relative h-48 overflow-hidden rounded-3xl shadow-xl sm:h-56 pulse-slow">
                  <Image
                    src="/homepage/home-3.png"
                    alt="Support professional leading wellbeing session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-3xl shadow-xl sm:h-56 pulse-slow">
                  <Image
                    src="/homepage/home-4.png"
                    alt="Modern supported living apartment interior"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section className="relative py-24 fade-up">
        <div className="absolute inset-0">
          <Image
            src="/slider/slide-3.png"
            alt="Collaborative support background"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="h-full w-full bg-gradient-to-r from-primary-900/80 via-primary-900/60 to-primary-800/40" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] bg-white rounded-[2.5rem] shadow-[0_30px_80px_rgba(13,24,23,0.25)] overflow-hidden">
            <div className="p-10 md:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Partnership approach</p>
              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                A collaborative model that champions independence with dignity
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Our care philosophy centres on collaborative goal-setting. We work alongside each person to identify their
                aspirations and create achievable pathways. Through positive mentorship, consistent encouragement, and
                holistic support, we recognise and nurture each individual&apos;s unique strengths and potential.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {[
                  { label: 'Family meetings and transparent updates', accent: 'Family focused' },
                  { label: 'Integrated working with NHS, councils & charities', accent: 'Multi-agency' },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-primary-100 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">{item.accent}</p>
                    <p className="mt-3 text-base text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/homepage/home-3.png"
                alt="Team collaboration session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-6 backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Outcome focused</p>
                <p className="mt-2 text-lg text-gray-800">
                  92% of residents report improved wellbeing and sense of safety within their first three months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Why choose us</p>
                <h2 className="mt-3 text-4xl font-bold text-gray-900">
                  Trusted expertise with a compassionate,<br className="hidden md:block" /> forward-thinking mindset
                </h2>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-primary-100 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
              >
                Meet The Team →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Specialist Clinical Team',
                  copy: 'Experienced nurses, behavioural specialists, and support coaches working together every day.',
                },
                {
                  title: 'Personal Learning Journeys',
                  copy: 'Flexible, person-led care plans that adapt to changing needs and celebrate every win.',
                },
                {
                  title: 'Life Skills & Independence',
                  copy: 'Evidence-backed curriculum blending daily living, financial literacy, and employment readiness.',
                },
                {
                  title: 'Safe & Respectful Homes',
                  copy: 'Purpose-built environments designed to promote dignity, choice, and long-term stability.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-primary-50 bg-gradient-to-br from-white to-primary-50/40 p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white text-lg font-bold">
                      {item.title.split(' ')[0][0]}
                    </span>
                    <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-gray-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-24 fade-up">
        <div className="absolute inset-0">
          <Image
            src="/slider/slide-2.png"
            alt="Support worker welcoming resident"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-primary-900/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-100">Start a conversation</p>
            <h2 className="text-4xl md:text-5xl font-bold">Get in touch for all enquiries and referrals</h2>
            <p className="text-lg text-primary-50">
              Whether you are a commissioner, care professional, or family member, our dedicated team is ready to explore
              how Unity Care Living can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center rounded-full bg-white px-8 py-3 text-primary-800 text-lg font-semibold shadow-xl shadow-black/20 transition hover:bg-primary-50"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/60 px-8 py-3 text-lg font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

