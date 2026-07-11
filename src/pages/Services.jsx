import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaCarSide,
  FaCouch,
  FaPaintBrush,
  FaCarBattery,
  FaLightbulb,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Auto Accessories",
    description:
      "Essential add-ons that help drivers personalize and upgrade their vehicles with confidence.",
    icon: FaCarSide,
  },
  {
    title: "Interior Accessories",
    description:
      "Comfort-focused products designed to improve the cabin experience and everyday usability.",
    icon: FaCouch,
  },
  {
    title: "Exterior Styling",
    description:
      "Visual upgrades and styling solutions that bring a cleaner, more refined look to any vehicle.",
    icon: FaPaintBrush,
  },
  {
    title: "Car Care Products",
    description:
      "Reliable care essentials that help keep vehicles clean, protected, and looking their best.",
    icon: FaCarBattery,
  },
  {
    title: "Lighting & Electronics",
    description:
      "Modern lighting and electronic solutions that add function, safety, and a premium touch.",
    icon: FaLightbulb,
  },
  {
    title: "Vehicle Equipment",
    description:
      "Practical tools and equipment for drivers who want dependable support for every journey.",
    icon: FaTools,
  },
];

const Services = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-fade", {
        opacity: 1,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".services-cta", {
        opacity: 0,
        y: 30,
        duration: 0.85,
        delay: 0.3,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-7xl">
      <div className="services-fade text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
          Our Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Everything Your Vehicle Needs
        </h2>
      </div>

      <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="service-card group relative h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_45px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-red-500/70 hover:shadow-[0_18px_55px_rgba(220,38,38,0.18)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/15 text-3xl text-red-400 transition-colors duration-300 group-hover:bg-red-500/20 group-hover:text-red-300">
              <Icon />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {description}
            </p>
          </article>
        ))}
      </div>

      <section className="border-b-red-600 services-cta mt-14 overflow-hidden rounded-4xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center shadow-[0_20px_70px_rgba(2,6,23,0.35)]">
        <div className="bg-linear-to-r from-white/80 via-white-950/70 to-white-950/50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="max-w-3xl space-y-5">
            <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Looking for the Right Accessories?
            </h3>
            <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Visit our store in Vushtrri or contact our team for professional
              assistance in choosing the right products for your vehicle.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(220,38,38,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
            >
              Contact UNIMAX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
