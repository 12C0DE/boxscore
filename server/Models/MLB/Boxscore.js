import { TeamSchema } from "../Team";
import { MlbBatterSchema } from "./Batter";
import { PitcherSchema } from "./Pitcher";
import { FieldingSchema } from "./Fielding";
import { BatDataSchema } from "./BatData";
const mongoose = require("mongoose");

const BoxScoreSchema = mongoose.Schema({
  league: String,
  away_team: { type: TeamSchema },
  home_team: { type: TeamSchema },
  away_period_scores: [Number],
  home_period_scores: [Number],
  away_errors: Number,
  home_errors: Number,
  away_batters: [{ type: MlbBatterSchema }],
  home_batters: [{ type: MlbBatterSchema }],
  away_pitchers: [{ type: PitcherSchema }],
  home_pitchers: [{ type: PitcherSchema }],
  away_fielding: [{ type: FieldingSchema }],
  home_fielding: [{ type: FieldingSchema }],
  officials: [
    {
      position: String,
      first_name: String,
      last_name: String,
    },
  ],
  event_information: {
    temperature: Number,
    site: {
      capacity: Number,
      surface: String,
      name: String,
      state: String,
      city: String,
    },
    attendance: Number,
    duration: Number,
    status: String,
    season_type: String,
    start_date_time: Date,
  },
  away_batter_totals: { type: BatDataSchema },
  home_batter_totals: { type: BatDataSchema },
});

module.exports = mongoose.model("boxscore", BoxScoreSchema);
