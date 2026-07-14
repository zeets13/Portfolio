function Navbar() {
  return (
    <nav className="fixed top-6 left-0 w-full flex justify-center z-50">
      <div className="bg-amber-100 rounded-full border-2 border-solid border-taupe-800 border-amber-300 px-12 py-4">
        <ul className="flex items-center justify-center gap-14 text-xl text-taupe-800 font-semibold">
          <li>
            <a href="#" className="hover:text-stone-600 transition-colors">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-stone-600 transition-colors">
              Skills
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-stone-600 transition-colors">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-stone-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;