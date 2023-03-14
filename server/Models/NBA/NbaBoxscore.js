// import { PlayerStatsSchema } from "./Player";
// const PlayerStatsSchema = require("./Player");
// const TeamSchema = require("../Team");
// const TotalsSchema = require("./Totals");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const NbaBoxScoreSchema = new Schema({
  league: { type: String, require: true },
  away_team: {
    team_id: String,
    abbreviation: String,
    active: Boolean,
    first_name: String,
    last_name: String,
    conference: String,
    division: String,
    site_name: String,
    city: String,
    State: String,
    full_name: String,
  },
  home_team: {
    team_id: String,
    abbreviation: String,
    active: Boolean,
    first_name: String,
    last_name: String,
    conference: String,
    division: String,
    site_name: String,
    city: String,
    State: String,
    full_name: String,
  },
  away_period_scores: [Number],
  home_period_scores: [Number],
  away_stats: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      position: String,
      team_abbreviation: String,
      is_Starter: Boolean,
      minutes: Number,
      points: Number,
      assists: Number,
      turnovers: Number,
      steals: Number,
      blocks: Number,
      field_goals_attempted: Number,
      field_goals_made: Number,
      three_point_field_goals_attempted: Number,
      three_point_field_goals_made: Number,
      free_throws_attempted: Number,
      free_throws_made: Number,
      defensive_rebounds: Number,
      offensive_rebounds: Number,
      personal_fouls: Number,
      field_goal_percentage: Number,
      three_point_percentage: Number,
      free_throw_percentage: Number,
    },
  ],
  home_stats: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      position: String,
      team_abbreviation: String,
      is_Starter: Boolean,
      minutes: Number,
      points: Number,
      assists: Number,
      turnovers: Number,
      steals: Number,
      blocks: Number,
      field_goals_attempted: Number,
      field_goals_made: Number,
      three_point_field_goals_attempted: Number,
      three_point_field_goals_made: Number,
      free_throws_attempted: Number,
      free_throws_made: Number,
      defensive_rebounds: Number,
      offensive_rebounds: Number,
      personal_fouls: Number,
      field_goal_percentage: Number,
      three_point_percentage: Number,
      free_throw_percentage: Number,
    },
  ],
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
  away_totals: {
    minutes: Number,
    points: Number,
    assists: Number,
    turnovers: Number,
    steals: Number,
    blocks: Number,
    field_goals_attempted: Number,
    field_goals_made: Number,
    three_point_field_goals_attempted: Number,
    three_point_field_goals_made: Number,
    free_throws_attempted: Number,
    free_throws_made: Number,
    defensive_rebounds: Number,
    offensive_rebounds: Number,
    personal_fouls: Number,
    field_goal_percentage: Number,
    three_point_percentage: Number,
    free_throw_percentage: Number,
  },
  home_totals: {
    minutes: Number,
    points: Number,
    assists: Number,
    turnovers: Number,
    steals: Number,
    blocks: Number,
    field_goals_attempted: Number,
    field_goals_made: Number,
    three_point_field_goals_attempted: Number,
    three_point_field_goals_made: Number,
    free_throws_attempted: Number,
    free_throws_made: Number,
    defensive_rebounds: Number,
    offensive_rebounds: Number,
    personal_fouls: Number,
    field_goal_percentage: Number,
    three_point_percentage: Number,
    free_throw_percentage: Number,
  },
});

module.exports = mongoose.model("boxscoresNba", NbaBoxScoreSchema);
