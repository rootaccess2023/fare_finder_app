import { LiaExchangeAltSolid } from "react-icons/lia";
import { FromStation } from "./Fare/FromStation";
import { ToStation } from "./Fare/ToStation";
import { FareHeader } from "./Fare/FareHeader";
import { FareButton } from "./Fare/FareButton";
import { FareTicket } from "./Fare/FareTicket";
import { TrainLines } from "./Fare/TrainLines";
import { TrainInfo } from "./Fare/TrainInfo";
import { FromStationsList } from "./Fare/FromStationsList";
import { ToStationList } from "./Fare/ToStationList";
import { useState } from "react";
import { TrainTicket } from "./Fare/TrainTicket";


export function Fare() {

  const [fromQuery, setFromQuery] = useState<string>("");
  const [toQuery, setToQuery] = useState<string>("");
  const [toggleFromList, setToggleFromList] = useState<boolean>(false);
  const [toggleToList, setToggleToList] = useState<boolean>(false);

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
              />
              {toggleFromList && (
                <FromStationsList
                  fromQuery={fromQuery}
                  setFromQuery={setFromQuery}
                  setToggleFromList={setToggleFromList}
                />
              )}
              <LiaExchangeAltSolid className="absolute top-4 right-4 text-primary lg:relative lg:top-0 lg:right-0 lg:h-[45px] lg:text-4xl" />
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
              <div className="flex gap-4">
                <TrainLines />
                <TrainTicket />
                <TrainInfo />
              </div>
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <FareTicket />
                <FareButton />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
