import mongoose from "mongoose";

const connection = {};

const connectToDB = async () => {
  if (connection.isConnected) {
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connect ${conn.connection.host}`);
    connection.isConnected = conn.connections[0].readyState;
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};


export default connectToDB