const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.REACT_APP_DB_CONNECTION);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.REACT_APP_DB_NAME);
    const collection = database.collection("boxscoresmlbs");
    const results = await collection.findOne(
      {},
      {
        projection: {
          "away_team.abbreviation": 1,
          "away_team.full_name": 1,
          away_period_scores: 1,
          "away_batter_totals.runs": 1,
          "away_batter_totals.hits": 1,
          away_errors: 1,
          "home_team.abbreviation": 1,
          "home_team.full_name": 1,
          home_period_scores: 1,
          "home_batter_totals.runs": 1,
          "home_batter_totals.hits": 1,
          home_errors: 1,
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
