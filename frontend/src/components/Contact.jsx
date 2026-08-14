import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: "📍", label: "Address", value: "Kolkata, West Bengal, India 700001", color: "bg-blue-50 text-blue-600" },
    { icon: "📞", label: "Phone", value: "+91 98765 43210", color: "bg-green-50 text-green-600" },
    { icon: "✉️", label: "Email", value: "support@travelnest.in", color: "bg-red-50 text-red-500" },
    { icon: "⏰", label: "Working Hours", value: "Mon–Sat, 9 AM – 7 PM IST", color: "bg-yellow-50 text-yellow-600" },
  ];

  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Hero */}
      <section className="relative py-24 text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}>
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "serif" }}>Contact Us</h1>
          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about a tour? Need help planning your trip? Our team is ready to assist you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ icon, label, value, color }) => (
            <div key={label} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-2xl mb-4`}>{icon}</div>
              <h3 className="font-bold text-gray-800">{label}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left Info */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Let&apos;s Talk</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>We&apos;d Love to Hear from You</h2>
            <p className="text-gray-600 mt-5 leading-8">
              Whether you&apos;re planning a weekend getaway or a month-long international adventure, our travel experts are here to help. Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { title: "Tour Inquiries", desc: "Questions about specific packages? Ask us anything about itineraries, pricing, or availability." },
                { title: "Custom Packages", desc: "Want a tailor-made tour? We'll design the perfect experience based on your preferences." },
                { title: "Technical Support", desc: "Having trouble with the platform? Our tech team is on standby to help you." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="min-w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">✓</div>
                  <div>
                    <div className="font-semibold text-gray-800">{title}</div>
                    <div className="text-gray-500 text-sm mt-1">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="TravelNest Location"
                src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-800">Message Sent!</h2>
                <p className="text-gray-500 mt-3">Thank you for reaching out. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: "serif" }}>Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-1.5">Full Name</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-semibold mb-1.5">Email</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="e.g. Inquiry about Bali Tour"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm" />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">Message</label>
                    <textarea rows="5" name="message" value={form.message} onChange={handleChange} required placeholder="Tell us how we can help you..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white text-sm" />
                  </div>

                  <button type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    📨 Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              ["How do I book a tour?", "Register an account, browse available tours, and click on any tour to view details and complete your booking."],
              ["Can I cancel my booking?", "Yes, free cancellation is available up to 48 hours before the departure date. Contact our team for assistance."],
              ["Are the prices per person?", "All prices listed on TravelNest are per person unless otherwise specified on the tour details page."],
              ["Is my data secure?", "Yes. We use JWT Authentication and industry-standard encryption to protect all your personal and payment information."],
            ].map(([q, a]) => (
              <details key={q} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                <summary className="cursor-pointer flex justify-between items-center px-6 py-5 font-semibold text-gray-800 select-none">
                  {q}
                  <span className="text-blue-600 text-xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
