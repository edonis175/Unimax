import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaUser,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

const contactDetails = [
  {
    label: "Phone",
    value: "+383 49 510 157",
    icon: FaPhoneAlt,
  },
  {
    label: "Location",
    value: ["Ana Lin", "Vushtrri 42000", "Kosovo"],
    icon: FaMapMarkerAlt,
  },
  {
    label: "Facebook",
    value: "https://facebook.com/unimaxks",
    icon: FaFacebookF,
  },
];

const businessHours = [
  { day: "Monday - Saturday", time: "10:00 - 20:00" },
  { day: "Sunday", time: "10:00 - 20:00" },
];

const weeklyHours = [
  { day: "Saturday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Sunday", time: "12–7 AM" },
  { day: "Monday", time: "8 AM–12 AM" },
  { day: "Tuesday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Wednesday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Thursday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Friday", time: "12–7 AM, 8 AM–12 AM" },
];

const Contact = () => {
  const rootRef = useRef(null);
  const [showHours, setShowHours] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-fade", {
        opacity: 0,
        y: 28,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70 shadow-[0_24px_90px_rgba(2,6,23,0.45)]"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-linear-to-br from-slate-950/95 via-slate-950/85 to-slate-900/90" />

      <div className="relative z-10 grid gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-14">
        <div className="space-y-8">
          <div className="contact-fade space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
              Get In Touch
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              Contact UNIMAX for product information, availability, or
              assistance.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Our team is ready to help you choose the right automotive
              accessories, confirm availability, and answer any questions about
              products and services.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {contactDetails.map(({ label, value, icon: Icon }) => (
              <article
                key={label}
                className="contact-card rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-lg text-red-400">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {label}
                    </p>
                    {Array.isArray(value) ? (
                      <div className="mt-2 space-y-1 text-sm leading-6 text-slate-200">
                        {value.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={
                          label === "Phone"
                            ? "tel:+38349510157"
                            : "https://facebook.com/unimaxks"
                        }
                        target={label === "Facebook" ? "_blank" : undefined}
                        rel={label === "Facebook" ? "noreferrer" : undefined}
                        className="mt-2 block wrap-break-word text-sm font-medium text-white transition-colors duration-300 hover:text-red-300"
                      >
                        {value}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}

            <article className="contact-card rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70 sm:col-span-2 xl:col-span-2">
              <button
                type="button"
                onClick={() => setShowHours((prev) => !prev)}
                className="flex w-full items-center justify-between gap-4 text-left"
                aria-expanded={showHours}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-500/15 text-lg text-red-400">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Open now
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Business Hours
                    </h3>
                  </div>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
                  {showHours ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  showHours
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "mt-0 grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    {weeklyHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between gap-4 border-b border-white/5 pb-2 last:border-b-0 last:pb-0"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {item.day}
                        </span>
                        <span className="text-sm text-slate-400">
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 sm:grid-cols-2">
                    {businessHours.map((item) => (
                      <div
                        key={item.day}
                        className="rounded-xl bg-white/5 px-4 py-3"
                      >
                        <p className="font-semibold text-white">{item.day}</p>
                        <p className="mt-1 text-slate-300">{item.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="space-y-6">
          <div className="contact-fade rounded-4xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.22)] backdrop-blur-xl sm:p-6">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Name
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 focus-within:border-red-500/70">
                    <FaUser className="text-red-400" />
                    <input
                      type="text"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                      placeholder="Your name"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Email
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 focus-within:border-red-500/70">
                    <FaEnvelope className="text-red-400" />
                    <input
                      type="email"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Phone
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 focus-within:border-red-500/70">
                    <FaPhoneAlt className="text-red-400" />
                    <input
                      type="tel"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                      placeholder="+383..."
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-200">
                  Subject
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 focus-within:border-red-500/70">
                    <FaTag className="text-red-400" />
                    <input
                      type="text"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                      placeholder="How can we help?"
                    />
                  </div>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Message
                <div className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 focus-within:border-red-500/70">
                  <div className="mb-3 flex items-center gap-3 text-red-400">
                    <FaCommentDots />
                    <span>
                      Tell us about your vehicle or the products you need
                    </span>
                  </div>
                  <textarea
                    rows="6"
                    className="w-full resize-none bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                    placeholder="Write your message here..."
                  />
                </div>
              </label>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(220,38,38,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-red-500"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <iframe
              title="UNIMAX store location"
              className="contact-map h-72 w-full rounded-3xl border border-white/10 shadow-[0_12px_40px_rgba(2,6,23,0.22)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21824.450665473036!2d20.9322366743164!3d42.82674109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535bdbc65b19d7%3A0x1b55ee91a4cc478f!2sUnimax!5e1!3m2!1sen!2s!4v1783791794155!5m2!1sen!2s"
            />

            <iframe
              title="UNIMAX second location"
              className="contact-map h-72 w-full rounded-3xl border border-white/10 shadow-[0_12px_40px_rgba(2,6,23,0.22)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21828.85267897047!2d20.961618550985506!3d42.814271303808184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535d0013e22f55%3A0xb10e2dcafd2281df!2sUnimax%20Auto%20Dekor!5e1!3m2!1sen!2s!4v1783791852966!5m2!1sen!2s"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
