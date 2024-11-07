import { LiaExchangeAltSolid } from "react-icons/lia";
import { FromStation } from "./Fare/FromStation";
import { ToStation } from "./Fare/ToStation";
import { FareHeader } from "./Fare/FareHeader";
import { FareButton } from "./Fare/FareButton";
import { FareTicket } from "./Fare/FareTicket";
import { TrainLines } from "./Fare/TrainLines";
import { FromStationsList } from "./Fare/FromStationsList";
import { ToStationList } from "./Fare/ToStationList";
import { useContext, useState } from "react";
import { TrainTicket } from "./Fare/TrainTicket";
import { stateContext } from "../App";
import { TrainTime } from "./Fare/TrainTime";


export function Fare() {

  const [fromQuery, setFromQuery] = useState<string>("");
  const [toQuery, setToQuery] = useState<string>("");
  const [toggleFromList, setToggleFromList] = useState<boolean>(false);
  const [toggleToList, setToggleToList] = useState<boolean>(false);
  const [toggleButton, setToggleButton] = useState<boolean>(true);

  const context = useContext(stateContext);
  if (!context) return null;
  const { startStation, endStation, setStartStation, setEndStation } = context;

  const handleExchangeStation = () => {
    setFromQuery(toQuery);
    setToQuery(fromQuery);
    setStartStation(endStation);
    setEndStation(startStation);
    setToggleButton(true);
  }

  return (
    <div className="bg-[#fec817] p-6 lg:p-14">
      <div className="lg:max-w-6xl lg:mx-auto">
        <FareHeader />
        <div>
          <form className="flex flex-col gap-[0.875rem]">
            <div className="relative flex flex-col gap-3 lg:flex-row">
              <FromStation
                fromQuery={fromQuery}
                setFromQuery={setFromQuery}
                setToggleFromList={setToggleFromList}
                setToggleButton={setToggleButton}
              />
              {toggleFromList && (
                <FromStationsList
                  fromQuery={fromQuery}
                  setFromQuery={setFromQuery}
                  setToggleFromList={setToggleFromList}
                />
              )}
              {fromQuery ? (
                <LiaExchangeAltSolid
                  onClick={handleExchangeStation}
                  className="absolute top-4 right-10 text-primary cursor-pointer hover:text-tertiary lg:relative lg:top-0 lg:right-0 lg:h-[45px] lg:text-4xl"
                />
              ) : (
                <LiaExchangeAltSolid

                  onClick={handleExchangeStation}
                  className="absolute top-4 right-4 text-primary cursor-pointer hover:text-tertiary lg:relative lg:top-0 lg:right-0 lg:h-[45px] lg:text-4xl"
                />
              )}
              <ToStation
                toQuery={toQuery}
                setToQuery={setToQuery}
                setToggleToList={setToggleToList}
              />
              {toggleToList && (
                <ToStationList
                  toQuery={toQuery}
                  setToQuery={setToQuery}
                  setToggleToList={setToggleToList}
                />
              )}
            </div>
            <div className="flex flex-col gap-3 font-light lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row">
                <TrainLines
                  setFromQuery={setFromQuery}
                  setToQuery={setToQuery}
                  setToggleButton={setToggleButton}
                />
                <TrainTicket />
                <TrainTime />
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <FareTicket />
                <FareButton
                  toQuery={toQuery}
                  fromQuery={fromQuery}
                  setFromQuery={setFromQuery}
                  setToQuery={setToQuery}
                  setToggleButton={setToggleButton}
                  toggleButton={toggleButton}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
