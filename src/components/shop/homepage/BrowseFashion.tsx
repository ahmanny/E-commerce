import { TiArrowRight } from "react-icons/ti";

export default function BrowseFashion() {
  return (
    <section className=" w-full  bg-neutral-100 flex items-center justify-center py-16 lg:py-0">
      {/* Hero Content */}
      <div className=" mx-auto flex flex-col lg:flex-row items-center px-6 gap-16 lg:gap-80">
        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-neutral-900">
            Browse Our Fashion Paradise!
          </h1>
          <p className="text-neutral-600 mt-2">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <div className="w-full flex justify-center">
            <button className="mt-2 px-6 py-3 bg-black text-white rounded-lg text-sm flex items-center gap-2 hover:bg-neutral-800 transition">
              Start Browsing <TiArrowRight className="text-3xl" />
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" w-[200px] bg-blue-600 h-[250px] lg:w-[225px] lg:h-[300px]">
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
