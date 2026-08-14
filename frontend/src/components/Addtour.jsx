import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";

const Addtour = () => {
  const [tour, setTour] = useState({ title:"", description:"", price:"", image:"" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => { setTour({...tour,[e.target.name]:e.target.value}); setError(""); };

  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      await API.post("/tours", tour);
      setSuccess(true);
      setTimeout(()=>navigate("/view"),1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add tour. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" style={{paddingTop:"92px",paddingBottom:"40px"}}>
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Info panel */}
        <div className="hidden lg:block">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Tour Management</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight" style={{fontFamily:"serif"}}>Add a New<br/>Travel Package</h1>
          <p className="text-gray-500 mt-5 leading-relaxed">Create and publish a new tour package for travelers to discover. Thousands of users will be able to find and book it.</p>
          <div className="mt-10 space-y-4">
            {[["🌍","Global Reach","Your tour will be visible to thousands of users."],["💳","Transparent Pricing","Set your price and let travelers book instantly."],["📊","Full Control","Edit or remove your packages anytime with ease."]].map(([i,t,d])=>(
              <div key={t} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">{i}</span>
                <div><div className="font-semibold text-gray-800">{t}</div><div className="text-gray-500 text-sm mt-0.5">{d}</div></div>
              </div>
            ))}
          </div>
          <Link to="/view" className="inline-block mt-8 text-blue-600 font-semibold text-sm hover:underline">← Back to All Tours</Link>
        </div>
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up">
          {success ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-gray-800" style={{fontFamily:"serif"}}>Tour Published!</h2>
              <p className="text-gray-500 mt-2">Redirecting to tours list...</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800" style={{fontFamily:"serif"}}>Tour Details</h2>
                <p className="text-gray-500 text-sm mt-1">Fill in the details below to create a new tour.</p>
              </div>
              {error && <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex gap-2">⚠️ {error}</div>}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Tour Title <span className="text-red-500">*</span></label>
                  <input type="text" name="title" value={tour.title} onChange={handleChange} required placeholder="e.g. 5-Night Bali Paradise Package"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Image URL <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="url" name="image" value={tour.image} onChange={handleChange} placeholder="e.g. https://images.unsplash.com/..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Description <span className="text-red-500">*</span></label>
                  <textarea rows="5" name="description" value={tour.description} onChange={handleChange} required placeholder="Describe the tour highlights, itinerary and inclusions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Price per Person (₹) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                    <input type="number" name="price" value={tour.price} onChange={handleChange} required min="0" placeholder="0"
                      className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                  </div>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                  {loading ? "Publishing..." : "✅ Publish Tour"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Addtour;
