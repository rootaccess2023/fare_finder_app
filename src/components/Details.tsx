import { DetailsHeader } from "./Details/DetailsHeader";
import { DestinationHeader } from "./Details/DestinationHeader";
import { StartStation } from "./Details/StartStation";
import { IntermediateStation } from "./Details/IntermediateStation";
import { EndStation } from "./Details/EndStation";
import { TicketPrice } from "./Details/TicketPrice";
import { DestinationHeader2 } from "./Details/DestinationHeader2";
import { useContext, useRef } from "react";
import { stateContext } from "../App";
import { TrainMap } from "./Details/TrainMap";
import html2canvas from "html2canvas";

export function Details() {

  const captureRef = useRef(null);

  const handleSaveImage = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");

        // Create a link and trigger the download
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'captured-image.png';
        link.click();
      });
    }
  };

  const context = useContext(stateContext);
  if (!context) return null;
  const { fareDetails } = context;

  return (
    <div className="max-w-6xl mx-auto lg:pb-96">
      <DetailsHeader
        handleSaveImage={handleSaveImage}
      />
      <div ref={captureRef} className="flex flex-col-reverse lg:gap-8 lg:flex-row">
        <div className="h-fit w-full bg-white lg:w-5/12">
          <DestinationHeader />
          <TicketPrice />
        </div>
        <div className="h-fit w-full relative bg-white border-b lg:w-7/12 lg:py-4">
          {fareDetails ? (
            <>
              <DestinationHeader2 />
              <StartStation />
              <IntermediateStation />
              <EndStation />
            </>
          ) : (
            <TrainMap />
          )}
        </div>
      </div>
    </div>
  );
}
