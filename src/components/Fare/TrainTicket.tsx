import { useContext } from "react";
import { PiTicketLight } from "react-icons/pi";
import { stateContext } from "../../App";
export function TrainTicket() {

  const context = useContext(stateContext);
  if (!context) return null;
  const { setTicketType } = context;

  return (
    <div className="flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer">
        <h2 className="flex gap-2">
            <PiTicketLight className="size-[23px]" />
            <span>Ticket type:</span>
        </h2>
        <select className="bg-transparent">
            <option onClick={() => setTicketType("sjt")} value="sjt">Single Journey Ticket </option>
            <option onClick={() => setTicketType("svt")} value="svt">Stored Value Ticket </option>
        </select>
    </div>
  )
}
