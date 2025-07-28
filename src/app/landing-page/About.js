const About = () => {
  return (
    <section className="snap-end relative flex justify-center items-center h-screen ">
      {/* <div className="items-center flex gap-4 absolute z-50 bottom-0 left-2/12 origin-bottom-right rotate-90">
        <span className="tracking-wider">Scroll</span>
        <div className="h-[1px] w-20 bg-white"/>
      </div> */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-b-full h-[60%] w-full top-0 left-0 right-0 absolute -z-10 opacity-70"/>
      <div className="flex flex-col items-center justify-center bg-black/10 backdrop-blur-3xl h-screen w-full">
        <div className="flex flex-col leading-[2]">
        <h1 className="text-9xl text-white">About</h1>
          <p className="font-erodeLight text-lg mb-4 text-gray-300">asjkfbjas gas asnu anasasjffj d fdh fnash fbfd buhbhbashfasbfasb f as fashjfbasfbas as fasbfeui be hfasjhfbaui fwfa fasufbwuif sfs fjab fuib f ffifufjsnfufb</p>
        </div>
        </div>
    </section>
  )
}

export default About