import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Explore Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Blogs Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Blogs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Personalised Support Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Holistic Approach To Mental Health
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition">
                  Creating Community Connections
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Your Address Here</li>
              <li>🌐 unitycareliving.com</li>
              <li>✉️ info@unitycareliving.com</li>
              <li>📞 Your Phone Number</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition">YouTube</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="text-lg font-semibold text-white mb-2">Unity Care Living. Our Space. Our Home.</p>
          <p>&copy; {new Date().getFullYear()} Unity Care Living. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

