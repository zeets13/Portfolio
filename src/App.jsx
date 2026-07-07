import Navbar from "./components/Navbar";
import profile from "./assets/cat.png";

function App() {
  return (
    <>
    <Navbar />
    <section className="flex h-[calc(100vh-64px)]">
        {/* Left Section */}
        <div className="w-1/2 bg-rose-100 text-taupe-800 flex items-end">
          <div className="px-16 pb-24">
            <h2 className="text-4xl font-light">
              MY NAME IS
            </h2>

            <h1 className="text-6xl font-extrabold">
              JARIFA TASNIM
            </h1>

            <button className="mt-8 rounded-full bg-amber-100 border-2 border-solid text-black font-bold px-8 py-3 hover:bg-yellow-300 transition">
              I'M A STUDENT
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-rose-100">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    
      
    </>
  );
}

export default App;

<div className="flex">
      <div className="px-16 w-1/2 flex flex-col justify-center items-end bg-red-200">
      <h1 className="text-5xl font-bold">My name is Jarifa Tasnim</h1>
      <p className="text-lg">I am an undergraduate student.</p>
    </div>
    <div className="px-16 w-1/2">
      <img className="w-full h-full object-cover" src={profile} alt="Profile" />
    </div>

    </div>
    