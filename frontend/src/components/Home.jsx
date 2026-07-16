import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Explore the World
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
              Plan your dream vacation with ease. Discover amazing destinations,
              create unforgettable memories, and travel smarter with us.
            </p>

            <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition">
              Explore Tours
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-4">
              Making every journey comfortable and unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl">🌍</div>

              <h3 className="text-2xl font-bold mt-5">
                Best Destinations
              </h3>

              <p className="mt-4 text-gray-600">
                Explore thousands of beautiful places around the globe with
                carefully curated travel packages.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl">💰</div>

              <h3 className="text-2xl font-bold mt-5">
                Affordable Prices
              </h3>

              <p className="mt-4 text-gray-600">
                Get the best deals without compromising on quality and comfort.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
              <div className="text-5xl">⭐</div>

              <h3 className="text-2xl font-bold mt-5">
                Trusted Services
              </h3>

              <p className="mt-4 text-gray-600">
                Thousands of happy travelers trust us for memorable experiences.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Popular Destinations
            </h2>

            <p className="text-gray-600 mt-4">
              Discover our most loved travel destinations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Switzerland
                </h3>

                <p className="text-gray-600 mt-3">
                  Snowy mountains, peaceful lakes and unforgettable adventures.
                </p>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt=""
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Bali
                </h3>

                <p className="text-gray-600 mt-3">
                  Relax on beautiful beaches and experience tropical paradise.
                </p>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
              <img
  src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
  alt="Paris"
  className="h-64 w-full object-cover"
/>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Paris
                </h3>

                <p className="text-gray-600 mt-3">
                  Experience romance, culture and iconic landmarks.
                </p>

                <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready For Your Next Adventure?
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Start planning your dream trip today with our trusted travel experts.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Book Now
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

          <h2 className="text-xl font-bold text-white">
            Tour & Travel
          </h2>

          <p className="mt-4 md:mt-0">
            © 2026 All Rights Reserved.
          </p>

        </div>
      </footer>
    </>
  );
};

export default Home;