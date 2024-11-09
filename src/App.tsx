import { createContext, useEffect, useState } from "react";
import { fetchFare, fetchStations } from "./api/api";
import { FareDetails, Line, StateContextType, Station, Ticket } from "./types/types";
import { Fare, Header } from "./components";
import { Footer } from "./components/Footer";
import { Details } from "./components/Details";
import loader from "./assets/ff_loader.gif";

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
  const [toggleButton, setToggleButton] = useState<boolean>(true);

  const [isLoading, setIsLoading] = useState(true);  // Loading state
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);

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

    const timer1 = setTimeout(() => setShowFirstLine(true), 0);
    const timer2 = setTimeout(() => setShowSecondLine(true), 5000);
    const timer3 = setTimeout(() => setShowThirdLine(true), 10000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <img className="h-12" src={loader} alt="Fare Finder Logo" />
        <div className="flex flex-col font-light items-center">
          {showFirstLine && (
            <p className="mt-4 text-gray-600 text-lg">Hold tight! We're fetching your stations faster than a train on a good day.</p>
          )}
          {showSecondLine && (
            <p className="mt-2 text-gray-500">In the meantime, here’s a fun fact: Waiting for data burns 0 calories... but builds patience like a pro!</p>
          )}
          {showThirdLine && (
            <p className="mt-2 text-gray-500">It’s just a few seconds, promise! Or maybe a few more... ⏳</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <stateContext.Provider value={{ stations, line, startStation, endStation, setStartStation, setEndStation, handleFetchStations, handleFetchFare, setFareDetails, fareDetails, setTicketType, ticketType, selectedHour, setSelectedHour, selectedMinute, setSelectedMinute, hours, minutes, toggleIS, setToggleIS, toggleButton, setToggleButton }}>
      <main className="bg-gray-200">
        <Header />
        <Fare />
        <Details />
        <Footer />
      </main>
    </stateContext.Provider>
  );
}

export default App;
