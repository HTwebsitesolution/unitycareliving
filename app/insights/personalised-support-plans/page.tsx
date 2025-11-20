import Image from 'next/image'
import Link from 'next/link'

const stats = [
  { label: 'Residents engaged', value: '150+' },
  { label: 'Review cadence', value: 'Every 8 weeks' },
  { label: 'Collaborative partners', value: '12 clinical teams' },
]

export default function PersonalisedSupportPlans() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Insights</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">
            Personalised Support Plans That Celebrate Every Individual
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-50">
            Our plans are living, breathing blueprints co-designed with residents, families, and professionals to ensure
            care always reflects the person first.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At Unity Care Living, personalisation is never a buzzword—it is the foundation for everything we do. Each
              new resident is welcomed with time, curiosity, and patience so we can truly understand who they are beyond a
              referral letter. During the first week, our clinicians, key workers, and life-skills coaches host relaxed
              goal-setting conversations over cups of tea, house tours, and community walks. We want to learn which daily
              routines feel safe, what situations trigger anxiety, and the ambitions residents are still holding on to,
              even if they have been buried for years. Those insights become the scaffolding for a support plan that reads
              like a person&apos;s story, not a checklist of tasks.
            </p>
            <p>
              Every plan combines therapeutic interventions, practical skills coaching, and wellness rituals tailored to the
              resident&apos;s pace. For example, a young adult rebuilding independence after a hospital admission might
              choose early-morning grounding exercises, mid-day budgeting sessions, and an art therapy group in the
              evenings. A mother reuniting with her family may prioritise trauma-informed counselling, supervised visiting
              hours, and confidence-building cooking workshops. Our teams meet weekly to discuss progress, noting small
              wins—the first time a resident joins communal dinner, or the day someone advocates for themselves with a
              landlord. These moments are celebrated because they prove the plan is working in real life.
            </p>
            <p>
              Personalised support plans must also stay flexible. Life changes quickly, so we schedule formal reviews every
              eight weeks and ad-hoc catch-ups whenever residents request them. Multidisciplinary partners are invited to
              contribute—GPs, therapists, social workers, and loved ones can join via video or in person. Together, we
              refine goals, update risk assessments, and redirect funding where it is most effective. The result is a
              constantly evolving document that keeps everyone aligned and gives residents a powerful sense of ownership
              over their future.
            </p>
            <div className="flex flex-wrap gap-6 text-primary-700 font-semibold">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
            >
              Discuss a referral
            </Link>
          </div>
          <div className="space-y-6">
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/homepage/home-1.png" alt="Resident planning session" fill className="object-cover" />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/homepage/home-3.png" alt="Support worker taking notes" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


