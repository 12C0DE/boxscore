import React from "react";
import Table from "@mui/joy/Table";
import { Paper, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { TeamName } from "../../TeamName";

export const NbaTable = ({ data }) => {
  return (
    <div className="">
      <Stack
        className="xs:mt-8 grid flex-wrap md:flex-nowrap justify-center"
        direction="row"
      >
        <div className="flex flex-row flex-nowrap mx-2 items-center order-0 pb-2">
          <TeamName name={data?.away_team?.full_name} side="AWAY" />
          <div className="text-2xl font-bold flex flex-row">
            <div>{data?.away_totals?.points}</div>
            <div>
              {data?.away_totals?.points > data?.home_totals?.points ? (
                <ChevronLeftIcon className="text-lg" />
              ) : (
                <div className="mx-2"></div>
              )}
            </div>
          </div>
        </div>
        <Paper elevation={2} className="max-w-lg order-2 md:order-1">
          <Table
            sx={{ "& tr > *": { textAlign: "center" } }}
            stripe={"odd"}
            borderAxis="bothBetween"
          >
            <thead>
              <tr className="text-lg">
                <th></th>
                {data.home_period_scores?.map((col, index) => (
                  <th key={`hc${index}`} className="font-semibold">
                    {index + 1}
                  </th>
                ))}
                <th>
                  <strong>T</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="xs:text-sm xs:font-semibold text-base font-bold">
                  {data.away_team?.abbreviation}
                </td>
                {data.away_period_scores?.map((score, index) => (
                  <td key={`as${index}`}>{score}</td>
                ))}
                <td>{data.away_totals?.points}</td>
              </tr>
              <tr>
                <td className="xs:text-sm xs:font-semibold text-base font-bold">
                  {data.home_team?.abbreviation}
                </td>
                {data.home_period_scores?.map((score, index) => (
                  <td key={`as${index}`}>{score}</td>
                ))}
                <td>{data.home_totals?.points}</td>
              </tr>
            </tbody>
          </Table>
        </Paper>
        <div className="flex flex-row flex-nowrap items-center mx-2 order-1 md:order-2 pb-2">
          <div className="text-2xl font-bold flex flex-row">
            <div>
              {data?.away_totals?.points < data?.home_totals?.points ? (
                <ChevronRightIcon className="text-lg" />
              ) : (
                <div className="mx-2" />
              )}
            </div>
            <div>{data?.home_totals?.points}</div>
          </div>
          <TeamName name={data?.home_team?.full_name} side="HOME" />
        </div>
      </Stack>
    </div>
  );
};
