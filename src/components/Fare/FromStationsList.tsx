import { useContext } from "react";
import { stateContext } from "../../App";
import { PiTrainLight } from "react-icons/pi";
import { FromStationsListProps } from "../../types/types";
import { BeatLoader } from "react-spinners";


export function FromStationsList({fromQuery, setFromQuery, setToggleFromList} : FromStationsListProps ) {

    const context = useContext(stateContext);
    if (!context) return null;
    const { stations, setStartStation } = context;

    const filteredStations = stations.filter(station => {
        return station.name.toLowerCase().includes(fromQuery.toLowerCase());
    })

    return (
        <div className={`${filteredStations ? "h-[337px]" : "h-40"}  w-full flex z-10 absolute top-[3.25rem] left-0 bg-white border-[1px] border-[#07072126] overflow-scroll rounded lg:w-[calc(50%_-_20px)]`}>
            {!filteredStations ? (
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                    <BeatLoader color="#0063d3" />
                    <p className="text-smallText font-light text-sm">All stations coming up! Preparing your boarding choices now…</p>
                </div>
            ) : (
            <ul className="w-full">
            {filteredStations.map((station) => (
                <li
                    onMouseDown={() => {setToggleFromList(false); setFromQuery(station.name); setStartStation(station.id)}}
                    className="h-[67px] flex items-center px-3 gap-4 group hover:bg-tertiary cursor-pointer"
                    key={station.id}
                >
                    <PiTrainLight className="text-2xl text-primary group-hover:text-white"/>
                    <h2 className="flex flex-col ">
                        <span className="text-tertiary group-hover:text-white">{station.name}</span>
                        <span className="text-[0.875rem] text-[#6a6a7a] group-hover:text-white">Railway station</span>
                    </h2>
                </li>
            ))}
            </ul>
            )}
        </div>
  )
}
