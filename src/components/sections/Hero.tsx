import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Background Image - Full Screen */}
      <div className="absolute inset-0">
        <Image
          src="/images/mod-home-hero.webp"
          alt="Modern German Kitchen"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default Hero;