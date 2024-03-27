import React from "react";

function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="flex items-baseline justify-center pt-8 ">
        <h2 className="border text-center border-white px-3 p-2 rounded-full">
          See What's new | <span className="text-sky-300">AI Diagram</span>
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex ">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl pb-1 font-extrabold text-transparent sm:text-5xl">
            Documents and Diagrams
            <span className="sm:block "> for engineering teams. </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl sm:text-xl/relaxed">
            Create design, Write User Stories , Whiteboard and <br />
            Diagram-as-code builder!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-white px-12 py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
