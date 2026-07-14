import Navbar from "./components/Navbar";
import profile from "./assets/cat.png";
import about from "./assets/about.jpg";
function App() {
  return (
    <>
    <Navbar />
  
    <section className="flex min-h-screen bg-rose-100">
        {/* Left Section */}
        <div className="pl-8 w-1/2 text-taupe-800 flex items-center">
          <div className="px-16">
            <h2 className="text-4xl font-light">
              Hi, I'm
            </h2>

            <h1 className="text-6xl font-extrabold">
              JARIFA TASNIM
            </h1>
            <h2 className="text-2xl text-taupe-800 mt-4">
              Web Developer &nbsp;| &nbsp;  Data Enthusiast
            </h2>

            <button className="mt-8 rounded-full bg-amber-100 border-2 border-solid text-taupe-800 text-xl font-bold px-8 py-3 hover:bg-yellow-300 transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-rose-100">
          <img
            src={profile}
            alt="Profile"
            className="w-full h-full object-cover align-middle"
          />
        </div>
      </section>
      <section className="bg-amber-100 py-20">
  <div className="max-w-6xl mx-auto -mt-40 relative z-10">

    <div className="grid md:grid-cols-3 gap-10">

      <div className="h-80 flex flex-col items-center justify-center bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      
        <h3 className="text-taupe-800 font-bold text-6xl mb-3">8+</h3><br></br>
        <p className="text-zinc-900 text-xl">
          Projects Completed
        </p>

        
      </div>

      <div className="h-80 flex flex-col justify-center items-center bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
        <h3 className="text-taupe-800 font-bold text-6xl mb-3">6+</h3><br></br>
        <p className="text-zinc-900 text-xl">
          Extracurricular Activities
        </p>
      </div>

      <div className="h-80 flex flex-col justify-center items-center bg-amber-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
        <h3 className="text-taupe-800 font-bold text-6xl mb-3">2</h3><br></br>
        <p className="text-zinc-900 text-xl">
          Training & Certifications
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-rose-100 py-20">
  <div className="mx-auto flex md:flex-row">
    <div className="w-1/2 flex justify-start">
      <img src={about} alt="About" className="h-auto" />

    </div>
    <div className="w-1/2 flex justify-end pr-60">
      <h1 className="  text-6xl font-bold text-taupe-800">ABOUT ME</h1>
    </div>

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