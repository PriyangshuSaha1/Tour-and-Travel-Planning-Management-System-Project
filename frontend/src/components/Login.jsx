import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";
import { isLoggedIn } from "../utils/auth";

const Login = () => {
  const [form, setForm] = useState({ email:"", password:"" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => { if (isLoggedIn()) navigate("/home"); }, []);

  const handleChange = e => { setForm({...form,[e.target.name]:e.target.value}); setError(""); };

  const handleSubmit = async e => {
    e.preventDefault(); setLoading(true);
    try {
      const res = await API.post("/auth/login", form);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } else { setError("Login failed. Please try again."); }
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex" style={{paddingTop:"72px"}}>
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-center items-center w-1/2 text-white px-12 relative overflow-hidden"
        style={{background:"linear-gradient(135deg,#1e3a5f 0%,#2563eb 100%)"}}>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:"url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800')",backgroundSize:"cover",backgroundPosition:"center"}}/>
        <div className="relative z-10 text-center">
          <div className="text-7xl mb-6">✈️</div>
          <h2 className="text-4xl font-bold mb-4" style={{fontFamily:"serif"}}>Welcome Back!</h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-sm">Your next adventure is just a login away.</p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[["500+","Tours"],["10K+","Travelers"],["100+","Destinations"]].map(([n,l])=>(
              <div key={l} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">{n}</div><div className="text-blue-200 text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="text-4xl mb-3">👤</div>
              <h1 className="text-3xl font-bold text-gray-800" style={{fontFamily:"serif"}}>Sign In</h1>
              <p className="text-gray-500 mt-2 text-sm">Enter your credentials to continue</p>
            </div>
            {error && <div className="mb-5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl flex gap-2 items-center">⚠️ {error}</div>}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1.5">Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1.5">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50 focus:bg-white text-sm"/>
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white py-3 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 mt-2">
                {loading ? "Signing In..." : "Sign In →"}
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-6">
              Don&apos;t have an account? <Link to="/" className="text-blue-600 hover:underline font-semibold">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
