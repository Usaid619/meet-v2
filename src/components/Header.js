import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 px-8 fixed w-full top-0 left-0 z-50 h-20 ">
     <h1 className="text-2xl">Meet</h1>
     <HiBars2 className="text-4xl"/>
    </header>
  )
}

export default Header
