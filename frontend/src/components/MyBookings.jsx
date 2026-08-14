import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/api";
import { getUser } from "../utils/auth";

const statusStyle = {
  pending:   "bg-yellow-50 text-yellow-700 border-yellow-200",
  confirmed: "bg-green-50  text-green-700  border-green-200",
  cancelled: "bg-red-50    text-red-600    border-red-200",
};
const statusIcon = { pending:"⏳", confirmed:"✅", cancelled:"❌" };

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const user = getUser();

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get("/bookings/my");
        setBookings(res.data.bookings || []);
      } catch { setBookings([]); }
      finally { setLoading(false); }
    })();
  }, []);

  const cancelBooking = async (id) => {
    if (!window.confirm("Cancel this booking?")) return;
    setCancellingId(id);
    try {
      await API.patch(`/bookings/${id}/cancel`);
      setBookings(prev => prev.map(b => b._id === id ? { ...b, status:"cancelled" } : b));
    } catch { alert("Failed to cancel."); }
    finally { setCancellingId(null); }
  };

  const stats = {
    total:     bookings.length,
    confirmed: bookings.filter(b => b.status==="confirmed").length,
    pending:   bookings.filter(b => b.status==="pending").length,
    cancelled: bookings.filter(b => b.status==="cancelled").length,
    spent:     bookings.filter(b => b.status!=="cancelled").reduce((s,b) => s+(b.totalPrice||0), 0),
  };
  const filtered = filter==="all" ? bookings : bookings.filter(b => b.status===filter);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{paddingTop:"72px"}}>
      <div className="text-center"><div className="text-5xl mb-4 animate-bounce">🎫</div><p className="text-gray-500">Loading your bookings...</p></div>
    </div>
  );

  return (
    <div style={{paddingTop:"72px"}}>
      {/* Header */}
      <section className="relative py-16 text-white" style={{background:"linear-gradient(135deg,#0f172a 0%,#1e40af 100%)"}}>
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage:"url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}/>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-blue-300 text-sm mb-1">Welcome back, <strong>{user?.name||"Traveler"}</strong> 👋</p>
              <h1 className="text-3xl md:text-4xl font-bold" style={{fontFamily:"serif"}}>My Bookings</h1>
              <p className="text-blue-200 mt-2 text-sm">Track and manage all your travel bookings in one place.</p>
            </div>
            <Link to="/view" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl transition text-sm">
              🌍 Browse More Tours
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[["Total",stats.total,"🎫"],["Confirmed",stats.confirmed,"✅"],["Pending",stats.pending,"⏳"],["Total Spent",`₹${stats.spent.toLocaleString("en-IN")}`,"💰"]].map(([l,v,i])=>(
              <div key={l} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                <div className="text-2xl mb-1">{i}</div>
                <div className="text-xl font-bold">{v}</div>
                <div className="text-blue-200 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {[["all",`All (${stats.total})`],["pending",`⏳ Pending (${stats.pending})`],["confirmed",`✅ Confirmed (${stats.confirmed})`],["cancelled",`❌ Cancelled (${stats.cancelled})`]].map(([f,l])=>(
              <button key={f} onClick={()=>setFilter(f)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${filter===f?"bg-blue-600 text-white shadow-md":"bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}>{l}</button>
            ))}
          </div>

          {filtered.length===0 ? (
            <div className="bg-white rounded-2xl shadow-md p-16 text-center">
              <div className="text-6xl mb-4">🎫</div>
              <h2 className="text-2xl font-bold text-gray-700">{filter==="all"?"No Bookings Yet":`No ${filter} bookings`}</h2>
              <p className="text-gray-400 mt-3">Explore amazing tours and make your first booking!</p>
              <Link to="/view" className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">🌍 Browse Tours</Link>
            </div>
          ) : (
            <div className="space-y-5">
              {filtered.map(b => (
                <div key={b._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-5 justify-between">
                      {/* Left */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusStyle[b.status]}`}>
                            {statusIcon[b.status]} {b.status.toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-xs font-mono">ID: #{b._id.slice(-8).toUpperCase()}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800" style={{fontFamily:"serif"}}>{b.tourTitle}</h3>
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                          {[["📅 Date",b.date||"—"],["👥 Travelers",`${b.travelers} person(s)`],["📞 Phone",b.phone],["✉️ Email",b.email]].map(([l,v])=>(
                            <div key={l}><div className="text-xs text-gray-400">{l}</div><div className="text-sm font-semibold text-gray-700 mt-0.5 truncate">{v}</div></div>
                          ))}
                        </div>
                        {b.specialRequest && (
                          <div className="mt-4 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 text-sm">
                            <span className="text-gray-400 text-xs">📝 Special Request: </span>{b.specialRequest}
                          </div>
                        )}
                        {b.customItinerary?.filter(Boolean).length > 0 && (
                          <div className="mt-3">
                            <div className="text-xs text-gray-400 mb-2">✏️ Custom Itinerary:</div>
                            <div className="flex flex-wrap gap-2">
                              {b.customItinerary.filter(Boolean).map((item,i)=>(
                                <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">Day {i+1}: {item}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Right */}
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-xs text-gray-400">Total Paid</div>
                          <div className="text-2xl font-extrabold text-blue-600">₹ {Number(b.totalPrice||0).toLocaleString("en-IN")}</div>
                          <div className="text-xs text-gray-400">{b.travelers} × ₹{Number((b.totalPrice||0)/(b.travelers||1)).toLocaleString("en-IN")}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Link to={`/tour/${b.tourId}`} className="text-center bg-blue-50 hover:bg-blue-100 text-blue-600 font-semibold text-xs px-4 py-2 rounded-xl border border-blue-100 transition">View Tour</Link>
                          {b.status==="pending" && (
                            <button onClick={()=>cancelBooking(b._id)} disabled={cancellingId===b._id}
                              className="bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-xs px-4 py-2 rounded-xl border border-red-100 transition disabled:opacity-50">
                              {cancellingId===b._id?"Cancelling...":"❌ Cancel"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400">
                      Booked on {new Date(b.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default MyBookings;
