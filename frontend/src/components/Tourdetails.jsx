import React, { useState, useEffect } from "react";
import API from "../utils/api";
import { Link, useParams } from "react-router-dom";



// ─── Booking Modal ────────────────────────────────────────────────────────────
const BookingModal = ({ tour, onClose }) => {
  const [step, setStep] = useState(1); // 1 = details, 2 = success
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", travelers: 1, date: "", specialRequest: "",
  });

  const totalPrice = tour.price * form.travelers;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/bookings", {
        tourId: tour._id,
        ...form,
        travelers: Number(form.travelers),
      });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">

        {step === 2 ? (
          // Success Screen
          <div className="p-10 text-center">
            <div className="text-7xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>Booking Confirmed!</h2>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Thank you, <strong>{form.name}</strong>! Your booking for <strong>{tour.title}</strong> on <strong>{form.date}</strong> is confirmed.
              A confirmation will be sent to <strong>{form.email}</strong>.
            </p>
            <div className="mt-6 bg-blue-50 rounded-xl p-5 text-left space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-500">Tour</span><span className="font-semibold text-gray-800">{tour.title}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Travelers</span><span className="font-semibold text-gray-800">{form.travelers} person(s)</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">Date</span><span className="font-semibold text-gray-800">{form.date}</span></div>
              <div className="flex justify-between text-sm border-t border-blue-100 pt-2 mt-2"><span className="text-gray-600 font-bold">Total Paid</span><span className="font-extrabold text-blue-600 text-lg">₹ {Number(totalPrice).toLocaleString("en-IN")}</span></div>
            </div>
            <button onClick={onClose} className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
              ✅ Done
            </button>
          </div>
        ) : (
          // Booking Form
          <>
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>Book This Tour</h2>
                <p className="text-gray-400 text-xs mt-0.5">{tour.title}</p>
              </div>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition text-lg">
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  ⚠️ {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" type="tel"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Travel Date *</label>
                  <input name="date" value={form.date} onChange={handleChange} required type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">No. of Travelers *</label>
                  <input name="travelers" value={form.travelers} onChange={handleChange} required type="number" min="1" max="20"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Special Requests (Optional)</label>
                <textarea name="specialRequest" value={form.specialRequest} onChange={handleChange} rows="2" placeholder="Dietary requirements, accessibility needs, preferences..."
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white" />
              </div>

              {/* Price Summary */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">₹ {Number(tour.price).toLocaleString("en-IN")} × {form.travelers} traveler(s)</span>
                  <span className="font-semibold text-gray-800">₹ {Number(totalPrice).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>✅ Free cancellation (48h)</span>
                  <span>No extra fees</span>
                </div>
                <div className="border-t border-blue-100 mt-3 pt-3 flex justify-between">
                  <span className="font-bold text-gray-800">Total Amount</span>
                  <span className="font-extrabold text-blue-600 text-xl">₹ {Number(totalPrice).toLocaleString("en-IN")}</span>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm">
                {loading ? "Processing..." : `📅 Confirm Booking — ₹ ${Number(totalPrice).toLocaleString("en-IN")}`}
              </button>

              <p className="text-center text-gray-400 text-xs">By booking you agree to our Terms & Cancellation Policy</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Custom Itinerary Builder ─────────────────────────────────────────────────
const CustomItinerary = () => {
  const [days, setDays] = useState([
    { id: 1, activity: "" },
    { id: 2, activity: "" },
    { id: 3, activity: "" },
  ]);
  const [saved, setSaved] = useState(false);

  const updateDay = (id, value) => {
    setDays(prev => prev.map(d => d.id === id ? { ...d, activity: value } : d));
    setSaved(false);
  };
  const addDay = () => setDays(prev => [...prev, { id: Date.now(), activity: "" }]);
  const removeDay = (id) => setDays(prev => prev.filter(d => d.id !== id));
  const saveItinerary = () => { setSaved(true); setTimeout(() => setSaved(false), 3000); };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-500 text-sm">Plan your own day-by-day itinerary below.</p>
        <button onClick={addDay}
          className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-xl border border-blue-200 transition flex items-center gap-1.5">
          + Add Day
        </button>
      </div>

      {days.map((day, index) => (
        <div key={day.id} className="flex items-start gap-3 group">
          <div className="min-w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-1">
            {index + 1}
          </div>
          <div className="flex-1 relative">
            <input
              type="text"
              value={day.activity}
              onChange={e => updateDay(day.id, e.target.value)}
              placeholder={`Day ${index + 1} — e.g. Visit Eiffel Tower & Seine River cruise`}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-gray-50 focus:bg-white pr-10"
            />
            {days.length > 1 && (
              <button onClick={() => removeDay(day.id)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-red-500 transition opacity-0 group-hover:opacity-100 text-lg font-bold">
                ×
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 pt-2">
        <button onClick={saveItinerary}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition hover:shadow-md">
          {saved ? "✅ Saved!" : "💾 Save Itinerary"}
        </button>
        <button onClick={() => { setDays([{ id: 1, activity: "" }, { id: 2, activity: "" }, { id: 3, activity: "" }]); setSaved(false); }}
          className="text-gray-400 hover:text-gray-600 text-sm transition underline underline-offset-2">
          Reset
        </button>
      </div>
      <p className="text-xs text-gray-400 italic">💡 Your custom itinerary will be shared with the booking team when you book this tour.</p>
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────────
const Tourdetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [itineraryTab, setItineraryTab] = useState("sample"); // "sample" | "custom"

  const sampleItinerary = [
    "Arrival & Welcome Dinner at a local restaurant",
    "Guided City Sightseeing Tour of major landmarks",
    "Adventure Activities Day — hiking, rafting, or zip-lining",
    "Cultural Heritage Visit — museums, temples & local markets",
    "Leisure Day, souvenir shopping & Departure",
  ];

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await API.get(`/tours/${id}`);
        if (res.data?._id) setTour(res.data);
        else if (res.data?.tours) setTour(res.data.tours);
        else if (res.data?.tour) setTour(res.data.tour);
        else setTour(null);
      } catch { setTour(null); }
      finally { setLoading(false); }
    };
    fetchTour();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: "72px" }}>
      <div className="text-center"><div className="text-5xl mb-4 animate-bounce">✈️</div><p className="text-gray-500">Loading tour details...</p></div>
    </div>
  );

  if (!tour) return (
    <div className="min-h-screen flex items-center justify-center" style={{ paddingTop: "72px" }}>
      <div className="text-center">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-3xl font-bold text-gray-800">Tour Not Found</h1>
        <p className="text-gray-500 mt-3">This tour may have been removed.</p>
        <Link to="/view" className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">← Back to All Tours</Link>
      </div>
    </div>
  );

  return (
    <div style={{ paddingTop: "72px" }}>
      {showModal && <BookingModal tour={tour} onClose={() => setShowModal(false)} />}

      {/* Hero Banner */}
      <section className="relative h-72 text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-8">
          <div className="flex items-center gap-2 text-blue-300 text-sm mb-3">
            <Link to="/view" className="hover:text-white transition">Tours</Link>
            <span>/</span>
            <span className="text-white truncate">{tour.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "serif" }}>{tour.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-blue-200 text-sm">
            <span>⭐ 4.8 (120 reviews)</span>
            <span>•</span>
            <span>✈️ 5 Days / 4 Nights</span>
            <span>•</span>
            <span>👥 Max 20 People</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">

          {/* ── Left Column ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* About */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "serif" }}>About This Tour</h2>
              <p className="text-gray-600 leading-relaxed">{tour.description}</p>
            </div>

            {/* Included */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-5" style={{ fontFamily: "serif" }}>What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {["🏨 Hotel Accommodation", "🍽️ Breakfast & Dinner", "🚌 Airport Transfers", "🗺️ Expert Tour Guide", "📸 Photography Sessions", "🔒 Travel Insurance"].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-green-50 rounded-xl px-4 py-3 border border-green-100">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary with Tabs */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              {/* Tab Header */}
              <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>Itinerary</h2>
                <div className="flex bg-gray-100 rounded-xl p-1 gap-1">
                  <button
                    onClick={() => setItineraryTab("sample")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${itineraryTab === "sample" ? "bg-white shadow text-blue-600" : "text-gray-500 hover:text-gray-700"}`}>
                    📋 Sample Plan
                  </button>
                  <button
                    onClick={() => setItineraryTab("custom")}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${itineraryTab === "custom" ? "bg-white shadow text-blue-600" : "text-gray-500 hover:text-gray-700"}`}>
                    ✏️ Custom Plan
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {itineraryTab === "sample" ? (
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm mb-4">A typical day-by-day plan for this tour. Switch to Custom Plan to personalise it.</p>
                  {sampleItinerary.map((activity, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="min-w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0">{i + 1}</div>
                      <div className={`flex-1 pb-5 ${i < sampleItinerary.length - 1 ? "border-l-2 border-dashed border-gray-200 ml-0" : ""} pl-0`}>
                        <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                          <div className="font-semibold text-gray-800 text-sm">Day {i + 1}</div>
                          <div className="text-gray-500 text-sm mt-1">{activity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button onClick={() => setItineraryTab("custom")}
                      className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1.5">
                      ✏️ Customize this itinerary →
                    </button>
                  </div>
                </div>
              ) : (
                <CustomItinerary />
              )}
            </div>

          </div>

          {/* ── Right: Booking Card ── */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-100 sticky top-24">
              <div className="text-center mb-6">
                <span className="text-gray-400 text-sm">Starting from</span>
                <div className="text-4xl font-extrabold text-blue-600 mt-1">₹ {Number(tour.price).toLocaleString("en-IN")}</div>
                <div className="text-gray-400 text-xs">per person</div>
              </div>

              <div className="space-y-3 mb-6">
                {[["⏱️ Duration", "5 Days / 4 Nights"], ["👥 Group Size", "Max 20 People"], ["🗣️ Language", "English / Hindi"], ["📍 Pickup", "Airport Transfer Included"]].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-sm pb-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-gray-800 font-medium">{val}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                📅 Book This Tour
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">Free cancellation up to 48 hours before departure</p>

              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg shrink-0">🎧</div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Need help?</div>
                  <div className="text-blue-600 text-sm font-medium">+91 98765 43210</div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <Link to="/view" className="text-gray-400 hover:text-blue-600 text-sm transition">← Back to All Tours</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Tourdetails;
