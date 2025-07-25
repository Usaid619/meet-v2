const Hero = () => {
  return (
    <section className="relative flex justify-center items-center h-screen ">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rotate-45 rounded-t-full h-[20rem] w-[35rem] top-40 right-40 absolute -z-10 opacity-70"></div>
      <div className="flex flex-col items-center justify-center backdrop-blur-2xl h-screen w-full">
        <div className="-translate-x-24 leading-[2]">
          <p className="text-xl mb-2">Designer and Developer</p>
        <h1 className="text-6xl ">If code is poetry - then <br/> I am Dante.</h1>
        </div>
        </div>
    </section>
  )
}

export default Hero