const Footer = () => {
  return (
    <footer className="snap-start h-screen flex justify-between items-center flex-col gap-2 pt-36 pb-10">
      {/* top */}
      <div className="flex border justify-between w-[67%]">
<h1>The happiest person is the one who prays fajr.</h1>

<div className="h-20 w-20 rounded-full">
  <p>Start a project</p>
</div>
      </div>

{/* middle */}
      <div className="flex justify-between gap-10 border w-[67%]">
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
