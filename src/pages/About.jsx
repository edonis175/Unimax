import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const root = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".about-hero h1", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".about-hero p", {
        y: 20,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".feature", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features",
          start: "top 85%",
        },
      });

      gsap.from(".team-member", {
        y: 26,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team",
          start: "top 85%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="app-main">
      <div className="hero-spacer" style={{ height: "100vh" }} />
      <section className="app-section about-hero py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">About Unimax</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          We build modern, accessible interfaces and delightful web experiences.
          Our mission is to help teams ship focused products faster while
          keeping quality and performance high.
        </p>
      </section>

      <section className="app-section features grid gap-6 md:grid-cols-3 py-8">
        <article className="feature p-6 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-semibold">Design-first</h3>
          <p className="mt-2 text-sm text-gray-300">
            We prioritize clarity and usability — designing interfaces that feel
            intuitive and polished.
          </p>
        </article>

        <article className="feature p-6 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-semibold">Performance</h3>
          <p className="mt-2 text-sm text-gray-300">
            Fast load times and smooth interactions are core to everything we
            build.
          </p>
        </article>

        <article className="feature p-6 bg-slate-800 rounded-lg">
          <h3 className="text-xl font-semibold">Scalable Code</h3>
          <p className="mt-2 text-sm text-gray-300">
            We write maintainable, well-tested code that scales with your
            product.
          </p>
        </article>
      </section>

      <section className="app-section team py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="team-member p-4 bg-slate-800 rounded-lg text-center">
            <div className="h-20 w-20 mx-auto rounded-full bg-slate-700" />
            <h4 className="mt-3 font-semibold">Alex</h4>
            <p className="text-sm text-gray-300">Product Designer</p>
          </div>

          <div className="team-member p-4 bg-slate-800 rounded-lg text-center">
            <div className="h-20 w-20 mx-auto rounded-full bg-slate-700" />
            <h4 className="mt-3 font-semibold">Jamie</h4>
            <p className="text-sm text-gray-300">Frontend Engineer</p>
          </div>

          <div className="team-member p-4 bg-slate-800 rounded-lg text-center">
            <div className="h-20 w-20 mx-auto rounded-full bg-slate-700" />
            <h4 className="mt-3 font-semibold">Sam</h4>
            <p className="text-sm text-gray-300">Backend Engineer</p>
          </div>

          <div className="team-member p-4 bg-slate-800 rounded-lg text-center">
            <div className="h-20 w-20 mx-auto rounded-full bg-slate-700" />
            <h4 className="mt-3 font-semibold">Riley</h4>
            <p className="text-sm text-gray-300">DevOps</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
