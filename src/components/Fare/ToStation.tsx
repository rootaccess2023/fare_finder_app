import { RxCross2 } from "react-icons/rx";
import { ToStationsProps } from "../../types/types";

export function ToStation({toQuery, setToQuery, setToggleToList, setToggleButton} : ToStationsProps) {
  return (
    <div className="relative w-full flex items-center bg-white h-12 rounded">
        {!toQuery && (
          <label htmlFor="end-station" className="absolute top-[0.75rem] left-4 text-[#003082] font-bold">to</label>
        )}
        <input
            id="start-station"
            className={`w-full ${toQuery === "" ? "ml-[3.75rem]" : "ml-3" } text-primary font-semibold tracking-wide placeholder:font-light focus:outline-none`}
            placeholder="start station"
            type="text"
            value={toQuery}
            onChange={e => {setToQuery(e.target.value); setToggleButton(true)}}
            onFocus={() => {setToggleToList(true); }}
            onBlur={() => {setToggleToList(false); }}
        />
        {toQuery && (
        <span
          onClick={() => setToQuery("")}
          className="absolute right-3">
          <RxCross2 />
        </span>
        )}
    </div>
  )
}
