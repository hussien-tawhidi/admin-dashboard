import mongoose from "mongoose";

let isConnected = false; // Flag to track the connection status

export const dbConnect = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return Promise.resolve(true); // If already connected, return the resolved promise
  }

  try {
    // Attempt to connect
    const { connection } = await mongoose.connect(
      process.env.MONGODB_URL as string
    );

    if (connection.readyState === 1) {
      isConnected = true; // Mark as connected
      console.log("MongoDB Connected");
      return Promise.resolve(true); // Return resolved promise if connected
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return Promise.reject(error); // Reject the promise if connection fails
  }
};
