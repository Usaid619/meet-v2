const Footer = () => {
  return (
    <footer className="snap-start h-screen flex justify-between items-center flex-col gap-2 pt-40 pb-10">
      {/* top */}
      <div className="flex border justify-between w-[67%]">
<h1 className="max-w-[50ch]">The happiest person is the one who prays fajr. The happiest person is the one who prays fajr. The happiest person is the one who prays fajr. The happiest person is the one who prays fajr.</h1>

<div className="flex justify-center items-center h-52 w-52 bg-amber-300 rounded-full">
  <p className="">Start a project</p>
</div>
      </div>

{/* middle */}
      <div className="flex justify-start gap-10 border w-[67%]">
        <div>
          <h1>Phone Number</h1>
        </div>
        <div>
          <h1>Email</h1>
        </div>
        <div>
          <h1>Social Media</h1>
          <ul>
            <li>In</li>
            <li>Li</li>
            <li>Fb</li>
          </ul>
        </div>
      </div>

{/* bottom */}
      <div className="flex justify-between w-[67%]">
        <h1>Copy rights</h1>
      </div>
    </footer>
  )
}

export default Footer
