import { FaTrain } from "react-icons/fa";

export function Fare() {
  return (
    <div className="bg-[#fec817] p-6 space-y-3">
      <section className="flex items-center gap-2 text-[#003082] font-light">
        <span className=""><FaTrain /></span>
        <span>Train Line:</span>
        <select className="bg-yellow-300 pl-6 pr-4 rounded">
          <option value="lrt1">LRT 1</option>
          <option value="lrt2">LRT 2</option>
          <option value="mrt3">MRT 3</option>
        </select>
      </section>
      <section className="space-y-3">
        <div className="relative flex items-center bg-white h-12 rounded">
          <span className="absolute top-[0.75rem] left-4 text-[#003082] font-bold">from</span>
          <input className="w-full ml-[3.75rem] font-light focus:outline-none" placeholder="start station" type="text" />
        </div>
        <div className="relative flex items-center bg-white h-12 rounded">
          <span className="absolute top-[0.75rem] left-4 text-[#003082] font-bold">to</span>
          <input className="w-full ml-[3.75rem] font-light focus:outline-none" placeholder="end station" type="text" />
        </div>
      </section>
      <button className="w-full bg-[#0063d3] hover:bg-[#004ba0] p-3 text-white rounded">Find fare</button>
    </div>
  )
}
