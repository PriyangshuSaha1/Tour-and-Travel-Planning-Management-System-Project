import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Us
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
            We help travelers discover amazing destinations, create memorable
            experiences, and enjoy hassle-free trips through our smart Tour &
            Travel Planning Management System.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
            alt="Travel"
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Your Trusted Travel Partner
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              Our mission is to make travel planning simple, enjoyable, and
              stress-free. Whether you're looking for a weekend getaway or an
              international adventure, we offer personalized tour packages,
              destination recommendations, and seamless booking experiences.
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              We believe every journey should be memorable, affordable, and
              comfortable. Our experienced travel experts work hard to provide
              the best travel solutions tailored to your needs.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h2 className="text-4xl font-bold text-blue-600">10K+</h2>
            <p className="mt-3 text-gray-600">Happy Travelers</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-3 text-gray-600">Tour Packages</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h2 className="text-4xl font-bold text-blue-600">100+</h2>
            <p className="mt-3 text-gray-600">Destinations</p>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h2 className="text-4xl font-bold text-blue-600">24/7</h2>
            <p className="mt-3 text-gray-600">Customer Support</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Choose Us?
            </h2>

            <p className="text-gray-600 mt-4">
              We are committed to delivering unforgettable travel experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl">🌍</div>

              <h3 className="text-2xl font-semibold mt-5">
                Worldwide Tours
              </h3>

              <p className="text-gray-600 mt-4">
                Explore breathtaking destinations across the world with
                customized tour packages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl">✈️</div>

              <h3 className="text-2xl font-semibold mt-5">
                Easy Booking
              </h3>

              <p className="text-gray-600 mt-4">
                Book flights, hotels, and travel packages effortlessly with a
                simple and secure booking process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition">
              <div className="text-5xl">🤝</div>

              <h3 className="text-2xl font-semibold mt-5">
                Trusted Service
              </h3>

              <p className="text-gray-600 mt-4">
                Thousands of travelers trust us for quality service, affordable
                pricing, and unforgettable journeys.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-5xl mx-auto text-center px-6 text-white">

          <h2 className="text-4xl font-bold">
            Start Your Journey Today
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Discover new places, create unforgettable memories, and let us make
            your travel experience truly exceptional.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Tours
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;