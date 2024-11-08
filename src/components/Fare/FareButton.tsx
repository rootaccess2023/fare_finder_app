import { useContext } from "react";
import { stateContext } from "../../App";
import { fetchFare } from "../../api/api";
import { TrainLineProps } from "../../types/types";


export function FareButton({setFromQuery, setToQuery, setToggleButton, toggleButton}: TrainLineProps) {

  const context = useContext(stateContext);
  if (!context) return null;

  const {line, startStation, endStation, setFareDetails, setToggleIS, setEndStation, setStartStation} = context;

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
    setToggleButton(false)
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setFromQuery("");
    setToQuery("");
    setToggleButton(true);
    setToggleIS(false);
    setEndStation(null);
    setStartStation(null);
  }

  return (
    <>
      {toggleButton ? (
      <button
        onClick={handleFetchFare}
        className="h-[45px] min-w-[10.3rem] flex justify-center items-center bg-tertiary hover:bg-primary text-white rounded"
      >
          Plan
      </button>
      ) : (
      <button
      onClick={handleReset}
      className="h-[45px] min-w-[10.3rem] flex justify-center items-center bg-tertiary hover:bg-primary text-white rounded"
    >
        Reset
    </button>
      )}
   </>
  )
}
