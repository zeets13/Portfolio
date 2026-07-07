function Navbar() {
  return (
    <>
    <nav className="h-18 bg-amber-100 w-full flex items-center justify-between px-10 py-2 text-taupe-800">
    <div className=" font-bold text-3xl ml-10">Portfolio</div>
    <div className=" font-semibold text-[20px] flex gap-10 mr-10">
        <span><a href="#">Home</a></span>
        <span><a href="#">Skills</a></span>
        <span><a href="#">Projects</a></span>
        <span><a href="#">Contact</a></span>


    </div>

   </nav>
   
    </>
   
  );
}

export default Navbar;