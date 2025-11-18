import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Empowering Independent Living Through Compassionate Support
            </h1>
            <p className="text-xl md:text-2xl mb-6 font-semibold text-primary-100">
              Our Space. Our Home.
            </p>
            <p className="text-lg md:text-xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Unity Care Living provides specialist supported living services for vulnerable adults and individuals experiencing mental health challenges who need assistance maintaining their independence in a home environment.
            </p>
            <Link
              href="/about"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Supported Living Services</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              We help people with complex needs sustain their tenancy and build stability through:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold">•</span>
                <p className="text-lg text-gray-700">Person-centered housing support tailored to individual circumstances</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold">•</span>
                <p className="text-lg text-gray-700">Mental health crisis intervention and ongoing emotional wellbeing assistance</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold">•</span>
                <p className="text-lg text-gray-700">Daily living skills development to promote long-term independence</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold">•</span>
                <p className="text-lg text-gray-700">Tenancy sustainment support to prevent homelessness</p>
              </div>
              <div className="flex items-start md:col-span-2">
                <span className="text-primary-700 mr-3 text-xl font-bold">•</span>
                <p className="text-lg text-gray-700">Community integration and social connection facilitation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">A Partnership Approach to Independent Living</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our care philosophy centers on collaborative goal-setting. We work alongside each person to identify their aspirations and create achievable pathways forward. Through positive mentorship, consistent encouragement, and holistic support, we recognize and nurture each individual&apos;s unique strengths and potential.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Why Choose Unity Care Living?</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold mt-1">•</span>
                <p className="text-lg text-gray-700">Experienced team specialising in mental health and vulnerability support</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold mt-1">•</span>
                <p className="text-lg text-gray-700">Flexible, person-led care plans that adapt to changing needs</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold mt-1">•</span>
                <p className="text-lg text-gray-700">Focus on building life skills, confidence, and self-sufficiency</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold mt-1">•</span>
                <p className="text-lg text-gray-700">Safe, respectful environment that promotes dignity and choice</p>
              </div>
              <div className="flex items-start">
                <span className="text-primary-700 mr-3 text-xl font-bold mt-1">•</span>
                <p className="text-lg text-gray-700">Proven track record helping individuals achieve sustainable independence</p>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg text-center">
              <p className="text-xl text-gray-800 font-semibold">
                We believe everyone deserves the opportunity to thrive in their own home with the right support in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get In Touch For All Enquiries</h2>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

