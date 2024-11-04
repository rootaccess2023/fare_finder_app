import { useState } from "react";
import { fetchFare, fetchStations } from "./api/api";
import { FareDetails, Station } from "./types/types";
import { Details, Fare, Header } from "./components";

type Line = "lrt1" | "lrt2" | "mrt3";

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [line, setLine] = useState<Line | null>(null);
  const [startStation, setStartStation] = useState<number | null>(null);
  const [endStation, setEndStation] = useState<number | null>(null);
  const [fareDetails, setFareDetails] = useState<FareDetails | null>(null);

  const handleFetchStations = async (line: Line) => {
    try {
      const stationsData = await fetchStations(line);
      setStations(stationsData);
      setLine(line);
    } catch (error) {
      console.error("Failed to fetch stations: ", error);
    }
  };

  const handleFetchFare = async () => {
    if (line && startStation && endStation) {
      try {
        const fareData = await fetchFare(line, startStation, endStation);
        setFareDetails(fareData);
      } catch (error) {
        console.error("Failed to fetch fare: ", error);
      }
    }
  };

  return (
    <main className="h-screen bg-gray-200">
      <Header />
      <Fare />
      <Details />
      <button onClick={() => handleFetchStations("lrt1")}>LRT1</button>
      <button onClick={() => handleFetchStations("lrt2")}>LRT2</button>
      <button onClick={() => handleFetchStations("mrt3")}>MRT3</button>

      <label htmlFor="start-station">Start Station:</label>
      <select id="start-station" onChange={(e) => setStartStation(Number(e.target.value))} value={startStation || ""}>
        <option value="">Select a station</option>
        {stations.map((station) => (
          <option key={station.id} value={station.id}>{station.name}</option>
        ))}
      </select>

      <label htmlFor="end-station">End Station:</label>
      <select id="end-station" onChange={(e) => setEndStation(Number(e.target.value))} value={endStation || ""}>
        <option value="">Select a station</option>
        {stations.map((station) => (
          <option key={station.id} value={station.id}>{station.name}</option>
        ))}
      </select>

      <button onClick={handleFetchFare}>Calculate Fare</button>

      {fareDetails && (
        <div>
          <h3>Fare Information</h3>
          <p>SJT Fare: {fareDetails.sjt_fare}</p>
          <p>SVT Fare: {fareDetails.svt_fare}</p>
          <p>Distance: {fareDetails.distance} km</p>
          <p>Estimated Travel Time: {fareDetails.time} mins</p>
          <h4>Stations Between</h4>
          <ul>
            {fareDetails.stations_between.map((station) => (
              <li key={station.id}>{station.name}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default App;
