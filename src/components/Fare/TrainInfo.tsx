import { IoInformationCircleOutline } from "react-icons/io5";

export function TrainInfo() {
  return (
    <h2 className="flex flex-col gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary cursor-pointer sm:flex-row">
        <IoInformationCircleOutline className="size-[23px]" />
        <span>More info</span>
    </h2>
  )
}
