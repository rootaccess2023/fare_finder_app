import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { PiCalendarDotsLight, PiClockCountdownLight, PiCreditCardLight, PiTrainLight } from "react-icons/pi";
import { stateContext } from "../../App";
import { MdOutlineWeekend } from "react-icons/md";

export function TicketPrice() {

    const context = useContext(stateContext);
    if (!context) return null;
    const { fareDetails, ticketType } = context;


  return (
    <>
    {fareDetails ? (
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
        <div className="flex flex-col p-4 text-xs text-important">
            <p>The fare is calculated at a rate of ₱1.21 per kilometer.</p>
            <p>You can purchase your ticket at the counter.</p>
            <p>Alternatively, you can load your beep card for convenience.</p>
        </div>
    </section>
    ): (
        <div className="flex flex-col gap-4 p-4 border-b">
            <h2 className="font-bold text-primary">Train Operating hours</h2>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <PiTrainLight />
                    <h1>LRT Line 1 (LRT-1)</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    <span>Opening Time at 4:30 AM</span>
                    <span>Closing Time at 9:30 PM</span>
                    <span>Train frequency: Every 5-7 minutes during peak hours.</span>
                    <span>Notes: Operates daily with slight variations during holidays or maintenance.</span>
                </p>
            </details>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <PiTrainLight />
                    <h1>LRT Line 2 (LRT-2)</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    <span>Opening Time at 5:00 AM</span>
                    <span>Closing Time at 9:00 PM</span>
                    <span>Train frequency: Trains are available every few minutes during rush hours.</span>
                    <span>Notes: Operates daily. Closes earlier than LRT-1.</span>
                </p>
            </details>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <PiTrainLight />
                    <h1>MRT Line 3 (MRT-3)</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    <span>Opening Time at 4:40 AM</span>
                    <span>Closing Time at 10:00 PM</span>
                    <span>Train frequency: More frequent during rush hours.</span>
                    <span>Notes: Operates daily, typically closing later than LRT-2.</span>
                </p>
            </details>
            <h2 className="font-bold text-primary">Additional Information</h2>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <MdOutlineWeekend />
                    <h1>Weekend & Holidays</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    Operating times remain similar to regular weekdays, but special closures or maintenance may occur. Check for updates.
                </p>
            </details>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <PiClockCountdownLight />
                    <h1>Train Frequency</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    Decreases during off-peak hours, but is more frequent during rush hours (3-5 minutes between trains).
                    </p>
            </details>
            <details className="pb-2 border-b">
                <summary className="flex gap-2 items-center text-tertiary hover:text-primary font-semibold cursor-pointer">
                    <PiCalendarDotsLight />
                    <h1>Special Operating Days</h1>
                </summary>
                <p className="flex flex-col gap-1 py-2 pl-6 text-sm font-light">
                    Schedules may be adjusted for special occasions or maintenance. Always check official announcements before traveling.
                </p>
            </details>
        </div>
    )}
    </>
  )
}
