import { useContext, useState } from "react";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiBoatLight, PiBusLight, PiTrainLight, PiTrainThin } from "react-icons/pi";
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
        <div className="w-[calc(100%_-_165px)] flex flex-col relative left-8 gap-4 py-4 border-y">
            <div className="w-full flex justify-between items-center">
            <div className="absolute -left-5 top-0 h-full border-l-2 border-tertiary"></div>
            <div className="font-light">
                  <p className="text-sm text-gray-500">{fareDetails?.line}</p>
                  <p className="text-sm text-gray-500">{fareDetails?.direction}</p>
                  <p className="text-sm text-gray-500">
                    {fareDetails?.number_of_stops} {fareDetails?.number_of_stops === 1 ? "stop" : "stops"}
                  </p>
                </div>
                <div className="flex gap-2 ">
                  <GoPeople className="text-important" />
                  <IoIosArrowDown
                    onClick={() => setToggleIS(prev => !prev)}
                    className="text-gray-600 cursor-pointer"
                  />
                </div>
            </div>
            {toggleIS ? (
              <div className="font-light">
                {fareDetails &&
                fareDetails.stations_between.map((station) => {
                  return (
                    <div className="pb-2 flex flex-col justify-center" key={station.name}>
                      <p className="relative text-gray-500 text-sm">
                        {station.name}
                        <div className="absolute -left-5 top-2 w-3 h-[2px] bg-tertiary"></div>
                      </p>
                      {station.connections && station.connections.length > 0 ? (
                        <div className="pl-4">
                          {station.connections.map((connection, index) => (
                            <div key={index} className="w-full items-center text-sm text-gray-500">
                              <div className="flex items-center gap-2">
                                {connection.type === "EDSA Carousel" && <PiBusLight />}
                                {connection.type === "Bus routes" && <PiBusLight />}
                                {connection.type === "Train" && <PiTrainLight />}
                                {connection.type === "Ferry interchange" && <PiBoatLight />}
                                {connection.type === "Bus rapid transit" && <PiBusLight />}
                                {connection.type === "Metro interchange" && <PiTrainLight />}
                                {connection.type === "Mainline rail interchange" && <PiTrainLight />}
                                <span className="w-full">{connection.type}</span>
                              </div>
                              <span className="space-x-1 w-full pl-[21.5px]">
                                <span>{connection.route}</span>
                                <span>{connection.location}</span>
                                {connection.routes?.map((route, index) => (
                                <span key={index}>
                                  <span className="bg-background p-[0.15rem]">{route}</span>
                                  {index < connection.routes.length - 1 && ' '}
                                </span>
                              ))}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            ) : null}
        </div>
    </div>
  )
}
