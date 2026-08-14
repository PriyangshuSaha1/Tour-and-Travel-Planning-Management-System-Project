import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import API from "../utils/api";

const Edittour = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState({ title: "", description: "", price: "", image: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await API.get(`/tours/${id}`);
        const data = res.data?.tours || res.data?.tour || res.data;
        setTour({ title: data.title, description: data.description, price: data.price, image: data.image || "" });
      } catch {
        setError("Failed to load tour data.");
      } finally {
        setLoading(false);
      }
    };
    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await API.put(`/tours/${id}`, tour);
      setSuccess(true);
      setTimeout(() => navigate("/view"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update tour. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: "72px" }}>
      <div className="text-center"><div className="text-5xl mb-4 animate-bounce">✈️</div><p className="text-gray-500">Loading tour data...</p></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" style={{ paddingTop: "92px", paddingBottom: "40px" }}>
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-start">

        {/* Left Info Panel */}
        <div className="hidden lg:block">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">Edit Tour</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight" style={{ fontFamily: "serif" }}>
            Update Tour<br />Package Details
          </h1>
          <p className="text-gray-500 mt-5 leading-relaxed">
            Make changes to the tour title, description, or pricing. Your updates will be reflected immediately on the listings page.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { icon: "✏️", title: "Edit Anytime", desc: "Update tour details whenever you need to." },
              { icon: "🔄", title: "Instant Update", desc: "Changes go live immediately after saving." },
              { icon: "👁️", title: "Preview First", desc: "Review on the tour details page before sharing." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-semibold text-gray-800">{title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <Link to={`/tour/${id}`} className="text-blue-600 font-semibold text-sm hover:underline">← View Tour</Link>
            <span className="text-gray-300">|</span>
            <Link to="/view" className="text-blue-600 font-semibold text-sm hover:underline">All Tours</Link>
          </div>
        </div>

        {/* Edit Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up">
          {success ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>Tour Updated!</h2>
              <p className="text-gray-500 mt-2">Redirecting to tours list...</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>Edit Tour</h2>
                  <p className="text-gray-400 text-sm mt-1">Modify the fields below and save.</p>
                </div>
                <span className="bg-yellow-50 text-yellow-700 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-200">✏️ Editing</span>
              </div>

              {error && (
                <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  ⚠️ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Tour Title <span className="text-red-500">*</span></label>
                  <input
                    type="text" name="title" value={tour.title} onChange={handleChange} required
                    placeholder="e.g. 5-Night Bali Paradise Package"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all bg-gray-50 focus:bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Image URL <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input
                    type="url" name="image" value={tour.image} onChange={handleChange}
                    placeholder="e.g. https://images.unsplash.com/..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all bg-gray-50 focus:bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Description <span className="text-red-500">*</span></label>
                  <textarea
                    rows="5" name="description" value={tour.description} onChange={handleChange} required
                    placeholder="Describe the tour highlights, inclusions, and itinerary..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none resize-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all bg-gray-50 focus:bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1.5">Price per Person (₹) <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                    <input
                      type="number" name="price" value={tour.price} onChange={handleChange} required min="0"
                      className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition-all bg-gray-50 focus:bg-white text-sm"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit" disabled={saving}
                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 disabled:opacity-60 text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {saving ? "Saving..." : "💾 Save Changes"}
                  </button>
                  <Link
                    to="/view"
                    className="px-6 py-3.5 rounded-xl font-semibold text-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all text-center"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edittour;
