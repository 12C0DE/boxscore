const mongoose = require("mongoose");

const MlbBoxScoreSchema = mongoose.Schema({
  league: String,
  away_team: {
    team_id: String,
    abbreviation: { type: String, maxLength: 3 },
    active: Boolean,
    first_name: String,
    last_name: String,
    conference: { type: String, enum: ["East", "West"] },
    division: String,
    site_name: String,
    city: String,
    State: String,
    full_name: String,
  },
  home_team: {
    team_id: String,
    abbreviation: { type: String, maxLength: 3 },
    active: Boolean,
    first_name: String,
    last_name: String,
    conference: { type: String, enum: ["East", "West"] },
    division: String,
    site_name: String,
    city: String,
    State: String,
    full_name: String,
  },
  away_period_scores: [Number],
  home_period_scores: [Number],
  away_errors: Number,
  home_errors: Number,
  away_batters: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      position: String,
      bat_order: Number,
      sub_bat_order: Number,
      sacrifices: Number,
      at_bats: Number,
      plate_appearances: Number,
      singles: Number,
      doubles: Number,
      triples: Number,
      home_runs: Number,
      sac_flies: Number,
      sac_hits: Number,
      stolen_bases: Number,
      caught_stealing: Number,
      rbi_with_two_outs: Number,
      total_bases: Number,
      runs: Number,
      hits: Number,
      rbi: Number,
      walks: Number,
      strike_outs: Number,
      left_on_base: Number,
      hit_by_pitch: Number,
      team_abbreviation: String,
      ops: Number,
      avg: Number,
      obp: Number,
      slg: Number,
      at_bats_per_home_run: Number,
      at_bats_per_rbi: Number,
      walk_rate: Number,
      plate_appearances_per_rbi: Number,
      plate_appearances_per_home_run: Number,
      extra_base_hits: Number,
      stolen_base_average: Number,
      strikeout_rate: Number,
      ops_string: String,
      slg_string: String,
      obp_string: String,
      avg_string: String,
      batting_highlights: String,
    },
  ],
  home_batters: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      position: String,
      bat_order: Number,
      sub_bat_order: Number,
      sacrifices: Number,
      at_bats: Number,
      plate_appearances: Number,
      singles: Number,
      doubles: Number,
      triples: Number,
      home_runs: Number,
      sac_flies: Number,
      sac_hits: Number,
      stolen_bases: Number,
      caught_stealing: Number,
      rbi_with_two_outs: Number,
      total_bases: Number,
      runs: Number,
      hits: Number,
      rbi: Number,
      walks: Number,
      strike_outs: Number,
      left_on_base: Number,
      hit_by_pitch: Number,
      team_abbreviation: String,
      ops: Number,
      avg: Number,
      obp: Number,
      slg: Number,
      at_bats_per_home_run: Number,
      at_bats_per_rbi: Number,
      walk_rate: Number,
      plate_appearances_per_rbi: Number,
      plate_appearances_per_home_run: Number,
      extra_base_hits: Number,
      stolen_base_average: Number,
      strikeout_rate: Number,
      ops_string: String,
      slg_string: String,
      obp_string: String,
      avg_string: String,
      batting_highlights: String,
    },
  ],
  away_pitchers: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      pitch_order: Number,
      win: Boolean,
      loss: Boolean,
      save: Boolean,
      hold: Boolean,
      era: Number,
      whip: Number,
      innings_pitched: Number,
      hits_allowed: Number,
      runs_allowed: Number,
      earned_runs: Number,
      walks: Number,
      intentional_walks: Number,
      strike_outs: Number,
      home_runs_allowed: Number,
      pitch_count: Number,
      pitches_strikes: Number,
      wild_pitches: Number,
      hit_by_pitch: Number,
      errors: Number,
      team_abbreviation: String,
    },
  ],
  home_pitchers: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      pitch_order: Number,
      win: Boolean,
      loss: Boolean,
      save: Boolean,
      hold: Boolean,
      era: Number,
      whip: Number,
      innings_pitched: Number,
      hits_allowed: Number,
      runs_allowed: Number,
      earned_runs: Number,
      walks: Number,
      intentional_walks: Number,
      strike_outs: Number,
      home_runs_allowed: Number,
      pitch_count: Number,
      pitches_strikes: Number,
      wild_pitches: Number,
      hit_by_pitch: Number,
      errors: Number,
      team_abbreviation: String,
    },
  ],
  away_fielding: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      errors: Number,
      team_abbreviation: String,
    },
  ],
  home_fielding: [
    {
      last_name: String,
      first_name: String,
      display_name: String,
      errors: Number,
      team_abbreviation: String,
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
  away_batter_totals: {
    sacrifices: Number,
    at_bats: Number,
    plate_appearances: Number,
    singles: Number,
    doubles: Number,
    triples: Number,
    home_runs: Number,
    sac_flies: Number,
    sac_hits: Number,
    stolen_bases: Number,
    caught_stealing: Number,
    rbi_with_two_outs: Number,
    total_bases: Number,
    runs: Number,
    hits: Number,
    rbi: Number,
    walks: Number,
    strike_outs: Number,
    left_on_base: Number,
    hit_by_pitch: Number,
    team_abbreviation: String,
    ops: Number,
    avg: Number,
    obp: Number,
    slg: Number,
    at_bats_per_home_run: Number,
    at_bats_per_rbi: Number,
    walk_rate: Number,
    plate_appearances_per_rbi: Number,
    plate_appearances_per_home_run: Number,
    extra_base_hits: Number,
    stolen_base_average: Number,
    strikeout_rate: Number,
    ops_string: String,
    slg_string: String,
    obp_string: String,
    avg_string: String,
    batting_highlights: String,
  },
  home_batter_totals: {
    sacrifices: Number,
    at_bats: Number,
    plate_appearances: Number,
    singles: Number,
    doubles: Number,
    triples: Number,
    home_runs: Number,
    sac_flies: Number,
    sac_hits: Number,
    stolen_bases: Number,
    caught_stealing: Number,
    rbi_with_two_outs: Number,
    total_bases: Number,
    runs: Number,
    hits: Number,
    rbi: Number,
    walks: Number,
    strike_outs: Number,
    left_on_base: Number,
    hit_by_pitch: Number,
    team_abbreviation: String,
    ops: Number,
    avg: Number,
    obp: Number,
    slg: Number,
    at_bats_per_home_run: Number,
    at_bats_per_rbi: Number,
    walk_rate: Number,
    plate_appearances_per_rbi: Number,
    plate_appearances_per_home_run: Number,
    extra_base_hits: Number,
    stolen_base_average: Number,
    strikeout_rate: Number,
    ops_string: String,
    slg_string: String,
    obp_string: String,
    avg_string: String,
    batting_highlights: String,
  },
});

module.exports = mongoose.model("boxscoresMlb", MlbBoxScoreSchema);
