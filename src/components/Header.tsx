import { Logo } from "./Header/Logo"
import { Portfolio } from "./Header/Portfolio"


export function Header() {

  return (
    <header className="h-16 flex flex-col justify-center items-center bg-white lg:h-28">
      <div className="w-full flex justify-between items-center px-5 gap-2 max-w-6xl mx-auto lg:px-0">
        <Logo />
        <Portfolio />
      </div>
    </header>
  )
}
