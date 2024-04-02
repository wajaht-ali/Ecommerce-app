import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//env config
dotenv.config();

//connect db
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
//routes
app.use("/api/v1/auth", authRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
