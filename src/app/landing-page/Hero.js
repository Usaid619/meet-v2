const Hero = () => {
  return (
    <section className="snap-start relative flex justify-center items-center h-screen text-white">
      <div className="items-center flex gap-4 absolute z-50 bottom-0 left-2/12 origin-bottom-right rotate-90">
        <span className="tracking-wider">Scroll</span>
        <div className="h-[1px] w-20 bg-white"/>
      </div>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rotate-45 rounded-t-full h-[20rem] w-[35rem] top-20 right-40 absolute -z-10 opacity-70"></div>
      <div className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-3xl h-screen w-full">
        <div className="lg:-translate-x-24 lg:-translate-y-6 leading-[2]">
          <p className="font-erodeLight text-lg mb-4 text-gray-300">Designer and Developer</p>
        <h1 className="text-6xl ">If code is poetry - then <br/> I am Dante.</h1>
        </div>
        </div>
    </section>
  )
}

export default Hero