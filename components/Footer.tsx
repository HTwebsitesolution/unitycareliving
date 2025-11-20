import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/slider/slide-4.png"
          alt="Unity Care Living residents smiling"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/85 via-primary-800/75 to-primary-700/70" />
      </div>

      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-10 lg:grid-cols-4 text-white">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Unity Care Living logo" width={56} height={56} className="rounded-xl bg-white/90 p-2" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary-100">Unity Care Living</p>
                  <p className="text-xl font-semibold">Our Space. Our Home.</p>
                </div>
              </div>
              <p className="text-primary-50 leading-relaxed">
                We provide calming, beautifully supported living environments where adults can rebuild confidence, develop
                independence, and feel genuinely at home.
              </p>
              <div className="flex space-x-4 text-primary-50">
                <a href="#" className="hover:text-white transition">Facebook</a>
                <a href="#" className="hover:text-white transition">YouTube</a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Explore</p>
              <ul className="space-y-3 text-primary-50">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/services', label: 'Services' },
                  { href: '/contact-us', label: 'Contact Us' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Insights</p>
              <ul className="space-y-3 text-primary-50">
                {[
                  { label: 'Personalised Support Plans', href: '/insights/personalised-support-plans' },
                  { label: 'Holistic Approach To Mental Health', href: '/insights/holistic-approach-to-mental-health' },
                  { label: 'Creating Community Connections', href: '/insights/creating-community-connections' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary-100 mb-3">Contact</p>
              <ul className="space-y-3 text-primary-50">
                <li>📍 Your Address Here, Surrey</li>
                <li>📞 Your Phone Number</li>
                <li>✉️ info@unitycareliving.com</li>
                <li>🌐 unitycareliving.com</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/20 pt-6 flex flex-col gap-4 text-sm text-primary-50 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Unity Care Living. All Rights Reserved.</p>
            <p>
              Designed by{' '}
              <a href="https://htwebsolution.com" target="_blank" rel="noreferrer" className="font-semibold text-white hover:underline">
                HTwebsolution
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

