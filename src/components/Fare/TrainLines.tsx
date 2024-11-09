import { useContext } from "react";
import { stateContext } from "../../App";
import { PiTrainLight } from "react-icons/pi";
import { Line, TrainLineProps } from "../../types/types";

export function TrainLines({ setFromQuery, setToQuery }: TrainLineProps) {
  const context = useContext(stateContext);
  if (!context) return null;
  const { handleFetchStations, setToggleButton } = context;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as Line;
    handleFetchStations(value);
    setFromQuery("");
    setToQuery("");
    setToggleButton(true);
  };

  return (
    <div className="w-fit flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer sm:flex-row">
      <h2 className="flex gap-2">
        <PiTrainLight className="size-[23px]" />
        <span>Train line:</span>
      </h2>
      <select className="bg-transparent" onChange={handleSelectChange}>
        <option value="lrt1">LRT 1</option>
        <option value="lrt2">LRT 2</option>
        <option value="mrt3">MRT 3</option>
      </select>
    </div>
  );
}
