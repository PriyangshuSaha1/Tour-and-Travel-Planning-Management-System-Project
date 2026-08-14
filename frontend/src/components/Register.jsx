import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";
import { isLoggedIn } from "../utils/auth";

const Register = () => {
  const [form, setForm] = useState({ name:"", email:"", password:"" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { if (isLoggedIn()) navigate("/home"); }, []);

  const handleChange = e => { setForm({...form,[e.target.name]:e.target.value}); setError(""); };

  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      await API.post("/auth/register", form);
      setSuccess(true);
      setTimeout(()=>navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex" style={{paddingTop:"72px"}}>
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 text-white px-12 relative overflow-hidden"
        style={{background:"linear-gradient(135deg,#134e4a 0%,#0d9488 100%)"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800')",backgroundSize:"cover",backgroundPosition:"center"}}/>
        <div className="relative z-10 text-center">
          <div className="text-7xl mb-6">🌍</div>
          <h2 className="text-4xl font-bold mb-4" style={{fontFamily:"serif"}}>Start Your Journey</h2>
          <p className="text-teal-100 text-lg leading-relaxed max-w-sm">Join thousands of travelers who plan their dream vacations with TravelNest.</p>
          <div className="mt-10 space-y-3 text-left">
            {["✅ Free account, no credit card needed","✅ Access 500+ curated tour packages","✅ Manage & track your bookings easily","✅ 24/7 dedicated customer support"].map(t=>(
              <div key={t} className="text-teal-100 text-sm">{t}</div>
            ))}
          </div>
        </div>
      </div>
      {/* Right form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up">
            {success ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-2xl font-bold text-gray-800" style={{fontFamily:"serif"}}>Account Created!</h2>
                <p className="text-gray-500 mt-2">Redirecting to login...</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="text-4xl mb-3">🚀</div>
                  <h1 className="text-3xl font-bold text-gray-800" style={{fontFamily:"serif"}}>Create Account</h1>
                  <p className="text-gray-500 mt-2 text-sm">Join TravelNest and explore the world</p>
                </div>
                {error && <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex gap-2 items-center">⚠️ {error}</div>}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">Full Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1.5">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required minLength={6} placeholder="Min. 6 characters"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 mt-2">
                    {loading ? "Creating Account..." : "Create Account →"}
                  </button>
                </form>
                <p className="text-center text-gray-500 text-sm mt-6">
                  Already have an account? <Link to="/login" className="text-teal-600 hover:underline font-semibold">Sign in</Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
