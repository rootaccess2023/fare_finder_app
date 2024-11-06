import { CiSearch } from "react-icons/ci"
import logo from "../assets/farefinder.png"
import { useState } from "react";

export function Header() {

  const [showSearchButton, setShowSearchButton] = useState<boolean>(false);

  return (
    <header className="h-16 flex flex-col justify-center items-center bg-white lg:h-24">
      <div className="w-full flex items-center justify-end max-w-6xl mx-auto">
      </div>
      <div className={`w-full flex ${showSearchButton === true ? "" : "justify-between"} items-center px-5 gap-2 max-w-6xl mx-auto lg:px-0`}>
        <img className="h-8 fill-secondary lg:h-12" src={logo} alt="" />
        <div className={`${showSearchButton === true ? "flex flex-row-reverse w-full items-center" : "flex"}`}>
          <input
            className={`${showSearchButton === true ? "block w-full" : "hidden"} border-b pb-1 focus:outline-none placeholder:font-normal px-4`}
            type="text"
            onBlur={() => setShowSearchButton(false)}
            placeholder="Search for"
          />
          <CiSearch onClick={() => setShowSearchButton((prev) => !prev)} className="text-xl cursor-pointer lg:text-2xl" />
        </div>
      </div>
    </header>
  )
}
