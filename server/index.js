import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello to memories api");
// });

// const CONNECTION_URL = "mongodb+srv://evandrarf:evandrarf@cluster0.kdsrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`)))
  .catch((err) => console.log(err));

// .connect(process.env.CONNECTION_URL)
