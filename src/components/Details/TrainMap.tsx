import lines from "../../assets/lrt_mrt_lines.svg"

export function TrainMap() {
  return (
    <div className="h-fit p-3 lg:px-4 lg:py-0">
        <h2 className="font-bold text-primary pb-3">LRT - MRT Line Map</h2>
        <img src={lines} alt="LRT MRT Image" />
    </div>
  )
}
