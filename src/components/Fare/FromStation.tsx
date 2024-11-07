import { RxCross2 } from "react-icons/rx";
import { FromStationsProps } from "../../types/types";

export function FromStation({fromQuery, setFromQuery, setToggleFromList, setToggleButton}: FromStationsProps) {
  return (
    <div className="relative w-full flex items-center bg-white h-12 rounded">
        {!fromQuery && (
          <label htmlFor="start-station" className="absolute top-[0.75rem] left-4 text-[#003082] font-bold">from</label>
        )}
        <input
            id="start-station"
            className={`w-full ${fromQuery === "" ? "ml-[3.75rem]" : "ml-3" } text-primary font-semibold tracking-wide placeholder:font-light focus:outline-none`}
            placeholder="start station"
            type="text"
            value={fromQuery}
            onChange={e => {setFromQuery(e.target.value); setToggleButton(true)}}
            onFocus={() => setToggleFromList(true)}
            onBlur={() => setToggleFromList(false)}
        />
        {fromQuery && (
        <span
          onClick={() => setFromQuery("")}
          className="absolute right-3">
          <RxCross2 />
        </span>
        )}
    </div>
  )
}
