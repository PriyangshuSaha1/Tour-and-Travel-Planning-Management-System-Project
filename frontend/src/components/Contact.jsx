import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-2xl mx-auto">
            Have questions or need help planning your next trip? We'd love to
            hear from you. Reach out anytime!
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}

          <div>

            <h2 className="text-3xl font-bold text-gray-800">
              Get In Touch
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              Whether you're planning a vacation, need travel assistance,
              or have any questions about our tour packages,
              our team is here to help you every step of the way.
            </p>

            <div className="space-y-6 mt-10">

              <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-5 hover:shadow-xl transition">

                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Address
                  </h3>

                  <p className="text-gray-600">
                    Kolkata, West Bengal, India
                  </p>

                </div>

              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-5 hover:shadow-xl transition">

                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 flex items-center gap-5 hover:shadow-xl transition">

                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-2xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-semibold text-xl">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    support@travelplanner.com
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white shadow-xl rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* Map */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[450px]"
              loading="lazy"
            ></iframe>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;