export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">Who we are</h1>
          <p className="text-xl md:text-2xl text-center text-primary-100 font-semibold">Our Space. Our Home.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Empowering Independent Living Through Compassionate Care
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Unity Care Living is a supported living provider in Surrey, specialising in empowering vulnerable adults to achieve independence within their community. We provide comprehensive mental health support, learning disability services, and specialised care for adults who need assistance maintaining independent living.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Our person-centered approach is built on the foundation of care and compassion – fostering a collaborative environment where residents are supported to grow, learn valuable life skills, and work toward achieving their personal goals. We believe that with the right support, every individual can thrive and contribute meaningfully to their community.
            </p>

            {/* Mission Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Transforming Lives Through Dignity, Respect, and Empowerment
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                At Unity Care Living, we are dedicated to delivering exceptional, person-centered supported living services that enable our residents to live safely and independently within the local community. Our mission is to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg text-gray-600 mb-6">
                <li><strong>Promote Independence:</strong> Empower individuals to take control of their lives while providing the security of professional support</li>
                <li><strong>Ensure Safety & Wellbeing:</strong> Create a secure environment where residents can flourish without compromising their autonomy</li>
                <li><strong>Foster Community Integration:</strong> Support residents in building meaningful connections within the broader community</li>
                <li><strong>Uphold Dignity:</strong> Treat every individual with respect, recognising their unique strengths, challenges, and aspirations</li>
              </ul>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves the opportunity to reach their full potential, regardless of the mental health challenges or learning disabilities they may face.
              </p>
            </div>

            {/* Facility Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our State-of-the-Art Facility
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Modern Supported Living Accommodation in Surrey
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our purpose-built facility represents a new standard in supported living accommodation. This innovative development has been specifically designed to meet the diverse needs of vulnerable adults requiring varying levels of support.
              </p>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">Facility Features:</h4>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 mb-6">
                <li><strong>Complete Furnishing:</strong> Move-in ready accommodations with quality furniture and appliances</li>
                <li><strong>24/7 Professional Support:</strong> Round-the-clock on-site care team for peace of mind</li>
                <li><strong>Community Spaces:</strong> Shared areas designed to encourage social interaction and skill development</li>
              </ul>
              <p className="text-lg text-gray-600">
                This development aligns with government initiatives to provide suitable, affordable housing solutions for vulnerable individuals, helping bridge the gap between institutional care and complete independence.
              </p>
            </div>

            {/* Team Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Expert Care Team
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Qualified Professionals Committed to Transforming Lives
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Our multidisciplinary team consists of highly trained professionals who specialise in supporting adults with complex needs. Each team member brings extensive experience in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 mb-6">
                <li><strong>Mental Health Support:</strong> Evidence-based interventions for anxiety, depression, bipolar disorder, and other mental health conditions</li>
                <li><strong>Learning Disability Care:</strong> Personalised support strategies for individuals with developmental disabilities</li>
                <li><strong>Behavioural Support:</strong> Specialised approaches for managing challenging behaviours with compassion and understanding</li>
                <li><strong>Life Skills Development:</strong> Practical training in daily living skills, budgeting, cooking, and community integration</li>
              </ul>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-700 mb-4">Our Approach:</h4>
                <p className="text-lg text-gray-600 mb-6">
                  Our compassionate staff work collaboratively with each resident to develop individualised care plans that respect their unique circumstances, cultural background, and personal aspirations. We believe in building therapeutic relationships based on trust, mutual respect, and shared goals.
                </p>
              </div>
            </div>

            {/* Who We Support Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Who We Support:</h3>
              <p className="text-lg text-gray-600 mb-4">
                We provide specialised supported living services for adults aged 18-70 who experience:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <li><strong>Mental Health Challenges:</strong> Including anxiety disorders, depression, schizophrenia, and personality disorders</li>
                <li><strong>Learning Disabilities:</strong> Developmental disabilities that impact independent living skills</li>
                <li><strong>Housing Instability:</strong> Individuals at risk of homelessness who need structured support</li>
                <li><strong>Social Isolation:</strong> Adults who would benefit from community-based support and social connections</li>
                <li><strong>Transition Needs:</strong> Those moving from institutional care to independent living</li>
              </ul>
            </div>

            {/* Partnerships Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Connecting Communities
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Unity Care Living welcomes partnerships with local authorities, healthcare providers, and community organisations committed to supporting vulnerable adults in achieving independence.
              </p>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">How We Can Help:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
                <li><strong>Local Authority Partnerships:</strong> Collaborate with social services to provide housing solutions for vulnerable residents</li>
                <li><strong>Healthcare Provider Referrals:</strong> Work with NHS trusts and mental health services for seamless care transitions</li>
                <li><strong>Community Organisation Support:</strong> Partner with charities and advocacy groups to expand support networks</li>
                <li><strong>Family Consultations:</strong> Provide guidance and support for families navigating care options for their loved ones</li>
              </ul>
            </div>

            {/* Why Choose Us Section */}
            <div className="mb-12 bg-primary-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Unity Care Living:
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Proven Track Record:</strong> Established expertise in supported living services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Person-Centred Care:</strong> Individualised support plans tailored to each resident&apos;s needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Modern Facilities:</strong> Purpose-built accommodation designed for comfort and accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Qualified Staff:</strong> Experienced professionals committed to exceptional care standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Community Integration:</strong> Focus on building connections within the local community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-700 mr-2">✓</span>
                  <span><strong>Regulatory Compliance:</strong> Fully licensed and inspected to ensure quality standards</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-lg mb-6">
                Ready to learn more about how Unity Care Living can support vulnerable adults in your community? Contact us today to discuss partnership opportunities and explore how our innovative supported living model can make a difference in the lives of those who need it most.
              </p>
              <a
                href="/contact-us"
                className="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

