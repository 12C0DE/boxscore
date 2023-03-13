export const TeamSchema = {
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
};
