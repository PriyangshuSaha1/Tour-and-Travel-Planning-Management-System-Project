const mongoose = require("mongoose");
const Tour = require("./models/tour");
require("dotenv").config();

const tours = [
  { title: "5 Nights Bali Paradise Escape", description: "Explore the magical island of Bali with visits to Tanah Lot Temple, Ubud Rice Terraces, Mount Batur volcano trek, Kuta Beach, and traditional Kecak dance performances. Includes spa sessions and authentic Balinese cooking class.", price: 45000 },
  { title: "7 Nights Switzerland Alps Adventure", description: "Experience the breathtaking Swiss Alps with cable car rides over Jungfraujoch, scenic Glacier Express train journey, visits to Lucerne, Interlaken, and Zurich. Includes skiing in winter or hiking in summer with mountain lodge stays.", price: 125000 },
  { title: "4 Nights Royal Rajasthan Tour", description: "Discover the Land of Kings with visits to Jaipur Amber Fort, Jodhpur Blue City, Udaipur Lake Palace, Jaisalmer Golden Fort and desert camel safari. Includes folk performances and traditional Rajasthani thali dinners.", price: 22000 },
  { title: "6 Nights Paris & French Riviera", description: "Begin in Paris with Eiffel Tower, Louvre Museum, Versailles Palace and Seine River cruise, then head to the glamorous French Riviera visiting Nice, Monaco and Cannes. Includes wine tasting and gourmet dining experiences.", price: 115000 },
  { title: "5 Nights Tokyo & Kyoto Cultural Journey", description: "Immerse yourself in Japan with Robot Restaurant in Tokyo, Mount Fuji day trip, Geisha district in Kyoto, Fushimi Inari Shrine, Arashiyama Bamboo Grove, teamLab digital art museum, and Shinkansen bullet train ride.", price: 98000 },
  { title: "4 Nights Kerala Backwaters Retreat", description: "Rejuvenate in Gods Own Country with a luxury houseboat cruise through Alleppey backwaters, Munnar tea garden tours, Periyar wildlife sanctuary safari, Kovalam beach yoga sessions, and traditional Kathakali dance show.", price: 18000 },
  { title: "7 Nights Maldives Overwater Luxury", description: "Stay in an exclusive overwater bungalow with glass floor panels overlooking the Indian Ocean. Enjoy snorkeling at coral reefs, dolphin watching sunset cruise, private beach BBQ dinners, scuba diving with manta rays, and couples spa.", price: 175000 },
  { title: "5 Nights Dubai Glamour & Desert Safari", description: "Experience ultramodern Dubai with Burj Khalifa observation deck, Dubai Mall, Palm Jumeirah, indoor skiing at Ski Dubai, dhow cruise dinner on Dubai Creek, and an exhilarating overnight desert safari with belly dance show.", price: 65000 },
  { title: "6 Nights Singapore & Sentosa Island", description: "Explore the Lion City with Gardens by the Bay, Universal Studios Singapore, S.E.A. Aquarium, Sentosa cable car, Singapore Zoo night safari, Chinatown and Little India cultural walks, and Marina Bay Sands SkyPark.", price: 72000 },
  { title: "5 Nights Manali & Spiti Valley Expedition", description: "Adventure through the Himalayas with Rohtang Pass snow excursion, Spiti Valley monasteries, Chandratal Lake camping under the stars, river rafting on Beas, paragliding in Solang Valley, and local Himachali village homestay.", price: 28000 },
  { title: "4 Nights Goa Beach & Heritage", description: "Enjoy Goas perfect mix of beach bliss and Portuguese heritage with Calangute, Anjuna and Palolem beaches, Old Goa churches, spice plantation tour, Dudhsagar waterfalls jeep ride, sunset cruise with live music.", price: 15000 },
  { title: "8 Nights New Zealand South Island Discovery", description: "Explore spectacular South Island with Milford Sound fjord cruise, Queenstown bungee jumping and skydiving, Fox Glacier heli-hike, Hobbiton Movie Set, Rotorua geothermal wonders, and whale watching at Kaikoura.", price: 195000 },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected to MongoDB");
  const existing = await Tour.countDocuments();
  if (existing > 0) {
    console.log(`Already have ${existing} tours. Adding new ones...`);
  }
  const result = await Tour.insertMany(tours);
  console.log(`Seeded ${result.length} tours successfully!`);
  await mongoose.disconnect();
  console.log("Done.");
}

seed().catch(console.error);
