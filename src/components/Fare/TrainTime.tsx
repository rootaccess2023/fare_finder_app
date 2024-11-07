import { useContext } from "react";
import { PiClockUserLight } from "react-icons/pi";
import { stateContext } from "../../App";
export function TrainTime() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { selectedHour, setSelectedHour, selectedMinute, setSelectedMinute, hours, minutes } = context;

  return (
    <>
    <div className="w-fit flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer sm:flex-row">
        <h2 className="flex gap-2">
            <PiClockUserLight className="size-[23px]" />
            <div className="flex items-center">
                <select className="bg-transparent appearance-none cursor-pointer" value={selectedHour} onChange={(e) => setSelectedHour(e.target.value)}>
                  {hours.map((hour) => (
                    <option key={hour} value={hour}>
                      {hour}
                    </option>
                  ))}
                </select>
                <p>:</p>
                <select className="bg-transparent cursor-pointer" value={selectedMinute} onChange={(e) => setSelectedMinute(e.target.value)}>
                  {minutes.map((minute) => (
                    <option key={minute} value={minute}>
                      {minute}
                    </option>
                  ))}
                </select>
            </div>
        </h2>
    </div>
    </>
  )
}
