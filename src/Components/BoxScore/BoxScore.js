import React, { useEffect, useState, useRef, Suspense } from "react";
import { MlbTable } from "./MLB/MlbTable";
import { NbaTable } from "./NBA/NbaTable";

export const BoxScore = ({ league }) => {
  const [scores, setScores] = useState({});
  const dataRef = useRef();

  useEffect(() => {
    const boxScoreURL =
      league === "MLB"
        ? "https://boxscore.netlify.app/.netlify/functions/boxscoresmlb-get"
        : "https://boxscore.netlify.app/.netlify/functions/boxscoresNba-get";

    fetch(boxScoreURL)
      .then((res) => res.json())
      .then((data) => {
        dataRef.current = data;
        setScores(data);
      })
      .catch((e) => console.log(e.message));
  }, [league]);

  return (
    <Suspense fallback={<p>Loading</p>}>
      {league === "MLB" ? (
        <MlbTable data={dataRef.current} />
      ) : (
        <NbaTable data={dataRef.current} />
      )}
    </Suspense>
  );
};
