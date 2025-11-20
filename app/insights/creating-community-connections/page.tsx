import Image from 'next/image'
import Link from 'next/link'

export default function CreatingCommunityConnections() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-primary-900 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Insights</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold max-w-3xl">
            Creating Community Connections That Last Far Beyond Move-In Day
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-50">
            We believe independence flourishes when residents feel rooted in their neighbourhoods, so every care plan
            includes purposeful opportunities to contribute, socialise, and belong.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Loneliness is one of the greatest barriers to recovery. When residents first arrive, many carry difficult
                memories of isolation or fractured relationships. Unity Care Living responds by designing a community
                connection pathway alongside each support plan. We start small—coffee mornings with neighbours, house brunch
                clubs, or gardening in our courtyard—and gradually introduce wider opportunities such as volunteering at
                local food banks, joining sports teams, or taking on paid apprenticeships.
              </p>
              <p>
                Our community coordinators actively map the cultural and social assets across Surrey. They maintain
                partnerships with arts venues, colleges, employers, and advocacy groups so residents can explore new hobbies
                without financial barriers. We also host quarterly community forums where partners, families, and residents
                gather to celebrate milestones and co-design future projects. These events have sparked walking groups,
                parent peer-support circles, and intergenerational storytelling evenings that fill our homes with laughter.
              </p>
              <p>
                Connection should be sustainable, so we focus on confidence. Residents learn practical skills such as travel
                planning, digital literacy, and conversation techniques that make socialising feel safe. Staff accompany them
                on first visits, then fade support as independence grows. When it is time to move on, residents leave with a
                personalised community passport listing all the clubs, mentors, and services they can lean on. The result is a
                safety net woven from real friendships rather than services alone.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-primary-200 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-800 transition hover:bg-primary-50"
              >
                Explore partnership work
              </Link>
            </div>
            <div className="space-y-6">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/slider/slide-1.png" alt="Residents volunteering" fill className="object-cover" />
              </div>
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-xl">
                <Image src="/slider/slide-3.png" alt="Community celebration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


