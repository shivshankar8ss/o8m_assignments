import express from "express";
import cors from "cors";
import heroRoutes from "./routes/hero.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/hero", heroRoutes);
app.get("/", (req, res) => {
  res.send("API running");
});

export default app;
