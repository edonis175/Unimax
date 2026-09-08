import { createElement } from "react";
import {
  FaArrowRight,
  FaHeadset,
  FaShieldAlt,
  FaShoppingBag,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Reveal from "../components/Reveal";

const features = [
  { title: "Quality Products", icon: FaShieldAlt },
  { title: "Professional Support", icon: FaHeadset },
  { title: "Wide Product Selection", icon: FaShoppingBag },
  { title: "Trusted Local Business", icon: FaMapMarkerAlt },
];

function About({ onNavigate }) {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-10 lg:grid-cols-[.94fr_1.06fr] lg:gap-16">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-slate-900 shadow-[0_28px_70px_rgba(0,0,0,.28)]">
          <img
            src="/images/InsideCar.jpg"
            alt="UNIMAX ambient interior lighting installation"
            loading="lazy"
            className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.045]"
          />
          <div className="absolute inset-x-0 top-0 bg-linear-to-t from-[#061126]/95 via-[#061126]/38 to-transparent text-right sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[.21em] text-sky-600">
              The interior experience
            </p>
            <p className="mt-3 text-lg font-bold text-white">
              Detail that makes the feel exceptional.
            </p>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-sky-300">
              About Unimax
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-.04em] text-white sm:text-5xl">
              A better way to equip the{" "}
              <span className="text-sky-200">car you care about.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-slate-300">
              <p>
                UNIMAX has become a trusted destination for drivers looking for
                quality auto accessories, vehicle equipment and practical
                automotive solutions.
              </p>
              <p>
                The company focuses on delivering reliable products, friendly
                customer service and helping customers improve the appearance,
                comfort and functionality of their vehicles.
              </p>
              <p>
                Whether customers are searching for interior accessories,
                exterior styling products, maintenance essentials or everyday
                automotive equipment, UNIMAX aims to provide dependable
                solutions for every driver.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map(({ title, icon }, index) => (
              <Reveal key={title} delay={index * 65}>
                <article className="group h-full rounded-2xl border border-white/12 bg-white/[.045] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/35 hover:bg-sky-200/[.07]">
                  {createElement(icon, {
                    className:
                      "text-xl text-sky-300 transition-transform duration-300 group-hover:scale-110",
                  })}
                  <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    A premium experience designed around everyday driving needs.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-2xl border border-sky-200/30 bg-sky-300/13 px-5 py-3 text-sm font-bold text-sky-50 shadow-[inset_0_1px_0_rgba(255,255,255,.16)] backdrop-blur transition-all hover:-translate-y-1 hover:bg-sky-300/24 focus-visible:outline-2 focus-visible:outline-sky-200 lg:mx-0 lg:ml-50"
            >
              Talk to the UNIMAX team <FaArrowRight />
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
