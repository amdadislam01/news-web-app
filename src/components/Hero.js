import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage:
            "url('https://schools.firstnews.co.uk/wp-content/uploads/sites/3/2019/10/Whats-on-Front-Page-of-Newspaper-Featured-1200x900.png')",
        }}
      ></div>

      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/20"></div>

      <div className="relative max-w-5xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Stay Updated with the Latest Global News
        </h1>

        <p className="text-white/90 mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore trending stories, breaking headlines, and real-time updates
          from trusted sources around the world — all in one clean and modern
          interface.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/news"
            className="px-6 py-3 bg-linear-to-r from-green-600 to-teal-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
          >
            View Latest News
          </a>

          <a
            href="#"
            className="px-6 py-3 bg-white text-teal-700 text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
