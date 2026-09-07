const mongoose = require("mongoose");
require("dotenv").config();

const Room = require("./models/Room");

const rooms = [
  {
    title: "Modern PG",
    city: "Pune",
    propertyType: "PG",
    price: 8000,
    description: "Comfortable PG accommodation for students.",
    image: "https://picsum.photos/400/250?random=1",
    location: "Pune",
    amenities: ["2 Beds", "Free WiFi", "Food Included"],
    rating: 4.8,
    available: true,
  },

  {
    title: "Girls Hostel",
    city: "Mumbai",
    propertyType: "Hostel",
    price: 6500,
    description: "Safe and comfortable hostel accommodation.",
    image: "https://picsum.photos/400/250?random=2",
    location: "Mumbai",
    amenities: ["2 Beds", "Free WiFi", "Food Included"],
    rating: 4.9,
    available: true,
  },

  {
    title: "Shared Flat",
    city: "Nagpur",
    propertyType: "Flat",
    price: 10000,
    description: "Affordable shared flat for students.",
    image: "https://picsum.photos/400/250?random=3",
    location: "Nagpur",
    amenities: ["2 Beds", "Free WiFi", "Food Included"],
    rating: 4.7,
    available: true,
  },
];

const seedRooms = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected! 🍃");

    await Room.deleteMany();

    await Room.insertMany(rooms);

    console.log("Rooms added successfully! 🏠🎉");

    await mongoose.connection.close();

    console.log("Database connection closed.");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedRooms();