// Score Route

const express = require("express");
const router = express.Router();
const getProfile = require("../helper/calc");

router.get("/", async (req, res) => {
  const username = req.query.username.toString();
  const profile = await getProfile(username);

  if (profile == "error") {
    return res.status(404).json({ error: "NOT FOUND" });
  }

  const userScore = {
    score: profile.score,
  };

  res.status(200).json({ score: userScore.score });
});

module.exports = router;
