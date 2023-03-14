import React from "react";
import Table from "@mui/joy/Table";

export const MlbTable = ({ data }) => {
  return (
    <div>
      {data ? (
        <Table
          sx={{ "& tr > *": { textAlign: "center" } }}
          stripe={"odd"}
          borderAxis="xBetween"
        >
          <thead>
            <tr>
              <th rowSpan={2}></th>
              <th
                colSpan={data?.home_period_scores.length}
                style={{ textAlign: "center" }}
              >
                Innings
              </th>
            </tr>
            <tr>
              {data?.home_period_scores.map((col, index) => (
                <th key={`hc${index}`}>{index + 1}</th>
              ))}
              <th>R</th>
              <th>H</th>
              <th>E</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{data?.away_team.abbreviation}</strong>
              </td>
              {data?.away_period_scores.map((score, index) => (
                <td key={`as${index}`}>{score}</td>
              ))}
              <td>
                <strong>{data?.away_batter_totals?.runs}</strong>
              </td>
              <td>
                <strong>{data?.away_batter_totals.hits}</strong>
              </td>
              <td>
                <strong>{data?.away_errors}</strong>
              </td>
            </tr>
            <tr>
              <td>
                <strong>{data?.home_team.abbreviation}</strong>
              </td>
              {data.home_period_scores?.map((score, index) => (
                <td key={`hs${index}`}>{score}</td>
              ))}
              <td>
                <strong>{data?.home_batter_totals?.runs}</strong>
              </td>
              <td>
                <strong>{data?.home_batter_totals.hits}</strong>
              </td>
              <td>
                <strong>{data?.home_errors}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <p>Loading results</p>
      )}
    </div>
  );
};
