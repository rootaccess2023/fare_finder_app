import { useContext } from "react";
import { stateContext } from "../../App";
import { fetchFare } from "../../api/api";


export function FareButton() {

  const context = useContext(stateContext);
  if (!context) return null;

  const {line, startStation, endStation, setFareDetails} = context;

  const handleFetchFare = async (e: React.MouseEvent) => {
    e.preventDefault();
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
    <button
     onClick={handleFetchFare}
      className="h-[45px] min-w-[10.3rem] flex justify-center items-center bg-tertiary hover:bg-primary text-white rounded"
    >
        Plan
    </button>
  )
}
