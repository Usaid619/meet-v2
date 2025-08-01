import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <header className="flex justify-between items-center fixed w-full top-0 left-0 z-50 lg:p-10 py-4 px-6">
         <h1 className="text-xl cursor-pointer">Meet</h1>
         <HiBars2 className="text-3xl cursor-pointer"/>
        </header>
  )
}

export default Header
