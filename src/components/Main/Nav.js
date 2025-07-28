const Nav = () => {
  return (
    <>
    {/* Left Links */}
    <div className="fixed bottom-[6%] left-[4%] z-10 flex flex-col gap-32 text-gray-300">
      <div className="flex flex-col gap-4 items-center ">
       <span className="rotate-90">En</span>
       <div className="w-[1px] h-10 bg-gray-300"/>
       <span className="rotate-90">Ru</span>
      </div>

      <div className="flex flex-col items-center gap-2 ">
        <span>In</span>
        <span>Gi</span>
        <span>Li</span>
      </div>
    </div>

    {/* Page Count */}
    <div className="fixed z-50 bottom-[6%] right-[4%]">
      <span>I / V</span>
    </div>

    {/* Dots */}

    <div className="fixed flex flex-col gap-4 top-1/2 right-[4%] -translate-y-1/2 z-10 ">
      <div className="h-2 w-2 bg-white rounded-full"/>
      <div className="h-2 w-2 bg-white/20 rounded-full"/>
    </div>
    </>
  )
}

export default Nav
