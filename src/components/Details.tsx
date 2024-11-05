import { DetailsHeader } from "./Details/DetailsHeader";
import { DestinationHeader } from "./Details/DestinationHeader";
import { StartStation } from "./Details/StartStation";
import { IntermediateStation } from "./Details/IntermediateStation";
import { EndStation } from "./Details/EndStation";
import { TicketPrice } from "./Details/TicketPrice";

export function Details() {
  return (
    <div className="max-w-6xl mx-auto pb-[53px]">
      <DetailsHeader />
      <div className="flex gap-8">
        <div className="h-fit w-5/12 bg-white">
          <DestinationHeader />
          <TicketPrice />
        </div>
        <div className="w-7/12 relative py-4 bg-white border-b">
          <StartStation />
          <IntermediateStation />
          <EndStation />
        </div>
      </div>
    </div>
  );
}
