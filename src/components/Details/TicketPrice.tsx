import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { PiCreditCardLight } from "react-icons/pi";
import { stateContext } from "../../App";

export function TicketPrice() {

    const context = useContext(stateContext);
    if (!context) return null;
    const { fareDetails, ticketType } = context;


  return (
    <>
    {fareDetails && (
    <section>
        <div className="flex flex-col gap-4 p-4 border-b">
            <div className="flex justify-between">
                <div className="text-primary text-sm font-light">
                    <span>
                        Price with {ticketType === "sjt" ? "SJT" : "SVT"}
                    </span>
                    <h1 className="relative font-visby text-4xl flex items-center font-light gap-2 py-1">
                    <span>
                        {ticketType === "sjt" ? fareDetails.sjt_fare : fareDetails.svt_fare}
                    </span>
                        <span className="absolute left-12 top-1 text-2xl border-b-2 border-primary">.00</span>
                    </h1>
                    <span>single way, 2nd class, full fare, no subscription</span>
                </div>
                <button className="flex items-center text-tertiary font-light text-sm gap-2">
                <PiCreditCardLight  className="size-6" />
                    <p>More fares</p>
                </button>
            </div>
            <button className="w-fit flex items-center bg-secondary hover:bg-secondary_dark text-primary font-semibold gap-3 p-3 rounded">
                <span><BsCart3 className="text-xl" /></span>
                <span className="mt-1">Buy ticket with maya</span>
            </button>
        </div>
        <div className="flex flex-col p-4 text-xs text-[#017832]">
            <p>The fare is calculated at a rate of ₱1.21 per kilometer.</p>
            <p>You can purchase your ticket at the counter.</p>
            <p>Alternatively, you can load your beep card for convenience.</p>
        </div>
    </section>
    )}
    </>
  )
}
