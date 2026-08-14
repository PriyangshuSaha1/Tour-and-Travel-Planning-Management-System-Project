import React from "react";
import { Link } from "react-router-dom";

const team = [
  { name: "Arjun Mehta", role: "Lead Developer", emoji: "👨‍💻" },
  { name: "Sneha Roy", role: "UI/UX Designer", emoji: "🎨" },
  { name: "Karan Patel", role: "Backend Engineer", emoji: "⚙️" },
  { name: "Priya Das", role: "Travel Consultant", emoji: "✈️" },
];

const milestones = [
  { year: "2023", event: "TravelNest founded with a mission to simplify travel planning." },
  { year: "2024", event: "Launched the MERN-based platform with JWT authentication." },
  { year: "2025", event: "Crossed 5,000 happy users and 300+ tour packages." },
  { year: "2026", event: "Expanded to 100+ destinations across 30 countries." },
];

const About = () => {
  return (
    <div style={{ paddingTop: "72px" }}>

      {/* Hero */}
      <section className="relative py-24 text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}>
        <div className="absolute inset-0 opacity-15"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold" style={{ fontFamily: "serif" }}>About TravelNest</h1>
          <p className="mt-6 text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            We built TravelNest to make travel planning smarter, simpler, and more accessible for everyone — from first-time travelers to seasoned explorers.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Your Trusted Travel Partner</h2>
            <p className="text-gray-600 mt-6 leading-8">
              Our mission is to empower travelers with a seamless, secure, and beautiful platform to discover, plan, and manage tour packages. Built with the MERN stack and JWT authentication, TravelNest combines cutting-edge technology with a passion for travel.
            </p>
            <p className="text-gray-600 mt-4 leading-8">
              We believe every journey should be memorable and stress-free. From adding a new tour package to tracking all your travel plans in one place — we make it effortless.
            </p>
            <Link to="/view" className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5">
              Explore Tours →
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80" alt="Travel" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[["10K+", "Happy Travelers", "😊"], ["500+", "Tour Packages", "📦"], ["100+", "Destinations", "🗺️"], ["24/7", "Customer Support", "🎧"]].map(([n, l, e]) => (
            <div key={l}>
              <div className="text-4xl mb-2">{e}</div>
              <div className="text-4xl font-extrabold">{n}</div>
              <div className="text-blue-200 text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Technology</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Built with Modern Stack</h2>
            <p className="text-gray-500 mt-4">A full-stack MERN application with industry-standard best practices.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚛️", tech: "React.js", desc: "Fast, component-based UI with React Router for seamless navigation." },
              { icon: "🟩", tech: "Node.js + Express.js", desc: "Powerful backend REST API with scalable architecture." },
              { icon: "🍃", tech: "MongoDB + Mongoose", desc: "NoSQL database for flexible and efficient data management." },
              { icon: "🔐", tech: "JWT Authentication", desc: "Secure, stateless authentication protecting all private routes." },
              { icon: "🎨", tech: "Tailwind CSS", desc: "Utility-first CSS framework for responsive, beautiful designs." },
              { icon: "⚡", tech: "Vite", desc: "Lightning-fast development environment with hot module replacement." },
            ].map(({ icon, tech, desc }) => (
              <div key={tech} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-gray-800 text-lg">{tech}</h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Journey</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Our Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100" />
            <div className="space-y-10">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex items-start gap-6 pl-4">
                  <div className="min-w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm z-10">
                    {year}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 flex-1 shadow-sm border border-gray-100 mt-2">
                    <p className="text-gray-700 leading-relaxed">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">The Team</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3" style={{ fontFamily: "serif" }}>Meet the Builders</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(({ name, role, emoji }) => (
              <div key={name} className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-6xl mb-4">{emoji}</div>
                <h3 className="font-bold text-gray-800 text-lg">{name}</h3>
                <p className="text-blue-600 text-sm mt-1">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6 text-white">
          <h2 className="text-4xl font-bold" style={{ fontFamily: "serif" }}>Ready to Start Your Journey?</h2>
          <p className="mt-5 text-gray-400 text-lg">Create your account today and start exploring the world with TravelNest.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-xl">
              Get Started Free
            </Link>
            <Link to="/contact" className="bg-white/10 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
