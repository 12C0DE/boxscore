import React from "react";
import Table from "@mui/joy/Table";
import { Paper, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { TeamName } from "../../TeamName";

export const MlbTable = ({ data }) => {
  return (
    <>
      {data ? (
        <Stack direction="column">
          <Stack
            direction="row"
            spacing={8}
            alignContent="space-between"
            justifyContent="center"
            marginTop={2}
            marginBottom={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              className="text-2xl font-bold"
            >
              <TeamName name={data?.away_team?.full_name} side="AWAY" />
              <div className="ml-4">{data?.away_batter_totals?.runs}</div>
              <div>
                {data?.away_batter_totals?.runs >
                data?.home_batter_totals?.runs ? (
                  <ChevronLeftIcon className="text-lg" />
                ) : (
                  <div className="mx-2"></div>
                )}
              </div>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              className="text-2xl font-bold"
            >
              <div>
                {data?.away_batter_totals?.runs <
                data?.home_batter_totals?.runs ? (
                  <ChevronRightIcon className="text-lg" />
                ) : (
                  <div className="mx-2" />
                )}
              </div>
              <div className="mr-4">{data?.home_batter_totals?.runs}</div>
              <TeamName name={data?.home_team?.full_name} side="HOME" />
            </Stack>
          </Stack>
          <Paper elevation={2}>
            <Table
              sx={{ "& tr > *": { textAlign: "center" } }}
              stripe={"odd"}
              borderAxis="bothBetween"
            >
              <thead>
                <tr className="sm:text-md text-lg">
                  <th></th>
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
                  <td className="xs:text-sm xs:font-semi text-base font-semibold">
                    {data?.away_team.abbreviation}
                  </td>
                  {data?.away_period_scores.map((score, index) => (
                    <td key={`as${index}`}>{score}</td>
                  ))}
                  <td>
                    <strong>{data?.away_batter_totals?.runs}</strong>
                  </td>
                  <td>
                    <strong>{data?.away_batter_totals?.hits}</strong>
                  </td>
                  <td>
                    <strong>{data?.away_errors}</strong>
                  </td>
                </tr>
                <tr>
                  <td className="xs:text-sm xs:font-semibold text-base font-bold">
                    {data?.home_team.abbreviation}
                  </td>
                  {data.home_period_scores?.map((score, index) => (
                    <td key={`hs${index}`}>{score}</td>
                  ))}
                  <td>
                    <strong>{data?.home_batter_totals?.runs}</strong>
                  </td>
                  <td>
                    <strong>{data?.home_batter_totals?.hits}</strong>
                  </td>
                  <td>
                    <strong>{data?.home_errors}</strong>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Paper>
        </Stack>
      ) : (
        <p>Loading results</p>
      )}
    </>
  );
};
