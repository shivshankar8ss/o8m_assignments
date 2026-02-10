import express from "express";
import {
  getActiveHeroes,
  createHero
} from "../controllers/hero.controller.js";

const router = express.Router();

router.get("/", getActiveHeroes);
router.post("/", createHero);

export default router;
