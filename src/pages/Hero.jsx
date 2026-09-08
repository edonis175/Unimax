import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import Reveal from "../components/Reveal";

function Hero({ onNavigate }) {
  return (
    <div className="relative isolate min-h-svh overflow-hidden bg-[#061126]">
      <img
        src="/images/Hero-image.png"
        alt="UNIMAX automotive showroom in Vushtrri"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[34%_center] opacity-55 sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,14,37,.95)_0%,rgba(3,15,42,.60)_43%,rgba(3,17,56,.10)_59%,rgba(3,17,56,.04)_100%)]" />
      <div className="absolute -left-24 top-28 -z-10 h-80 w-80 rounded-full bg-sky-500/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-linear-to-t from-[#061126] to-transparent" />
      <div className="mx-auto flex min-h-svh w-full max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-center text-xs font-bold uppercase tracking-[.26em] text-sky-200 max-lg:flex-col max-lg:justify-center sm:text-sm lg:flex-row lg:justify-start lg:text-left">
              Auto dekor · Auto pjesë · Auto aksesorë
              <span className="h-px w-10 bg-sky-300" />
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.06] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              Make every drive <span className="text-sky-200">feel yours.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              UNIMAX brings dependable accessories, styling and practical
              vehicle equipment together—so your car looks sharper, feels better
              and is ready for the road ahead.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-sky-100/35 bg-sky-300/18 px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(3,105,161,.25),inset_0_1px_0_rgba(255,255,255,.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-sky-300/30 hover:shadow-[0_18px_42px_rgba(56,189,248,.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100"
              >
                Explore our range <FaArrowRight />
              </button>
              <a
                href="tel:+38349510157"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.15)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100"
              >
                <FaPhoneAlt className="text-sky-200" /> Speak with us
              </a>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/18 pt-6 text-xs font-semibold uppercase tracking-[.18em] text-slate-300 sm:gap-9">
              <span>• Quality focused</span>
              <span>• Driver approved</span>
              <span>• Vushtrri, Kosova</span>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Hero;
