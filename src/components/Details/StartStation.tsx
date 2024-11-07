import { useContext } from "react";
import { stateContext } from "../../App";

export function StartStation() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { fareDetails, selectedHour, selectedMinute } = context;

  if (!fareDetails || !fareDetails.start_station) {
    return null;
  }

  return (
    <div className="flex items-start pt-6 lg:pt-0">
        <time className="font-semibold text-primary w-20 text-right mr-4" dateTime="2023-08-01T06:17">{selectedHour}:{selectedMinute}</time>
            <div className="h-10 relative flex-1">
                <div className="absolute left-3 top-1 h-full border-l-2 border-tertiary"></div>
                <div className="absolute w-3 h-3 bg-white rounded-full left-1.5 top-1 border-2 border-tertiary"></div>
                <div className="ml-6 pl-2">
                    <h3 className="font-bold text-blue-800 tracking-wider">{fareDetails.start_station.name}</h3>
                </div>
            </div>
    </div>
  )
}
