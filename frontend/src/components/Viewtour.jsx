import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/api";

const tourImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?w=600",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
];

const Viewtour = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const getTours = async () => {
    try {
      const res = await API.get("/tours");
      setTours(res.data.tours || []);
    } catch { } finally { setLoading(false); }
  };

  const deleteTour = async (id) => {
    if (!window.confirm("Delete this tour permanently?")) return;
    setDeletingId(id);
    try {
      await API.delete(`/tours/${id}`);
      setTours(prev => prev.filter(t => t._id !== id));
    } catch { alert("Failed to delete tour."); }
    finally { setDeletingId(null); }
  };

  useEffect(() => { getTours(); }, []);

  const filtered = tours.filter(t =>
    t.title?.toLowerCase().includes(search.toLowerCase()) ||
    t.description?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{paddingTop:"72px"}}>
      <div className="text-center"><div className="text-5xl mb-4 animate-bounce">✈️</div><p className="text-gray-500">Loading tours...</p></div>
    </div>
  );

  return (
    <div style={{paddingTop:"72px"}}>
      {/* Banner */}
      <section className="relative py-20 text-white" style={{background:"linear-gradient(135deg,#0f172a 0%,#1e40af 100%)"}}>
        <div className="absolute inset-0 opacity-15"
          style={{backgroundImage:"url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80')",backgroundSize:"cover",backgroundPosition:"center"}}/>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold" style={{fontFamily:"serif"}}>Browse All Tours</h1>
          <p className="text-blue-200 mt-3 text-lg">Discover, manage and explore curated travel packages</p>
          <div className="mt-8 max-w-xl mx-auto relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input type="text" placeholder="Search tours by name or description..."
              value={search} onChange={e=>setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 text-sm shadow-xl outline-none focus:ring-2 focus:ring-blue-400"/>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <p className="text-gray-600 text-sm">
              Showing <strong className="text-gray-900">{filtered.length}</strong> of <strong className="text-gray-900">{tours.length}</strong> tours
            </p>
            <Link to="/add" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition hover:shadow-md hover:-translate-y-0.5">
              ➕ Add New Tour
            </Link>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-md p-16 text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h2 className="text-2xl font-bold text-gray-700">No Tours Found</h2>
              <p className="text-gray-500 mt-3">Try a different search or add a new tour.</p>
              <Link to="/add" className="inline-block mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition">➕ Add Tour</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((tour, index) => (
                <div key={tour._id} className="bg-white rounded-2xl shadow-md overflow-hidden card-hover border border-gray-100 group">
                  <div className="relative overflow-hidden h-52">
                    <img src={tourImages[index % tourImages.length]} alt={tour.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full">✈️ Package</span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-white text-lg font-bold truncate">{tour.title}</h2>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{tour.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Starting From</div>
                        <div className="text-2xl font-extrabold text-blue-600">₹ {Number(tour.price).toLocaleString("en-IN")}</div>
                      </div>
                      <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">✅ Available</span>
                    </div>
                    <div className="flex gap-2 mt-5">
                      <Link to={`/tour/${tour._id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-semibold py-2.5 rounded-xl transition hover:shadow-md">
                        View Details
                      </Link>
                      <Link to={`/edit/${tour._id}`}
                        className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 text-sm font-semibold px-3.5 py-2.5 rounded-xl border border-yellow-200 hover:border-yellow-400 transition">
                        ✏️
                      </Link>
                      <button onClick={()=>deleteTour(tour._id)} disabled={deletingId===tour._id}
                        className="bg-red-50 hover:bg-red-100 text-red-600 text-sm font-semibold px-3.5 py-2.5 rounded-xl border border-red-100 hover:border-red-300 transition disabled:opacity-50">
                        {deletingId===tour._id ? "..." : "🗑️"}
                      </button>
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
export default Viewtour;
