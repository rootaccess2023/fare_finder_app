import { PiTicketLight } from "react-icons/pi";
export function TrainTicket() {

  return (
    <div className="flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary pb-1 cursor-pointer">
        <h2 className="flex gap-2">
            <PiTicketLight className="size-[23px]" />
            <span>Ticket type:</span>
        </h2>
        <select className="bg-transparent">
            <option value="single journey ticket">Single Journey Ticket </option>
            <option value="stored value ticket">Stored Value Ticket </option>
        </select>
    </div>
  )
}
