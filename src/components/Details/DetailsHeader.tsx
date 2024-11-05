import { CiSaveDown2 } from "react-icons/ci";
import { PiPrinterThin } from "react-icons/pi";

export function DetailsHeader() {
  return (
    <header className="h-[53px] flex justify-between items-center bg-[#e6e6e9] font-light text-[#0063d3]">
        <h1 className="flex items-center hover:text-[#003082]">
            Destination details
        </h1>
        <div className="flex gap-4">
            <button className="w-36 flex justify-end gap-2 hover:gap-1 cursor-pointer">
                <span><CiSaveDown2 className="size-5" /></span>
                <span>Save as image</span>
            </button>
            <button className="w-36 flex justify-end gap-2 hover:gap-1 cursor-pointer">
                <span><PiPrinterThin className="size-5" /></span>
                <span>Save as PDF</span>
            </button>
        </div>
    </header>
  )
}
