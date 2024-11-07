import { createContext, useEffect, useState } from "react";
import { fetchFare, fetchStations } from "./api/api";
import { FareDetails, Line, StateContextType, Station, Ticket } from "./types/types";
import { Details, Fare, Header } from "./components";
import { Footer } from "./components/Footer";

// eslint-disable-next-line react-refresh/only-export-components
export const stateContext = createContext<StateContextType | null>(null);

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [line, setLine] = useState<Line | null>(null);
  const [startStation, setStartStation] = useState<number | null>(null);
  const [endStation, setEndStation] = useState<number | null>(null);
  const [fareDetails, setFareDetails] = useState<FareDetails | null>(null);
  const [ticketType, setTicketType] = useState<Ticket>("sjt");
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  const [selectedHour, setSelectedHour] = useState<string>(String(currentHour).padStart(2, '0'));
  const [selectedMinute, setSelectedMinute] = useState<string>(String(currentMinute).padStart(2, '0'));
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  const [toggleIS, setToggleIS] = useState<boolean>(false);

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
    <stateContext.Provider value={{stations, line, startStation, endStation, setStartStation, setEndStation, handleFetchStations, handleFetchFare, setFareDetails, fareDetails, setTicketType, ticketType, selectedHour, setSelectedHour, selectedMinute, setSelectedMinute, hours, minutes, toggleIS, setToggleIS}}>
    <main className="bg-gray-200">
      <Header />
      <Fare/>
      <Details />
      <Footer />
    </main>
    </stateContext.Provider>
  );
}

export default App;
