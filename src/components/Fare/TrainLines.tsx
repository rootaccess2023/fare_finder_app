import { useContext } from "react";
import { PiTrainLight } from "react-icons/pi";
import { stateContext } from "../../App";

export function TrainLines() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { handleFetchStations } = context;

  return (
    <div className="flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer">
        <h2 className="flex gap-2">
            <PiTrainLight className="size-[23px]" />
            <span>Train line:</span>
        </h2>
        <select className="bg-transparent">
            <option onClick={() => handleFetchStations('lrt1')} value="lrt1">LRT 1</option>
            <option onClick={() => handleFetchStations('lrt2')} value="lrt2">LRT 2</option>
            <option onClick={() => handleFetchStations('mrt3')} value="mrt3">MRT 3</option>
        </select>
    </div>
  )
}
