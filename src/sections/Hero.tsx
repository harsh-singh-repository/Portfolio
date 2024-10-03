import mimojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import Hero_orbit from "@/components/Hero_orbit";
import Resume from "@/assets/icons/resume.png"


export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] absolute">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="hero-ring size-[620px]" />
      <div className="hero-ring size-[820px]" />
      <div className="hero-ring size-[1020px]" />
      <div className="hero-ring size-[1220px]" />
        <Hero_orbit size={430} rotation={-15} shouldOrbit orbitDuration="30s"  shouldSpin spinDuration="3s">
            <SparkleIcon className="size-8 text-emerald-300/20 "/>
        </Hero_orbit>
        <Hero_orbit size={440} rotation={79} shouldOrbit orbitDuration="32s"  shouldSpin spinDuration="3s">
            <SparkleIcon className="size-5 text-emerald-300/20"/>
        </Hero_orbit>
        <Hero_orbit size={590} rotation={98} shouldOrbit orbitDuration="34s"  shouldSpin spinDuration="6s">
            <StarIcon className="size-8 text-emerald-300"/>
        </Hero_orbit>
        <Hero_orbit size={550} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
            <StarIcon className="size-12 text-emerald-300"/>
        </Hero_orbit>
        <Hero_orbit size={520} rotation={-42} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="3s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </Hero_orbit>
        <Hero_orbit size={530} rotation={178} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-10 text-emerald-300/20"/>
        </Hero_orbit>
        <Hero_orbit size={650} rotation={-5} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="3s">
            <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </Hero_orbit>
        <Hero_orbit size={710} rotation={150} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
            <SparkleIcon className="size-14 text-emerald-300/20"/>
        </Hero_orbit>
        <Hero_orbit size={720} rotation={85} shouldOrbit orbitDuration="46s"  shouldSpin spinDuration="3s">
            <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </Hero_orbit>
        <Hero_orbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
            <StarIcon className="size-28 text-emerald-300"/>
        </Hero_orbit>
        </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={mimojiImage}
            className="size-[100px]"
            alt="Person peeking form behind laptop"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-semibold">
              Available for new Project.
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
         Harsh Singh - Fullstack Developer
        </h1>
        <p className="mt-4 text-center text-white/62 md:text-lg">
          I sepacilized in transforming designs into functional, high performing
          web applications. Let&apos;s Discuss next project.
        </p>
        <div className="container relative z-20">
        <div className="flex flex-col items-center mt-8 gap-4 justify-center md:flex-row">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <a href="#project" className="inline-flex items-center gap-2">
               <span className="font-semibold">Explore my work</span>
                <ArrowDown className="size-4" />
            </a>
          </button>
          <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <a href="https://drive.google.com/file/d/1Pyz3oDXo645bvbfIJ3rL6pawBDUUl9_W/view?usp=drive_link" className="inline-flex items-center gap-2" target="_blank">
              <span className="font-semibold"><Image src={Resume} alt="Resume" height={15} width={15}/></span>
              <span>View Resume</span>
            </a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
