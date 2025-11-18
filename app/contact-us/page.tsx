'use client'

import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">Contact Us</h1>
          <p className="text-xl md:text-2xl text-center text-primary-100 font-semibold">Our Space. Our Home.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch For All Enquiries</h2>
              <p className="text-lg text-gray-600">
                We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition shadow-lg"
                  >
                    Send
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Address</h4>
                    <p className="text-gray-600">
                      Your Address Here<br />
                      Surrey, UK
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:" className="hover:text-primary-700 transition">
                        Your Phone Number
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:info@unitycareliving.com" className="hover:text-primary-700 transition">
                        info@unitycareliving.com
                      </a>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">Website</h4>
                    <p className="text-gray-600">
                      <a href="https://unitycareliving.com" className="hover:text-primary-700 transition">
                        unitycareliving.com
                      </a>
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-300">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="bg-primary-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-primary-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition"
                        aria-label="YouTube"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

