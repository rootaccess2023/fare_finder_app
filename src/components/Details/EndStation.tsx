import { useContext } from "react";
import { stateContext } from "../../App";

export function EndStation() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { fareDetails, selectedHour, selectedMinute } = context;

  if (!fareDetails || !fareDetails.end_station) {
    return null;
  }

  const selectedHourNumber = parseInt(selectedHour, 10);
  const selectedMinuteNumber = parseInt(selectedMinute, 10);

  const selectedTimeInMinutes = selectedHourNumber * 60 + selectedMinuteNumber;
  const totalMinutes = selectedTimeInMinutes + fareDetails.time;

  const resultHour = Math.floor(totalMinutes / 60) % 24;
  const resultMinute = totalMinutes % 60;

  const formattedTime = `${resultHour.toString().padStart(2, "0")}:${resultMinute.toString().padStart(2, "0")}`;

  return (
    <div className="flex items-start pb-6 lg:pb-0">
        <time className="w-20 font-semibold text-primary text-right mr-4">
          {formattedTime}
        </time>
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
