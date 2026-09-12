const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <img alt="banner-img" src="/banner-stack.png" />

          <div>
            <h1 className="text-[#0F172A] font-extrabold text-[30px] lg:text-6xl text-center lg:text-left">
              Build Your Ideal <br />{" "}
              <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-[#475569] text-sm lg:text-lg py-6 text-center lg:text-left">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="flex justify-center lg:justify-start gap-3">
              <button className="btn text-white text-sm font-semibold rounded-lg border-none hover:shadow-none py-3 px-2.75 bg-linear-to-r from-[#F97316] to-[#EC4899]">
                Explore Technologies
              </button>

              <button className="btn bg-transparent text-[#374151] text-sm font-semibold rounded-lg border hover:shadow-none py-3 px-11.5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;