import mongoose from "mongoose";

const dbUri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected!");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;