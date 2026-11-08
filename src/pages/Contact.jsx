import { useState } from "react";
import {
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaLocationArrow,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import Reveal from "../components/Reveal";

const weeklyHours = [
  { day: "Saturday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Sunday", time: "12–7 AM" },
  { day: "Monday", time: "8 AM–12 AM" },
  { day: "Tuesday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Wednesday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Thursday", time: "12–7 AM, 8 AM–12 AM" },
  { day: "Friday", time: "12–7 AM, 8 AM–12 AM" },
];

const fieldClass =
  "w-full rounded-xl border border-white/12 bg-[#04132c]/65 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/65 focus:ring-2 focus:ring-sky-300/15";

function Contact() {
  const [showHours, setShowHours] = useState(false);
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[#071a36] px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,.32)] sm:px-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(56,189,248,.17),transparent_26%),radial-gradient(circle_at_12%_95%,rgba(30,64,175,.2),transparent_32%)]" />
        <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-sky-300">
              Ready when you are
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-[-.045em] text-white sm:text-5xl">
              Bring your next upgrade into focus.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              Contact UNIMAX for product information, availability, or assistance. Our team is ready
              to help you choose the right automotive accessories and equipment for your vehicle.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="tel:+38349510157"
                className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition-all hover:-translate-y-1 hover:border-sky-300/35 hover:bg-sky-200/[.07]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-300/12 text-sky-300">
                  <FaPhoneAlt />
                </span>
                <span>
                  <small className="block text-xs font-bold uppercase tracking-[.18em] text-slate-500">
                    Phone
                  </small>
                  <strong className="mt-1 block text-sm text-white">+383 49 510 157</strong>
                </span>
              </a>
              <span className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-300/12 text-sky-300">
                  <FaLocationArrow />
                </span>
                <span>
                  <small className="block text-xs font-bold uppercase tracking-[.18em] text-slate-500">
                    Location
                  </small>
                  <strong className="mt-1 block text-sm text-white">
                    Ana Lin, Vushtrri 42000, Kosovo
                  </strong>
                </span>
              </span>
              <a
                href="https://facebook.com/unimaxks"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/12 bg-white/[.055] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] transition-all hover:-translate-y-1 hover:border-sky-300/35 hover:bg-sky-200/[.07]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-300/12 text-sky-300">
                  <FaFacebookF />
                </span>
                <span>
                  <small className="block text-xs font-bold uppercase tracking-[.18em] text-slate-500">
                    Follow
                  </small>
                  <strong className="mt-1 block text-sm text-white">facebook.com/unimaxks</strong>
                </span>
              </a>
            </div>
            <div className="mt-3 overflow-hidden rounded-2xl border border-white/12 bg-white/[.045]">
              <button
                type="button"
                onClick={() => setShowHours((value) => !value)}
                aria-expanded={showHours}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-bold text-white focus-visible:outline-2 focus-visible:outline-sky-200"
              >
                <span className="flex items-center gap-3">
                  <FaClock className="text-sky-300" /> Business hours
                </span>
                <FaChevronDown
                  className={`text-sky-300 transition-transform ${showHours ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${showHours ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden px-4">
                  <div className="border-t border-white/10 pt-3">
                    {weeklyHours.map(({ day, time }) => (
                      <div
                        key={day}
                        className="flex justify-between gap-4 border-b border-white/6 py-2 text-xs last:border-0"
                      >
                        <span className="font-semibold text-slate-200">{day}</span>
                        <span className="text-right text-slate-400">{time}</span>
                      </div>
                    ))}
                    <div className="mt-3 grid gap-2 text-xs sm:grid-cols-2">
                      <p className="rounded-lg bg-white/5 p-3 text-slate-300">
                        <strong className="block text-white">Monday - Saturday</strong>10:00 - 20:00
                      </p>
                      <p className="rounded-lg bg-white/5 p-3 text-slate-300">
                        <strong className="block text-white">Sunday</strong>10:00 - 20:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[1.6rem] border border-white/12 bg-[#06142c]/75 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.1)] backdrop-blur-xl sm:p-7">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-300/12 text-sky-300">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-300">
                  Message us
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  Tell us what your vehicle needs.
                </h3>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Name{" "}
                  <span className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-300" />
                    <input
                      required
                      name="name"
                      className={`${fieldClass} pl-10`}
                      placeholder="Your name"
                    />
                  </span>
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Email{" "}
                  <input
                    required
                    type="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Phone{" "}
                  <input name="phone" type="tel" className={fieldClass} placeholder="+383..." />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Subject{" "}
                  <input
                    required
                    name="subject"
                    className={fieldClass}
                    placeholder="How can we help?"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Message{" "}
                <textarea
                  required
                  name="message"
                  rows="5"
                  className={`${fieldClass} resize-none`}
                  placeholder="Tell us about your vehicle or the products you need"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl border border-sky-100/30 bg-sky-300/18 px-5 py-3.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.2)] transition-all hover:-translate-y-1 hover:bg-sky-300/28 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100"
              >
                Send message
              </button>
              {sent && (
                <p
                  className="rounded-xl border border-sky-300/25 bg-sky-300/10 px-4 py-3 text-sm text-sky-100"
                  role="status"
                >
                  Thank you—our team will be in touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </Reveal>
      <Reveal className="mt-5 grid gap-5 lg:grid-cols-2" delay={100}>
        <iframe
          title="UNIMAX store location"
          className="h-72 w-full rounded-3xl border border-white/12 grayscale-[.25] transition duration-500 hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21824.450665473036!2d20.9322366743164!3d42.82674109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535bdbc65b19d7%3A0x1b55ee91a4cc478f!2sUnimax!5e1!3m2!1sen!2s!4v1783791794155!5m2!1sen!2s"
        />
        <iframe
          title="UNIMAX second location"
          className="h-72 w-full rounded-3xl border border-white/12 grayscale-[.25] transition duration-500 hover:grayscale-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21828.85267897047!2d20.961618550985506!3d42.814271303808184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13535d0013e22f55%3A0xb10e2dcafd2281df!2sUnimax%20Auto%20Dekor!5e1!3m2!1sen!2s!4v1783791852966!5m2!1sen!2s"
        />
      </Reveal>
    </div>
  );
}

export default Contact;
