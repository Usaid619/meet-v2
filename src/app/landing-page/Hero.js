const Hero = () => {
  return (
    <section className="snap-start relative flex justify-center items-center h-screen text-white overflow-hidden">
      <div className="flex flex-col items-center gap-12 absolute z-50 bottom-0 left-3 ">
        <span className="text-[10px] tracking-widest -rotate-90">Scroll</span>
        <div className="w-[1px] h-28 bg-white"/>
      </div>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rotate-45 rounded-t-full h-[20rem] w-[35rem] top-10 left-0 lg:top-20 lg:right-40 absolute -z-10 opacity-70"></div>
      <div className="flex items-start lg:items-center lg:justify-center justify-start bg-black/10 backdrop-blur-3xl h-screen w-full">
        <div className="pl-6 mt-32 lg:-translate-x-24 lg:-translate-y-6 leading-[2]">
          <p className="font-erodeLight text-sm lg:text-lg mb-2 lg:mb-4 text-gray-300">Designer and Developer</p>
        <h1 className="tracking-wide max-w-[12ch] text-3xl lg:text-6xl ">If code is a poetry - then <br/> I am Dante.</h1>
        </div>
        </div>
    </section>
  )
}

export default Hero