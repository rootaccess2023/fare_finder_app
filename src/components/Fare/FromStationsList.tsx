import { useContext } from "react";
import { stateContext } from "../../App";
import { PiTrainLight } from "react-icons/pi";
import { FromStationsListProps } from "../../types/types";


export function FromStationsList({fromQuery, setFromQuery, setToggleFromList} : FromStationsListProps ) {

    const context = useContext(stateContext);
    if (!context) return null;
    const { stations, setStartStation } = context;

    const filteredStations = stations.filter(station => {
        return station.name.toLowerCase().includes(fromQuery.toLowerCase());
    })

    return (
        <div className="h-[337px] w-[555.333px] z-10 absolute top-[3.25rem] left-0 bg-white border-[1px] border-[#07072126] overflow-scroll rounded">
            <ul>
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
        </div>
  )
}
