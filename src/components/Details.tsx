import { CiCreditCard2 } from "react-icons/ci";
import { FaTrain } from "react-icons/fa";
import { FaPesoSign } from "react-icons/fa6";

export function Details() {
  return (
    <div className="h-full">
      <div className="h-10 flex items-center bg-[#e6e6e9] mx-6">
        <h1 className="font-light text-[#0063d3] hover:text-[#003082]">Fare Details</h1>
      </div>
      <div className="h-8 flex justify-center items-center bg-[#f7f7f8] border-b">
        <h1 className="font-light text-sm text-[#515164]">As August 2023</h1>
      </div>
      <div className="relative py-4 bg-white border-b">
      {/* Start Station */}
      <div className="flex items-start">
        <time className="font-semibold text-blue-700 w-16 text-right mr-4">06:17</time>
        <div className="relative flex-1">
          {/* Decorative Line */}
          <div className="absolute left-3 top-1 h-full border-l-2 border-[#0063d3]"></div>
          {/* Circle Marker */}
          <div className="absolute w-3 h-3 bg-white rounded-full left-1.5 top-1 border-2 border-[#0063d3]"></div>
          <div className="ml-6 pl-6">
            <h3 className="font-bold text-blue-800">Roosevelt</h3>
            <p className="text-sm text-gray-500">NS Sprinter to Hoofddorp<br />2 intermediate stops</p>
            <p className="text-sm text-blue-500">Track 1</p>
          </div>
        </div>
      </div>

      <div className="flex items-start">
      <time className="relative flex flex-col justify-center font-light text-sm w-16 text-right mr-4">
        <FaTrain className="absolute -top-1 left-9" />
        <span className="pt-3">5 mins</span>
      </time>
      <div className="relative flex-1">
          <div className="absolute left-3 top-0 h-full border-l-2 border-[#0063d3]"></div>
          <div className="absolute w-3 h-3 bg-white rounded-full left-1.5 top-1 border-2 border-[#0063d3]"></div>
          <div className="ml-6 pl-6">
            <h3 className="font-bold text-blue-800">Intermediate Station</h3>
            <p className="text-sm text-gray-500">Exit side left<br />2 min. transfer time</p>
            <p className="text-sm text-blue-500">Track 6</p>
          </div>
        </div>
      </div>

      {/* End Station */}
      <div className="flex items-start">
      <time className="font-semibold text-blue-700 w-16 text-right mr-4">06:17</time>
      <div className="relative flex-1">
          {/* Decorative Line */}
          <div className="absolute left-3 -top-12 h-full border-l-2 border-[#0063d3]"></div>
          {/* Circle Marker */}
          <div className="absolute w-3 h-3 bg-white rounded-full left-1.5 top-1 border-2 border-[#0063d3]"></div>
          <div className="ml-6 pl-6">
            <h3 className="font-bold text-blue-800">Baclaran</h3>
            <p className="text-sm text-gray-500">Exit side left</p>
            <p className="text-sm text-blue-500">Track 11a</p>
          </div>
        </div>
      </div>
    </div>
      <div className="bg-white px-6 py-4 text-[#003082] font-light border-b">
        <div>
          <p>Price with SJT</p>
        </div>
        <div className="flex justify-between text-[2rem]">
          <div>
            <span className="flex items-center gap-2">
              <FaPesoSign className="text-[1.8rem]" />
              <p>7.00</p>
            </span>
            <p className="text-sm">single way ticket, standard, no discount</p>
          </div>
          <div className="flex items-center gap-4 text-base group text-[#0063d3] cursor-pointer">
            <CiCreditCard2 className="text-4xl group-hover:text-[#003082]"/>
            <p className="group-hover:text-[#003082]">More fares</p>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-4 text-[#003082] font-light border-b">
        <div>
          <p>Price with SVT</p>
        </div>
        <div className="flex justify-between text-[2rem]">
          <div>
            <span className="flex items-center gap-2">
              <FaPesoSign className="text-[1.8rem]" />
              <p>7.00</p>
            </span>
            <p className="text-sm">single way ticket, standard, no discount</p>
          </div>
          <div className="flex items-center gap-4 text-base group text-[#0063d3] cursor-pointer">
            <CiCreditCard2 className="text-4xl group-hover:text-[#003082]"/>
            <p className="group-hover:text-[#003082]">More fares</p>
          </div>
        </div>
      </div>
    </div>
  )
}
