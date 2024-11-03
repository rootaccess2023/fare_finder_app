import { useState } from "react";
import { fetchStations } from "./api/api"
import { Station } from "./types/types";

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [line, setLine] = useState<Line | null>(null)

  type Line = "lrt1" | "lrt2" | "mrt3"

  const handleFetchStations = async (line: Line) => {
    try {
      const stationsData = await fetchStations(line);
      setStations(stationsData);
      setLine(line);
    } catch (error) {
      console.error("Failed to fetch stations: ", error);
    }
  }
  return (
    <>

      <button onClick={() => handleFetchStations("lrt1")}>LRT1</button>
      <button onClick={() => handleFetchStations("lrt2")}>LRT2</button>
      <button onClick={() => handleFetchStations("mrt3")}>MRT3</button>


      {stations.map((station) => (
        <div key={station.name}>
          <p>{station.name}</p>
        </div>
      ))}
    </>
  )
}

export default App
