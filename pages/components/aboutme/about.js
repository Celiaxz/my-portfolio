import React from "react";

const About = () => {
  return (
    <div className="bg-black md:px-20 px-5" id="about">
      <div className="border border-gray-900 p-10 rounded-3xl shadow-2xl shadow-gray-900">
        <div className="h-[5px] w-[60px] bg-orange-600  rounded-r-3xl" />
        <h1 className="headtext__base text-orange-600   my-3 text-semibold  text-[48px]">
          About Me
        </h1>
        <p className="text-gray-400 text-[20px]">
          Have more than 2 years of experience in creating and maintaining
          functional, attractive and responsive web applications. Clear
          understanding for new technologies and best design practices. I have
          knowledge of popular frameworks such as React , and experience with
          REST API.
        </p>
        <h4 className="text-white font-[600] text-[20px] text-center md:text-left my-5">
          Work timeline
        </h4>
        <div className="flex md:flex-row flex-col gap-10">
          <div className="md:flex-1 flex flex-col md:items-start items-center">
            <div className="flex md:flex-row items-center w-full flex-col">
              <span className="text-white flex-1 mr-4">
                Feb, 2017 – July, 2019
              </span>{" "}
              <div className="w-full flex-1 h-[2px]  bg-orange-600  rounded-l-full" />
            </div>
            <p className="text-gray-400">Web Specialist </p>
            <p className=" text-green-600">Tots Integrated Services </p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>
          <div className="md:flex-1 flex flex-col md:items-start items-center">
            <div className="flex md:flex-row items-center w-full flex-col">
              <span className="text-white flex-1 mr-4">
                Sep, 2019 – Sep, 2023
              </span>{" "}
              <div className="w-full flex-1 h-[2px]  bg-orange-600  rounded-l-full" />
            </div>
            <p className="text-gray-400">Career Break | Study </p>
            <p className=" text-green-600"> University of Passau </p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>
          <div className="md:flex-1 flex flex-col md:items-start items-center">
            <div className="flex md:flex-row items-center w-full flex-col">
              <span className="text-white flex-1 mr-4">
                Jan, 2022 – July, 2022
              </span>{" "}
              <div className="w-full flex-1 h-[2px]  bg-orange-600  rounded-l-full" />
            </div>
            <p className="text-gray-400">Frontend web developer intern</p>
            <p className=" text-green-600">AlLuvium HQ</p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>

          <div className="md:flex-1  flex flex-col md:items-start items-center">
            <div className=" flex md:flex-row w-full flex-col items-center">
              <span className="text-white flex-1 mr-4">
                Aug, 2023 – present
              </span>{" "}
              <div className="w-full flex-1 h-[2px] bg-orange-600 rounded-l-full" />
            </div>
            <p className="text-gray-400">Fullstack developer</p>
            <p className=" text-green-600">MFOH</p>
            <div className="md:hidden block mt-3">
              <div className="w-[2px] flex-1 h-[50px] bg-blue-600 " />
            </div>
          </div>

          <div className=" md:text-left  text-center">
            <p className="text-gray-400">Current</p>
            <p className=" text-yellow-600">Searching For fulltime job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
