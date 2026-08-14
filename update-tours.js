const axios = require('axios');

const LIVE_API_URL = "https://tour-and-travel-planning-management.onrender.com/api";

const tours = [
  {
    title: "Delhi",
    description: "Explore the historic Red Fort, India Gate, and the bustling markets of Old Delhi.",
    price: 15000
  },
  {
    title: "Goa",
    description: "Relax on sunny beaches, enjoy thrilling water sports, and experience the vibrant nightlife.",
    price: 25000
  },
  {
    title: "New York",
    description: "Visit the Statue of Liberty, walk through Times Square, and take a peaceful stroll in Central Park.",
    price: 105000
  },
  {
    title: "Paris",
    description: "See the iconic Eiffel Tower, explore the Louvre Museum, and enjoy a romantic cruise on the Seine River.",
    price: 95000
  },
  {
    title: "Tokyo",
    description: "Experience futuristic cityscapes, visit historic temples, and taste authentic Japanese sushi.",
    price: 85000
  },
  {
    title: "London",
    description: "Tour the historic Tower of London, see Big Ben, and take a ride on the famous London Eye.",
    price: 90000
  },
  {
    title: "Dubai",
    description: "Enjoy luxury shopping, thrilling desert safaris, and breathtaking views from the top of the Burj Khalifa.",
    price: 60000
  },
  {
    title: "Maldives",
    description: "Unwind in a luxury overwater villa surrounded by crystal-clear waters and vibrant coral reefs.",
    price: 150000
  },
  {
    title: "Switzerland",
    description: "Ski in the snow-capped Alps, enjoy scenic train rides, and taste world-class Swiss chocolates.",
    price: 120000
  },
  {
    title: "Singapore",
    description: "Visit the stunning Gardens by the Bay, marvel at Marina Bay Sands, and enjoy Universal Studios.",
    price: 55000
  }
];

async function updateLiveDatabase() {
  console.log("🚀 Starting live database update...");
  
  try {
    // 1. Register a temporary provider account (catch error if it already exists, then login)
    const providerData = {
      name: "Admin Updater",
      email: `updater${Date.now()}@travelnest.com`,
      password: "password123",
      role: "provider"
    };
    
    console.log("📝 Registering temporary Provider account...");
    await axios.post(`${LIVE_API_URL}/auth/register`, providerData);
    
    // 2. Login to get token
    console.log("🔑 Logging in...");
    const loginRes = await axios.post(`${LIVE_API_URL}/auth/login`, {
      email: providerData.email,
      password: providerData.password
    });
    const token = loginRes.data.token;
    
    // 3. Get all existing tours and delete them to clean up
    console.log("🧹 Cleaning up old tours...");
    const getRes = await axios.get(`${LIVE_API_URL}/tours`);
    const existingTours = getRes.data.tours || [];
    
    for (let tour of existingTours) {
      await axios.delete(`${LIVE_API_URL}/tours/${tour._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`🗑️ Deleted old tour: ${tour.title}`);
    }
    
    // 4. Upload new simple tours
    console.log(`🌍 Adding ${tours.length} new simple tours...`);
    for (let tour of tours) {
      await axios.post(`${LIVE_API_URL}/tours`, tour, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`✅ Added: ${tour.title}`);
    }
    
    console.log("🎉 All simple tours successfully added to your live website!");
    
  } catch (error) {
    console.error("❌ Error updating database:", error.response?.data?.message || error.message);
  }
}

updateLiveDatabase();
