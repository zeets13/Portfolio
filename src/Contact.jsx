function Contact(){
    return (
        <section className="py-30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative px-auto z-10">
        <div className="max-w-3xl mx-auto text-center ">
            <span className="inline-block text-lg font-semibold uppercase tracking-[0.2em] text-pink-700">
                Get In Touch
            </span>
            <h2 className="text-5xl md:text-5xl font-bold text-taupe-800 py-4 "> 
                Let's Build Something Great.
            </h2>
            <p className="text-md leading-8 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
            </p>

        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
            <form className="space-y-6">
                {/* Name */}
                <div>
                <label
                    htmlFor="name"
                    className="block text-lg font-semibold text-taupe-800 mb-2"
                >
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-700 placeholder-gray-400 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                />
                </div>

                {/* Email*/}
                <div>
                <label
                    htmlFor="email"
                    className="block text-lg font-semibold text-taupe-800 mb-2"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="text"
                    required
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-700 placeholder-gray-400 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                />
                </div>
                {/* Message*/}
                <div>
                <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-taupe-800 mb-2"
                >
                    Message
                </label>
                <textarea
                  rows={5}
                 
                  className="w-full rounded-xl border border-gray-300 px-5 py-3 text-gray-700 placeholder-gray-400 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
                />
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer rounded-xl bg-pink-400 px-6 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-pink-500 hover:shadow-xl hover:-translate-y-1"
                    >
                    Send Message
                </button>

            </form>
        </div>
        

    

      </div>
        </section>

    );
}
export default Contact;