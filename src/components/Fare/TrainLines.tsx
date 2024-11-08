import { useContext } from "react";
import { PiTrainLight } from "react-icons/pi";
import { stateContext } from "../../App";
import { TrainLineProps } from "../../types/types";

export function TrainLines({setFromQuery, setToQuery}: TrainLineProps) {

  const context = useContext(stateContext);
  if (!context) return null;
  const { handleFetchStations } = context;

  return (
    <div className="w-fit flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer sm:flex-row">
        <h2 className="flex gap-2">
            <PiTrainLight className="size-[23px]" />
            <span>Train line:</span>
        </h2>
        <select className="bg-transparent">
            <option onTouchStart={() => handleFetchStations('lrt1')} onClick={() => { handleFetchStations('lrt1'); setFromQuery(""); setToQuery("") }} value="lrt1">LRT 1</option>
            <option onTouchStart={() => handleFetchStations('lrt2')} onClick={() => { handleFetchStations('lrt2'); setFromQuery(""); setToQuery("") }} value="lrt2">LRT 2</option>
            <option onTouchStart={() => handleFetchStations('mrt3')} onClick={() => { handleFetchStations('mrt3'); setFromQuery(""); setToQuery("") }} value="mrt3">MRT 3</option>
        </select>
    </div>
  )
}
