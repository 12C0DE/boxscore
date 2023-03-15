import React, { useEffect, useState, useRef, Suspense } from "react";
import { MlbTable } from "./MLB/MlbTable";
import { NbaTable } from "./NBA/NbaTable";

export const BoxScore = ({ league }) => {
  const [scores, setScores] = useState({});
  const dataRef = useRef();

  useEffect(() => {
    fetch(`/gamedata/${league}/boxscore`)
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
