import { createContext, useEffect, useState } from "react";
import { fetchFare, fetchStations } from "./api/api";
import { FareDetails, Line, StateContextType, Station } from "./types/types";
import { Details, Fare, Header } from "./components";

export const stateContext = createContext<StateContextType | null>(null);

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

  useEffect(() => {
    handleFetchStations("lrt1");
  }, [])

  return (
    <stateContext.Provider value={{stations, line, startStation, endStation, setStartStation, setEndStation, handleFetchStations, handleFetchFare, setFareDetails, fareDetails}}>
    <main className="h-screen bg-gray-200">
      <Header />
      <Fare/>
      <Details />


      {fareDetails && (
        <div>
          <h3>Fare Information</h3>
          <p>SJT Fare: {fareDetails.start_station.name}</p>
          <p>SJT Fare: {fareDetails.end_station.name}</p>
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
    </stateContext.Provider>
  );
}

export default App;
