import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { number: "10K+", label: "Happy Travelers", icon: "😊" },
  { number: "500+", label: "Tour Packages", icon: "📦" },
  { number: "100+", label: "Destinations", icon: "🗺️" },
  { number: "24/7", label: "Support", icon: "🎧" },
];

const features = [
  { icon: "🌍", title: "Best Destinations", desc: "Explore thousands of breathtaking places worldwide with our handpicked, carefully curated travel packages for every type of traveler." },
  { icon: "💰", title: "Affordable Prices", desc: "Get the best deals without compromising on quality. We compare hundreds of options to bring you the most value for your budget." },
  { icon: "🔒", title: "Secure Booking", desc: "Book with confidence using our JWT-secured platform. Your data and payments are always protected with enterprise-grade security." },
  { icon: "⭐", title: "Trusted Service", desc: "Rated 4.9/5 by over 10,000 travelers globally. Our expert travel consultants are always ready to craft your perfect itinerary." },
  { icon: "✈️", title: "Easy Planning", desc: "From flight bookings to hotel arrangements, we simplify every step of your journey so you can focus on the experience." },
  { icon: "📱", title: "Manage Anywhere", desc: "Access and manage your bookings anytime, anywhere with our fully responsive platform built for modern travelers." },
];

const destinations = [
  { name: "Switzerland", tag: "Europe", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", desc: "Snowy Alps, crystal lakes & storybook villages.", price: "₹85,000" },
  { name: "Bali", tag: "Asia", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80", desc: "Tropical paradise with temples, rice fields & beaches.", price: "₹45,000" },
  { name: "Paris", tag: "Europe", img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?w=600", desc: "The city of romance, iconic art & world-class cuisine.", price: "₹95,000" },
  { name: "Rajasthan", tag: "India", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", desc: "Royal palaces, desert safaris & vibrant culture.", price: "₹18,000" },
  { name: "Tokyo", tag: "Asia", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80", desc: "Where ancient tradition meets neon-lit modernity.", price: "₹1,10,000" },
  { name: "Maldives", tag: "Asia", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80", desc: "Overwater bungalows & the clearest turquoise waters.", price: "₹1,30,000" },
];

const testimonials = [
  { name: "Aarav Sharma", location: "Delhi", rating: 5, text: "TravelNest made planning our Bali trip so seamless. The interface is beautiful and everything just worked perfectly." },
  { name: "Priya Menon", location: "Bangalore", rating: 5, text: "Booked our Switzerland tour in minutes. The tour details page was incredibly helpful. Will definitely use again!" },
  { name: "Rohit Das", location: "Kolkata", rating: 5, text: "As someone who travels frequently for work, this platform saves me hours. The JWT login keeps my data secure too." },
];

const Home = () => {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center text-white"
        style={{
          minHeight: "92vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c4a6e 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        {/* Decorative orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #34d399, transparent)" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            🏆 India&apos;s Most Trusted Travel Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6" style={{ fontFamily: "serif" }}>
            Discover the World,<br/>
            <span className="text-blue-400">One Tour at a Time</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Plan, book, and manage extraordinary travel experiences with our full-stack tour planning platform — built with MERN stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/view" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-base">
              🌍 Explore Tours
            </Link>
            <Link to="/add" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 text-base backdrop-blur-sm">
              ➕ Add New Tour
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ number, label, icon }) => (
            <div key={label} className="text-center text-white">
              <div className="text-3xl mb-1">{icon}</div>
              <div className="text-3xl md:text-4xl font-extrabold">{number}</div>
              <div className="text-blue-200 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Built for Modern Travelers</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Everything you need to plan, manage and enjoy the perfect trip — all in one place.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl mb-5">{icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Destinations ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Top Picks</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Popular Destinations</h2>
            <p className="text-gray-500 mt-4">Discover our most-loved travel packages, handpicked for you.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map(({ name, tag, img, desc, price }) => (
              <div key={name} className="rounded-2xl overflow-hidden shadow-lg card-hover bg-white border border-gray-100 group">
                <div className="relative overflow-hidden h-52">
                  <img src={img} alt={name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{tag}</span>
                  <span className="absolute bottom-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">{price}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
                  <Link to="/view" className="inline-block mt-4 text-blue-600 text-sm font-semibold hover:underline">
                    View Packages →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/view" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5">
              View All Tours →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "serif" }}>What Travelers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map(({ name, location, rating, text }) => (
              <div key={name} className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-yellow-400 text-lg mb-4">{"★".repeat(rating)}</div>
                <p className="text-gray-300 text-sm leading-relaxed italic">"{text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-gray-400 text-xs">{location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)" }}>
        <div className="max-w-4xl mx-auto text-center px-6 text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "serif" }}>Ready for Your Next Adventure?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of travelers who use TravelNest to discover, plan, and book unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Get Started Free
            </Link>
            <Link to="/view" className="bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5">
              Browse Tours
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✈️</span>
            <div>
              <div className="text-white font-bold">TravelNest</div>
              <div className="text-gray-500 text-xs">Tour & Travel Planning System</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/home" className="hover:text-white transition">Home</Link>
            <Link to="/about" className="hover:text-white transition">About</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
            <Link to="/view" className="hover:text-white transition">Tours</Link>
          </div>
          <p className="text-xs text-gray-600">© 2026 TravelNest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
