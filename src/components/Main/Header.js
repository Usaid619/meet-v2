import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="flex justify-between items-center  fixed w-full top-0 left-0 z-50 p-10">
         <h1 className="text-2xl cursor-pointer">Meet</h1>
         <HiBars2 className="text-4xl cursor-pointer"/>
        </header>
  )
}

export default Header
