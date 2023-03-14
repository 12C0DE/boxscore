import React, { useEffect, useState, useRef, Suspense, lazy } from "react";
import { MlbTable } from "./MLB/MlbTable";
import { NbaTable } from "./NBA/NbaTable";

export const BoxScore = ({ league }) => {
  const [scores, setScores] = useState({});
  const dataRef = useRef();
  //   const MlbTable = lazy(() => import("./MLB/MlbTable"));
  //   const NbaTable = lazy(() => import("./NBA/NbaTable"));

  useEffect(() => {
    fetch(`http://localhost:3001/gamedata/${league}/boxscore`)
      .then((res) => res.json())
      .then((data) => {
        setScores(data);
        dataRef.current = data;
      })
      .catch((e) => console.log(e.message));
  }, [league]);

  return (
    <div>
      <Suspense fallback={<p>Loading</p>}>
        {league === "MLB" ? (
          <MlbTable data={dataRef.current} />
        ) : (
          <NbaTable data={dataRef.current} />
        )}
      </Suspense>
    </div>
  );
};
