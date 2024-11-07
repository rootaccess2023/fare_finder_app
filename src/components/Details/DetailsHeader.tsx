import { useContext } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { PiPrinterThin } from "react-icons/pi";
import { stateContext } from "../../App";

export function DetailsHeader() {

    const context = useContext(stateContext);
    if (!context) return null;
    const { fareDetails } = context;

  return (
    <header className="h-[53px] flex justify-center items-center bg-[#e6e6e9] px-3 font-light text-[#0063d3] lg:px-0 lg:justify-end">
        {fareDetails ? (
        <div className="w-full flex justify-between gap-4 lg:justify-end">
            <button className="w-36 flex justify-end gap-2 hover:gap-1 cursor-pointer">
                <span><CiSaveDown2 className="size-5" /></span>
                <span>Save as image</span>
            </button>
            <button className="w-36 flex justify-end gap-2 hover:gap-1 cursor-pointer">
                <span><PiPrinterThin className="size-5" /></span>
                <span>Save as PDF</span>
            </button>
        </div>
        ) : null }
    </header>
  )
}
