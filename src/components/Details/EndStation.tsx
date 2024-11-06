import { useContext } from "react";
import { stateContext } from "../../App";

export function EndStation() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { fareDetails } = context;

  if (!fareDetails || !fareDetails.end_station) {
    return null;
  }

  return (
    <div className="flex items-start pb-6 lg:pb-0">
        <time className="w-20 font-semibold text-primary text-right mr-4" dateTime="2023-08-01T06:17">{fareDetails?.time} mins</time>
        <div className="relative flex-1">
            <div className="absolute left-3 -top-12 h-full border-l-2 border-tertiary"></div>
            <div className="absolute w-3 h-3 bg-white rounded-full left-1.5 top-1 border-2 border-tertiary"></div>
            <div className="ml-6 pl-2">
                <h3 className="font-bold text-primary">{fareDetails.end_station.name}</h3>
                <p className="text-sm text-gray-500">Exit side right</p>
                <p className="text-sm text-blue-500">End of your journey</p>
            </div>
        </div>
    </div>
  )
}
