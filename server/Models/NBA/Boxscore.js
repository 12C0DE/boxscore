import { PlayerStatsSchema } from "./Player";
import { TeamSchema } from "../Team";
import { TotalsSchema } from "./Totals";
const mongoose = require("mongoose");

const BoxScoreSchema = mongoose.Schema({
  league: { type: String, require: true },
  away_team: { type: TeamSchema },
  home_team: { type: TeamSchema },
  away_period_scores: [Number],
  home_period_scores: [Number],
  away_stats: [{ type: PlayerStatsSchema }],
  home_stats: [{ type: PlayerStatsSchema }],
  officials: [
    {
      position: String | null,
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
  away_totals: { type: TotalsSchema },
  home_totals: { type: TotalsSchema },
});

module.exports = mongoose.model("boxscore", BoxScoreSchema);
