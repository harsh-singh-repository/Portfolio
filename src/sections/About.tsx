"use client"

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodeJsIcon from "@/assets/icons/node-js.svg";
import ExpressIcon from "@/assets/icons/icons8-express-js.svg";
import MongoDb from "@/assets/icons/mongodb-svgrepo-com.svg";
import mapImage from "@/assets/images/map.png";
import smileMimoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { ToolboxComponent } from "@/components/ToolboxComponent";
import {motion} from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "Javascript",
    iconType: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    iconType: <HTMLIcon />,
  },
  {
    title: "CSS3",
    iconType: <CssIcon />,
  },
  {
    title: "React",
    iconType: <ReactIcon />,
  },
  {
    title: "Github",
    iconType: <GithubIcon />,
  },
  {
    title: "NodeJS",
    iconType: <NodeJsIcon className="size-10" />,
  },
  {
    title: "Express",
    iconType: <ExpressIcon />,
  },
  {
    title: "MongoDB",
    iconType: <MongoDb className="size-10" />,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🖌️",
    left:"5%",
    top:"5%"
  },
  {
    title: "Photography",
    emoji: "📷",
    left:"50%",
    top:"5%"
  },
  {
    title: "Designing",
    emoji: "🏜️",
    left:"10%",
    top:"35%"
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left:"35%",
    top:"40%"
  },
  {
    title: "Exercising",
    emoji: "🏋️",
    left:"70%",
    top:"45%"
  },
  {
    title: "Music",
    emoji: "🎵",
    left:"5%",
    top:"65%"
  },
  {
    title: "Reading",
    emoji: "📚",
    left:"45%",
    top:"70%"
  },
];

export const AboutSection = () => {
  const constrainRef = useRef(null);
  return (
    <>
      <div className="py-20 lg:py-28" id="about">
        <div className="container">
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse into my World."
            description="Learn more about who i am, what I do and what inspire me."
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the Books shaping my Prespective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description=" Explore the technologies and tools used to craft exceptional
                digital experiences."
                className=""
              />
              <div>
                <ToolboxComponent
                  toolBoxItems={toolBoxItems}
                  itemWrapperClassname="animate-move-left [animation-duration:30s]"
                />
                <ToolboxComponent
                  toolBoxItems={toolBoxItems}
                  classname="mt-2 mb-2"
                  itemWrapperClassname="-translate-x-1/2 animate-move-right [animation-duration:15s]"
                />
              </div>
            </Card>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my intrest and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative h-full" ref={constrainRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                        left:hobby.left,
                        top:hobby.top,
                        
                      }}
                      drag
                      dragConstraints={constrainRef}
                    >
                      <span className="font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 animate-ping [animation-duration:2s]">
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                  </div>
                  <Image src={smileMimoji} alt="Similing Emoji" className="size-20"/>
              </div>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
