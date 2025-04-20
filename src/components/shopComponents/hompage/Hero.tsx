"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className=" w-full h-[440px] bg-neutral-100 flex items-center justify-center">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center px-6 gap-80">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-4xl font-bold text-neutral-900">
            Fresh Arrivals Online
          </h1>
          <p className="text-neutral-600 mt-3">
            Discover Our Newest Collection Today.
          </p>
          <button className="mt-5 px-6 py-3 bg-black text-white rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-800 transition">
            View Collection
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="relative w-[500px] bg-blue-600 h-[300px] lg:w-[400px] lg:h-[400px]">
          {/* <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
