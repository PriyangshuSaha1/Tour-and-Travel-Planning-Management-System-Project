import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Viewtour = () => {
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    try {
      const res = await axios.get("http://localhost:5600/api/tours");
      setTours(res.data.tours);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTour = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tour?"
    );

    if (confirmDelete) {
      await axios.delete(`http://localhost:5600/api/tours/${id}`);
      alert("Tour deleted successfully");
      getTours();
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Available Tours
          </h1>

          <p className="text-gray-500 mt-3">
            Browse, manage and update all your travel packages.
          </p>
        </div>

        {/* No Tours */}

        {tours.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">

            <h2 className="text-2xl font-semibold text-gray-700">
              No Tours Found
            </h2>

            <p className="text-gray-500 mt-3">
              Add a new tour to get started.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {tours.map((x,index) => (
              <div
                key={x._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
              >

                {/* Image */}

                <img
                  src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
                  alt="Tour"
                  className="h-56 w-full object-cover"
                />

                {/* Content */}

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-gray-800">
                    {x.title}
                  </h2>

                  <p className="text-gray-600 mt-3 line-clamp-3">
                    {x.description}
                  </p>

                  <h3 className="text-blue-600 text-2xl font-bold mt-5">
                    ₹ {x.price}
                  </h3>

                  {/* Buttons */}

                  <div className="flex justify-between mt-8">

                    <Link
                      to={`/tour/${x._id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
                    >
                      View
                    </Link>

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTour(x._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
};

export default Viewtour;