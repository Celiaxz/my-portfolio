import React, { useRef } from "react";
import fig9 from "../../../public/fig9.png";
import booki from "../../../public/booki.png";
import fig12 from "../../../public/fig12.png";
import fig11 from "../../../public/fig11.png";
import fig5 from "../../../public/fig5.png";
import fig6 from "../../../public/fig6.png";
import fig7 from "../../../public/fig7.png";
import Image from "next/image";
import styles from "./project.module.css";
import {
  RiArrowRightUpLine,
  RiCodeFill,
  RiArrowDropRightLine,
  RiArrowDropLeftLine,
} from "react-icons/ri";

// https://64e5fe9346a8560b7f016367--remarkable-buttercream-31f941.netlify.app/
const listProject = [
  {
    title: "Movie Bingo Game Application",
    body: "   A dynamic Bingo Movie Game App for\
    Interactive learning experience Match iconic movie quotes with movie names on your bingo card\
    Achieve bingo with rows, columns, or diagonals. Have fun with\
    Movie Quotes Bingo! 🎉 Press Play to start.",
    tags: "React | css",
    img: fig9,
    url: "https://movie-bingo.netlify.app/",
    codeurl: "https://github.com/Celiaxz/Movie-Bingo",
  },

  {
    title: "Bookish Explorer Application",
    body: "A user-friendly web application, it's meticulously crafted using Node.js, Express, and Mongoose, catering specifically to the needs of both budding and seasoned writers. By seamlessly integrating public APIs, this platform offers access to an extensive library of books, serving as a wellspring of inspiration and information.",
    tags: "EJS | css",
    img: booki,
    url: "https://bookish-explorer.adaptable.app/",
    codeurl: "https://github.com/Celiaxz/Bookish-Explorer",
  },
  {
    title: "Mossy Dive Game App",
    body: "Mossy Dive is a game that allows a player to save fruits from a mossy dangerous underworld. The underworld is filled with tenacious slimes and a green eyed monster👾. These ofcourse should be avoided inorder to save the fruits. The game is won when 20 fruits are collected without losing the 3 lives allocated to the player. Likewise the player losses the game when the lives are exhausted.",
    tags: "JS |HTML |CSS ",
    img: fig11,
    url: "https://celiaxz.github.io/Mossy-Dive-Game/",
    codeurl: "https://github.com/Celiaxz/Mossy-Dive-Game",
  },
  {
    title: "Portfolio Connect Application",
    body: "a full-stack web application built using the\
    MERN stack (MongoDB, Express, React, Node.js, which allows\
    users to create their portfolios, showcase coding projects,\
    collaborate with others and explore portfolios from different users.\
    Created backend service for managing the Application data",
    tags: "MERN",
    img: fig12,
    url: "https://portfolio-connect.netlify.app/",
    codeurl: "https://github.com/Celiaxz/Portfolio_Connect_Front",
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 110;
    } else {
      current.scrollLeft += 110;
    }
  };

  const ProjectCard = ({
    project: { title, body, tags, img, url, codeurl },
  }) => {
    return (
      <div className=" relative min-w-[410px] mr-[2rem]" id="project">
        <Image src={img} alt="" />

        <div className="headtext__base text-orange-600 p-5">{title}</div>
        <div className="h-[5px] w-[60px] bg-orange-600 ml-5 rounded-r-3xl" />
        <div className="text-white p-5 font-sans font-normal text-[20px]">
          {body}
        </div>
        <div className="text-gray-500 p-5 flex items-center justify-between">
          <span>{tags}</span>{" "}
          <a
            href={codeurl}
            className=" bg-orange-600 py-1 px-3 rounded-2xl text-white flex flex-row items-center justify-center"
          >
            code <RiCodeFill />
          </a>
          {url && (
            <a
              href={url}
              className=" bg-orange-600 py-1 px-3 rounded-2xl text-white flex flex-row items-center justify-center"
            >
              Live preview <RiArrowRightUpLine />
            </a>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={`${styles.project}`}>
        <div className={`${styles.project__container}`} ref={scrollRef}>
          {listProject.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="w-[92%] mx-auto my-[20px] flex justify-end gap-5">
        <button
          type="button"
          className="text-white border px-4 border-gray-700 rounded-md  hover:bg-neutral-800"
          onClick={() => scroll("left")}
        >
          <RiArrowDropLeftLine className="text-[30px]" />
        </button>
        <button
          type="button"
          className="text-white border py-1 px-4 border-gray-700 rounded-md hover:bg-neutral-800"
          onClick={() => scroll("right")}
        >
          <RiArrowDropRightLine className="text-[30px]" />
        </button>
      </div>
    </>
  );
};

export default Project;
