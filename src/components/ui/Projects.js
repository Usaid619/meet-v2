import { projects } from "@/utils/constants"

console.log(projects)

const Projects = () => {
  return (
    <div>
      {projects.map((project,index)=>{
        return <section key={index} style={{
          backgroundImage:`url('${project.imageSrc}')`
        }} className={`relative flex justify-center items-center h-screen bg-no-repeat bg-center bg-cover`}>
      <div className="items-center flex gap-4 absolute z-50 bottom-0 left-2/12 origin-bottom-right rotate-90">
        <span className="tracking-wider">Scroll</span>
        <div className="h-[1px] w-20 bg-white"/>
      </div>
      {/* <div className="bg-gradient-to-r from-red-500 to-orange-500 rotate-45 rounded-t-full h-[20rem] w-[35rem] top-20 right-40 absolute -z-10 opacity-70"></div> */}
      <div className="relative flex flex-col items-center justify-center bg-black/40 backdrop-blur-xs h-screen w-full">
          {/* <p className="font-erodeLight text-lg mb-4 text-gray-300">Designer and Developer</p> */}
        <h1 className="absolute top-[28%] left-[30%] text-6xl lg:-translate-x-24 lg:-translate-y-6 leading-[2]">{project.title}</h1>
        </div>
    </section>
      }
      )}
    </div>
   
  )
}

export default Projects