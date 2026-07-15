import Navbar from "./components/Navbar";
import profile from "./assets/cat.png";
import about from "./assets/about.jpg";
function App() {
  return (
    <>
    {/*Navbar*/}
    <Navbar />
    {/*Hero Section*/}
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
    {/*About Me Section*/}
      <section className="bg-amber-100 py-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8">

    {/* Left Side */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={about}
        alt="About Me"
        className="w-[420px] rounded-2xl"
      />
    </div>

    {/* Right Side */}
    <div className="md:w-1/2 flex flex-col">

      <h1 className="text-5xl md:text-6xl font-bold text-taupe-800 mb-8">
        ABOUT ME
      </h1>

      <p className="text-lg leading-8 text-gray-700">
        Hello! I'm <span className="font-semibold">Jarifa</span>, a Computer
        Science and Engineering student who enjoys turning ideas into practical
        digital solutions. Whether it's developing a web application, building a
        mobile app, analyzing data, or learning a new technology, I love
        challenging myself and continuously improving my skills.
        <br />
       
        Beyond academics, I enjoy leading teams, participating in competitions,
        and organizing events that help me grow as both a developer and a
        communicator. My goal is to build technology that is not only
        functional, but also creates a positive impact for its users.
      </p>

      <div className="grid md:grid-cols-3 gap-10 mt-10">

<div className=" flex flex-col items-center justify-center  bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

  <h3 className="text-taupe-800 font-bold text-4xl mb-3">8+</h3>
  <p className="text-zinc-900 text-md text-center">
    Projects Completed
  </p>

  
</div>

<div className="flex flex-col justify-center items-center  bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
  <h3 className="text-taupe-800 font-bold text-4xl mb-3">6+</h3>
  <p className="text-zinc-900 text-md text-center">
    Extracurricular Activities
  </p>
</div>

<div className="flex flex-col justify-center items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
  <h3 className="text-taupe-800 font-bold text-4xl mb-3">2</h3>
  <p className="text-zinc-900 text-md align-middle text-center">
    Training & Certifications
  </p>
</div>

</div>

    </div>

  </div>

</section>
{/*Skills Section*/}
  <section className="bg-amber-100 py-20">
  <h2 className="text-5xl md:text-6xl font-bold text-taupe-800 mb-8 text-center">MY SKILLS</h2>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8">
    

{/* Right Side */}
<div className="flex flex-col items-center justify-center">




  <div className="grid md:grid-cols-3 gap-10 mt-10">

<div className=" flex flex-col items-center justify-center  bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

<h3 className="text-taupe-800 font-bold text-4xl mb-3">8+</h3>
<p className="text-zinc-900 text-md text-center">
Projects Completed
</p>


</div>

<div className="flex flex-col justify-center items-center  bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
<h3 className="text-taupe-800 font-bold text-4xl mb-3">6+</h3>
<p className="text-zinc-900 text-md text-center">
Extracurricular Activities
</p>
</div>

<div className="flex flex-col justify-center items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
<h3 className="text-taupe-800 font-bold text-4xl mb-3">2</h3>
<p className="text-zinc-900 text-md align-middle text-center">
Training & Certifications
</p>
</div>

</div>

</div>

</div>
    

  
  </section>

      
    </>
  );
}

export default App;
