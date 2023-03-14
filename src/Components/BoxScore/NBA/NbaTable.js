import React from "react";
import Table from "@mui/joy/Table";

export const NbaTable = ({ data }) => {
  return (
    <>
      {data ?? (
        <Table
          sx={{ "& tr > *": { textAlign: "center" } }}
          stripe={"odd"}
          borderAxis="xBetween"
        >
          <thead>
            <tr>
              <th></th>
              {data.home_period_scores?.map((col, index) => (
                <th key={`hc${index}`}>{index + 1}</th>
              ))}
              <th>
                <strong>Total</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{data.away_team?.abbreviation}</strong>
              </td>
              {data.away_period_scores?.map((score, index) => (
                <td key={`as${index}`}>{score}</td>
              ))}
              <td>{data.away_totals?.points}</td>
            </tr>
            <tr>
              <td>
                <strong>{data.home_team?.abbreviation}</strong>
              </td>
              {data.home_period_scores?.map((score, index) => (
                <td key={`as${index}`}>{score}</td>
              ))}
              <td>{data.home_totals?.points}</td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};
