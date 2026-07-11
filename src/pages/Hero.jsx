function Hero() {
  return (
    <div className="relative left-1/2 min-h-svh w-screen -translate-x-1/2 overflow-hidden">
      <img
        src="/images/Hero-image.png"
        alt="Unimax Main Image"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}

export default Hero;
