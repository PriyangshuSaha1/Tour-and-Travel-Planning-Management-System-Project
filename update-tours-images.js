const axios = require('axios');

const LIVE_API_URL = "https://tour-and-travel-planning-management.onrender.com/api";

const tours = [
  {
    title: "Delhi",
    description: "Explore the historic Red Fort, India Gate, and the bustling markets of Old Delhi.",
    price: 15000,
    image: "https://images.unsplash.com/photo-1587474260580-589f28d84a7d?w=800&q=80"
  },
  {
    title: "Goa",
    description: "Relax on sunny beaches, enjoy thrilling water sports, and experience the vibrant nightlife.",
    price: 25000,
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80"
  },
  {
    title: "New York",
    description: "Visit the Statue of Liberty, walk through Times Square, and take a peaceful stroll in Central Park.",
    price: 105000,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80"
  },
  {
    title: "Paris",
    description: "See the iconic Eiffel Tower, explore the Louvre Museum, and enjoy a romantic cruise on the Seine River.",
    price: 95000,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80"
  },
  {
    title: "Tokyo",
    description: "Experience futuristic cityscapes, visit historic temples, and taste authentic Japanese sushi.",
    price: 85000,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80"
  },
  {
    title: "London",
    description: "Tour the historic Tower of London, see Big Ben, and take a ride on the famous London Eye.",
    price: 90000,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80"
  },
  {
    title: "Dubai",
    description: "Enjoy luxury shopping, thrilling desert safaris, and breathtaking views from the top of the Burj Khalifa.",
    price: 60000,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"
  },
  {
    title: "Maldives",
    description: "Unwind in a luxury overwater villa surrounded by crystal-clear waters and vibrant coral reefs.",
    price: 150000,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80"
  },
  {
    title: "Switzerland",
    description: "Ski in the snow-capped Alps, enjoy scenic train rides, and taste world-class Swiss chocolates.",
    price: 120000,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80"
  },
  {
    title: "Singapore",
    description: "Visit the stunning Gardens by the Bay, marvel at Marina Bay Sands, and enjoy Universal Studios.",
    price: 55000,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80"
  }
];

async function updateLiveDatabase() {
  console.log("🚀 Starting live database update with IMAGES...");
  
  try {
    const providerData = {
      name: "Admin Imager",
      email: `imager${Date.now()}@travelnest.com`,
      password: "password123",
      role: "provider"
    };
    
    console.log("📝 Registering temporary Provider account...");
    await axios.post(`${LIVE_API_URL}/auth/register`, providerData);
    
    console.log("🔑 Logging in...");
    const loginRes = await axios.post(`${LIVE_API_URL}/auth/login`, {
      email: providerData.email,
      password: providerData.password
    });
    const token = loginRes.data.token;
    
    console.log("🧹 Cleaning up old tours...");
    const getRes = await axios.get(`${LIVE_API_URL}/tours`);
    const existingTours = getRes.data.tours || [];
    
    for (let tour of existingTours) {
      await axios.delete(`${LIVE_API_URL}/tours/${tour._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`🗑️ Deleted old tour: ${tour.title}`);
    }
    
    console.log(`🌍 Adding ${tours.length} tours with real images...`);
    for (let tour of tours) {
      await axios.post(`${LIVE_API_URL}/tours`, tour, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`✅ Added: ${tour.title}`);
    }
    
    console.log("🎉 All tours successfully added with images!");
    
  } catch (error) {
    console.error("❌ Error updating database:", error.response?.data?.message || error.message);
  }
}

updateLiveDatabase();
