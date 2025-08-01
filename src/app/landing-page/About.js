const About = () => {
  return (
    <section className="snap-end relative flex justify-center items-center h-screen text-white">

      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-b-full h-[60%] w-full top-0 left-0 right-0 absolute -z-10 opacity-70"/>

      <div className="flex flex-col gap-20 items-center justify-between pt-28 pb-10 bg-black/10 backdrop-blur-3xl h-screen w-full">
      <div className="flex flex-col w-full">
        <h1 className="text-9xl pl-56">About</h1>
        <p className="max-w-prose border lg:ml-[570px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </div>
      <div className="text-base  flex items-start justify-start space-x-60 w-[67%] ">
        
       
          <h1 className="text-4xl ">Services</h1>
          {/* Development */}
       <div>
        <h1>
          Development
        </h1>
        <ul>
          <li>Next</li>
          <li>React</li>
          <li>Tailwind</li>
          <li>GSAP</li>
        </ul>
       </div>
       {/* Design */}
        <div>
        <h1>
          Design
        </h1>
        <ul>
          <li>Next</li>
          <li>Next</li>
          <li>Next</li>
          <li>Next</li>
        </ul>
       </div>
        
       
      </div>
     </div>
    </section>
  )
}

export default About