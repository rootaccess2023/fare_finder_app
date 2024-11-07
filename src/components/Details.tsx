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
import jsPDF from "jspdf";
import Weather from "./Details/Weather";

export function Details() {

  const captureRef = useRef(null);

  const handleSaveImage = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = `${fareDetails?.start_station.name}-${fareDetails?.end_station.name}.png`
        link.click();
      });
    }
  };

  const handleSavePdf = () => {
    if (captureRef.current) {
      html2canvas(captureRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
  
        // Calculate width and height to maintain aspect ratio
        const pdfWidth = pdf.internal.pageSize.getWidth() - 20; // 20 mm for left and right margins
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
        // Adjust the position of the image within the PDF to add margins
        const marginLeft = 10; // Left margin
        const marginTop = 10;  // Top margin
  
        pdf.addImage(imgData, "PNG", marginLeft, marginTop, pdfWidth, pdfHeight);
        pdf.save(`${fareDetails?.start_station.name}-${fareDetails?.end_station.name}.pdf`);
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
        handleSavePdf={handleSavePdf}
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
              <Weather />
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
