import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import { categoryRoute } from "./routes/categoryRoute.js";
import { productRouter } from "./routes/productRoute.js";
import { miscRouter } from "./routes/miscRoute.js";
import { UserRouter } from "./routes/userRoute.js";

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
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/misc", miscRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
