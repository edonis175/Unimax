import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaShieldAlt,
  FaHeadset,
  FaShoppingBag,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Quality Products",
    icon: FaShieldAlt,
  },
  {
    title: "Professional Support",
    icon: FaHeadset,
  },
  {
    title: "Wide Product Selection",
    icon: FaShoppingBag,
  },
  {
    title: "Trusted Local Business",
    icon: FaMapMarkerAlt,
  },
];

const About = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".about-card", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        delay: 0.25,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-7xl">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="about-fade relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(2,6,23,0.35)]">
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
          <img
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80"
            alt="Premium automotive accessories showcase"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="space-y-7">
          <div className="about-fade space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
              About Unimax
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Trusted Partner for Automotive Accessories
            </h2>
          </div>

          <div className="about-fade space-y-4 text-base leading-7 text-slate-300 sm:text-lg">
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
              Whether customers are searching for interior accessories, exterior
              styling products, maintenance essentials or everyday automotive
              equipment, UNIMAX aims to provide dependable solutions for every
              driver.
            </p>
          </div>

          <div className="about-fade grid gap-4 sm:grid-cols-2">
            {features.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="about-card rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-xl text-red-400">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      A premium experience designed to support everyday driving
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-fade pt-2">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(220,38,38,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
