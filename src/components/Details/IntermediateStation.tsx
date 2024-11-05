import { useContext, useState } from "react";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiBusLight, PiTrainLight, PiTrainThin } from "react-icons/pi";
import { stateContext } from "../../App";

export function IntermediateStation() {

  const [toggleIS, setToggleIS] = useState<boolean>(true);

  const context = useContext(stateContext);
  if (!context) return null;
  const { fareDetails } = context;

  return (
    <div className="flex items-start pb-4">
        <time className="relative flex flex-col justify-center font-light text-sm w-20 text-right mr-4">
          <div className="flex flex-col items-center absolute top-7 left-8 w-12">
            <PiTrainThin className="size-6" aria-hidden="true" />
            <span className="w-full">5 mins</span>
          </div>
        </time>
        <div className="w-[31.5rem] flex flex-col relative left-8 gap-4 py-4 border-y">
            <div className="w-full flex justify-between items-center">
                <div className="absolute -left-5 top-0 h-full border-l-2 border-tertiary"></div>
                <div className="font-light">
                  <p className="text-sm text-gray-500">Light Rail Transit 1</p>
                  <p className="text-sm text-gray-500">Southbound</p>
                  <p className="text-sm text-gray-500">9 stops</p>
                </div>
                <div className="flex gap-2 ">
                  <GoPeople className="text-[#017832]" />
                  <IoIosArrowDown
                    onClick={() => setToggleIS(prev => !prev)}
                    className="text-gray-600"
                  />
                </div>
            </div>
            {toggleIS ? (
              <div className="font-light">
                {fareDetails && (
                  fareDetails.stations_between.map((station) => (
                    <div className="pb-2 flex flex-col justify-center">
                      <p className="relative text-gray-500 text-sm" key={station.id}>
                        {station.name}
                        <div className="absolute -left-5 top-2 w-3 h-[2px] bg-tertiary"></div>
                      </p>
                      <p className="flex gap-2 items-center">
                        <PiBusLight />
                        <span>EDSA Carousel</span>
                        <h3 className="bg-gray-200 size-5 flex items-center justify-center text-primary text-[10px]">
                          <span>1</span>
                        </h3>
                      </p>
                      <p className="flex gap-2 items-center">
                        <PiBusLight />
                        <span>Bus Routes</span>
                      </p>
                      <p className="flex gap-2 items-center">
                        <PiTrainLight />
                        <span>Train</span>
                      </p>
                    </div>
                  ))
                )}
              </div>
            ) : null}
        </div>
    </div>
  )
}
