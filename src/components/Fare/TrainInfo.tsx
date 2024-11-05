import { IoInformationCircleOutline } from "react-icons/io5";

export function TrainInfo() {
  return (
    <h2 className="flex gap-2 text-primary border-b-[0.125rem] border-[#0707211a] hover:border-primary cursor-pointer">
        <IoInformationCircleOutline className="size-[23px]" />
        <span>More travel information</span>
    </h2>
  )
}
