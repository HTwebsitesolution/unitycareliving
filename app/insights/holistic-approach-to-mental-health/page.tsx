import Image from 'next/image'
import Link from 'next/link'

export default function HolisticMentalHealth() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Insights</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">
            A Holistic Approach To Mental Health That Nurtures Body, Mind, and Community
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-50">
            Residents receive therapeutic care, physical wellness programming, and community connection opportunities so
            recovery feels balanced and sustainable.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Holistic care at Unity Care Living begins with the recognition that mental health does not exist in
              isolation. Feelings of safety, meaningful activity, nutrition, and social belonging all influence how a person
              heals. That is why our clinicians work hand-in-hand with occupational therapists, wellbeing coaches, peer
              mentors, and local partners to curate a wraparound programme for every resident. Morning routines may include
              breathwork, gentle stretching, or a mindful coffee in our communal garden. Throughout the week, residents can
              join life-skills workshops, trauma-informed talking therapies, sensory art sessions, and group outings to
              cultural events or volunteering placements.
            </p>
            <p>
              Our holistic model also keeps physical health front and centre. We coordinate GP appointments, medication
              reviews, nutrition plans, and tailored movement sessions—from low-impact yoga to energising dance classes.
              These activities are optional yet strongly encouraged because we consistently see how small successes in the
              body help unlock confidence in the mind. Residents often report improved sleep, reduced anxiety spikes, and a
              greater ability to self-regulate when they blend therapeutic work with somatic practices.
            </p>
            <p>
              Belonging is the final pillar. Each household creates its own rhythm through shared meals, celebration boards,
              and peer mentorship. Residents with lived experience of crisis act as ambassadors, welcoming newcomers and
              showing what recovery can look like. We also nurture connections beyond our walls—family mediation sessions,
              employer partnerships, and community volunteering make sure everyone feels part of something bigger. By
              prioritising the whole person, our holistic approach transforms mental health support from a service into a
              lifestyle that residents can sustain long after they move on.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
            >
              Meet our clinical team
            </Link>
          </div>
          <div className="space-y-6">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/homepage/home-4.png" alt="Mindfulness group" fill className="object-cover" />
            </div>
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/slider/slide-2.png" alt="Residents exercising" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


