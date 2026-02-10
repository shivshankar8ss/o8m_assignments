import Hero from "../models/Hero.js";

export const getActiveHeroes = async (req, res) => {
  try {
    const heroes = await Hero.find({ isActive: true })
      .sort({ priority: 1 });

    res.status(200).json(heroes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHero = async (req, res) => {
  try {
    const hero = await Hero.create(req.body);
    res.status(201).json(hero);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
