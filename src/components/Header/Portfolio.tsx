import portfolio from "../../assets/paper-ship.svg"

export function Portfolio() {
  return (
    <a href="https://paulooliver-self.vercel.app" target="_blank" className="h-8 lg:h-12 flex gap-2 items-center cursor-pointer bg-background py-1 px-2 rounded hover:bg-gray-300 transition ease-in-out duration-200">
        <img className="h-8 lg:h-12" src={portfolio} alt="Website Logo" />
        <h1 className="h-6 lg:h-7 flex items-end font-light text-sm lg:text-base">More projects</h1>
    </a>
  )
}
