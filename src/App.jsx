import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import profile from "./assets/cat.png";
import about from "./assets/about.jpg";
import Skills from "./Skills"
import Contact from "./Contact"


function App() {
  return (
    <>
    {/*Navbar*/}
    <Navbar />
    {/*Hero Section*/}
    <section className="flex min-h-screen bg-rose-100">
        {/* Left Section */}
        <div className="max-w-7xl mx-auto flex min-h-screen ">
          <div className="px-16 mt-60">
            <h2 className="text-4xl font-light">
              Hi, I'm
            </h2>

            <h1 className="text-6xl font-extrabold">
              JARIFA TASNIM
            </h1>
            <h2 className="text-2xl text-taupe-800 mt-4">
              Web Developer &nbsp;| &nbsp;  Data Enthusiast
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-lg">
            Final-year Computer Science and Engineering student passionate about
            developing user-focused web and mobile applications while exploring
            data analytics and software testing.
          </p>

          <div className="flex gap-5 mt-10">

          <button className=" rounded-full border-2 px-8 py-3 font-semibold hover:bg-taupe-800 hover:text-white transition">
            Download Resume
          </button>

          <button className="border-2 rounded-full px-8 py-3 font-semibold hover:bg-taupe-800 hover:text-white transition">
            Contact Me
          </button>

          </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={profile}
            alt="Profile"
            className="w-[500px] mx-auto object-contain"
          />
        </div>
      </section>
    {/*About Me Section*/}
      <section className="bg-amber-50 py-24">
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

<div className=" flex flex-col items-center justify-center w-fit bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

  <h3 className="text-taupe-800 font-bold text-4xl mb-3">8+</h3>
  <p className="text-zinc-900 text-md text-center">
    Projects Completed
  </p>

  
</div>

<div className="flex flex-col justify-center items-center w-fit bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
  <h3 className="text-taupe-800 font-bold text-4xl mb-3">6+</h3>
  <p className="text-zinc-900 text-md text-center">
    Extracurricular Activities
  </p>
</div>

<div className="flex flex-col justify-center items-center w-fit bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
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
<Skills/>
<Contact />
<Footer/>
 
    </>
  );
}

export default App;
