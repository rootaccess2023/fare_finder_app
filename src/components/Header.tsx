import fareFinderLogo from "../assets/farefinderlogo.svg"

export function Header() {
  return (
    <header className="h-16 flex items-center bg-white">
      <div className="flex text-3xl items-center">
        <img className="h-14" src={fareFinderLogo} alt="" />
        <h1 className="font-bold text-[#003082] tracking-tighter">FareFinder</h1>
      </div>
    </header>
  )
}
