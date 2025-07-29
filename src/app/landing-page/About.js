const About = () => {
  return (
    <section className="snap-end relative flex justify-center items-center h-screen ">
      {/* <div className="items-center flex gap-4 absolute z-50 bottom-0 left-2/12 origin-bottom-right rotate-90">
        <span className="tracking-wider">Scroll</span>
        <div className="h-[1px] w-20 bg-white"/>
      </div> */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-b-full h-[60%] w-full top-0 left-0 right-0 absolute -z-10 opacity-70"/>
      <div className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-3xl h-screen w-full px-40 pt-20 pb-10">
       <div className="w-full h-[70%] border"></div>
       <div className="w-[100%] h-[30%] border"></div>
        </div>
    </section>
  )
}

export default About