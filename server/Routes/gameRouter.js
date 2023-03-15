const express = require("express");
const router = express.Router();
const NbaGameData = require("../Models/NBA/NbaBoxscore");
const MlbGameData = require("../Models/MLB/MlbBoxscore");

//get boxscore data points
router.get("/mlb/boxscore", async (req, res) => {
  try {
    const boxScoreMlb = await MlbGameData.findOne().select([
      "away_team.abbreviation",
      "away_team.full_name",
      "away_period_scores",
      "away_batter_totals.runs",
      "away_batter_totals.hits",
      "away_errors",
      "home_team.abbreviation",
      "home_team.full_name",
      "home_period_scores",
      "home_batter_totals.runs",
      "home_batter_totals.hits",
      "home_errors",
    ]);
    res.json(boxScoreMlb);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/nba/boxscore", async (req, res) => {
  try {
    const gameDataNba = await NbaGameData.findOne().select([
      "away_team.abbreviation",
      "away_team.full_name",
      "away_period_scores",
      "away_totals.points",
      "home_team.abbreviation",
      "home_team.full_name",
      "home_period_scores",
      "home_totals.points",
    ]);
    res.json(gameDataNba);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
