const axios = require('axios');

const LIVE_API_URL = "https://tour-and-travel-planning-management.onrender.com/api";

const tours = [
  {
    title: "Bali Tropical Escape",
    description: "Experience the magic of Bali. Includes 5 nights in a luxury villa, daily breakfast, a guided temple tour, and a sunset cruise.",
    price: 45000
  },
  {
    title: "Swiss Alps Adventure",
    description: "A thrilling 7-day adventure in Switzerland. Ski in Zermatt, ride the Glacier Express, and explore the beautiful streets of Lucerne.",
    price: 120000
  },
  {
    title: "Tokyo Neon Nights",
    description: "Discover the perfect blend of tradition and future in Tokyo. 6 days covering Shibuya, Shinjuku, Mount Fuji day trip, and authentic sushi dining.",
    price: 85000
  },
  {
    title: "Paris Romance & Culture",
    description: "5 days in the City of Light. Includes Skip-the-Line Eiffel Tower tickets, Louvre Museum guided tour, and a Seine River dinner cruise.",
    price: 95000
  },
  {
    title: "Safari in Kenya",
    description: "An unforgettable 8-day African Safari. Experience the Masai Mara, witness the Great Migration, and stay in premium eco-lodges.",
    price: 110000
  },
  {
    title: "New York City Explorer",
    description: "Bite into the Big Apple! 5 days including a Broadway show, Statue of Liberty cruise, Central Park walking tour, and Empire State Building pass.",
    price: 105000
  },
  {
    title: "Maldives Luxury Resort",
    description: "The ultimate relaxation getaway. 4 nights in an Overwater Bungalow, all-inclusive meals, scuba diving sessions, and airport speedboat transfers.",
    price: 150000
  },
  {
    title: "Sydney & Gold Coast",
    description: "Explore the best of Australia. 9 days covering the Sydney Opera House, Blue Mountains, and thrilling theme parks on the Gold Coast.",
    price: 130000
  },
  {
    title: "Historic Rome & Florence",
    description: "A deep dive into Italian history. 7 days of Colosseum tours, Vatican City access, Tuscan wine tasting, and high-speed train travel.",
    price: 88000
  },
  {
    title: "Dubai Desert Safari & City",
    description: "Experience luxury and thrills in Dubai. 4 days featuring a Desert Safari with BBQ dinner, Burj Khalifa At The Top tickets, and a Marina cruise.",
    price: 60000
  }
];

async function seedLiveDatabase() {
  console.log("🚀 Starting live database seeding...");
  
  try {
    // 1. Register a temporary provider account
    const providerData = {
      name: "Admin Seeder",
      email: `seeder${Date.now()}@travelnest.com`,
      password: "password123",
      role: "provider"
    };
    
    console.log("📝 Registering temporary Provider account...");
    await axios.post(`${LIVE_API_URL}/auth/register`, providerData);
    
    // 2. Login to get token
    console.log("🔑 Logging in to get authentication token...");
    const loginRes = await axios.post(`${LIVE_API_URL}/auth/login`, {
      email: providerData.email,
      password: providerData.password
    });
    
    const token = loginRes.data.token;
    
    // 3. Upload tours
    console.log(`🌍 Adding ${tours.length} new tours to the live database...`);
    for (let i = 0; i < tours.length; i++) {
      await axios.post(`${LIVE_API_URL}/tours`, tours[i], {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log(`✅ Added: ${tours[i].title}`);
    }
    
    console.log("🎉 All 10 tours successfully added to your live website!");
    
  } catch (error) {
    console.error("❌ Error seeding database:", error.response?.data?.message || error.message);
  }
}

seedLiveDatabase();
