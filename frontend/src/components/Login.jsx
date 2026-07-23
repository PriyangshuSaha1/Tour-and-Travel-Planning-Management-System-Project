import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [tour, setTour] = useState({
    email:"",
    password:""
  });

  const navigate = useNavigate();

  const hc = (e) => {
    setTour({
      ...tour,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5600/api/auth/login", tour);
      localStorage.setItem("token",res.data.token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-5 py-10">

        <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 md:p-10">

          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800">
              Register
            </h1>

           
          </div>

          <form onSubmit={hs} className="space-y-6">

            {/* Tour Title */}


              <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                onChange={hc}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

              <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                onChange={hc}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>


            {/* Description */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                placeholder="Enter Tour Description"
                value={tour.description}
                onChange={hc}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              ></textarea>
            </div>

          

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300"
            >
              Login
            </button>

          </form>
        </div>

      </div>
    </>
  );
};

export default Login;