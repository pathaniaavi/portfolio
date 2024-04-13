import ExperienceCard from "../../../../components/ExperienceCard/ExperienceCard";
import { Avatar, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { timelineData } from "./data/timelineData";
import TimelineItem from "../../../../components/TimeLineItem/timelineItem";


export function Profile() {
  const [showExperienceCard, setShowExperienceCard] = useState(false);

  const toggleCard = () => {
    setShowExperienceCard(!showExperienceCard);
  };

  const redirectToLinkedIn = () => {
    // Redirect to LinkedIn page
    window.location.href = "https://www.linkedin.com/in/avishekpathania/"; // Replace with your LinkedIn URL
  };


  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/background-3.png')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-black/60" />
      </section>
      <section className="relative py-16 bg-white">
        <div className="relative flex flex-col w-full min-w-0 px-4 mb-6 -mt-40 break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col justify-between lg:flex-row">
              <div className="relative flex items-start gap-6">
                <div className="w-40 -mt-20">
                  <img
                    src="/Avishek.jpg"
                    alt="Profile picture"
                    // variant="rounded"
                    className="object-top w-full h-full rounded-full"
                  />
                </div>
                <div className="flex flex-col mt-2 ">
                  <h2 className="text-2xl font-bold ">Avishek Pathania</h2>
                  <p className="!mt-0 font-normal" color="gray">
                    pathaniaavi@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-10 mb-10 lg:flex-col lg:justify-end lg:mb-0 lg:px-4 lg:-mt-5">
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <button
                    type="button"
                    className="w-25 h-9 py-2.5 flex justify-center items-center  
                    px-5 me-2 mb-2 lg:ml-auto text-sm font-medium text-white focus:outline-none rounded-lg
                    dark:bg-gray-800 dark:hover:text-gray-300 hover:shadow-md hover:font-medium"
                    onClick={redirectToLinkedIn}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="container mt-5 space-y-2">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 -mt-px text-blue-gray-500" />
                <p className="font-medium text-blue-gray-500">
                  Koblenz, Germany
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BriefcaseIcon className="w-4 h-4 -mt-px text-blue-gray-500" />
                <p className="font-medium text-blue-gray-500">
                  Full Stack Developer
                </p>
              </div>
              <div className="flex items-center gap-2">
                <BuildingLibraryIcon className="w-4 h-4 -mt-px text-blue-gray-500" />
                <p className="font-medium text-blue-gray-500">
                  Universität Koblenz
                </p>
              </div>
            </div>
            <div className="py-6 mb-10">
              <div className="flex flex-col items-start w-full lg:w-1/2">
                <p className="mb-6 font-normal text-blue-gray-500">
                  Experienced and results-driven Full Stack Developer with a
                  proven track record of designing, implementing and managing
                  complex web applications. Strong expertise in MongoDB,
                  Angular, Java, and Node.js, coupled with a comprehensive
                  understanding of full-stack development. Proven ability to
                  analyze business requirements, and optimize application
                  performance. Seeking to contribute technical leadership and
                  hands-on development skills to a forward-thinking
                  organization.
                </p>

                {/* Render the button only if showExperienceCard is false */}
                {!showExperienceCard && (
                    <button
                    type="button"
                    onClick={toggleCard}
                    className="flex items-center justify-center w-32 pt-3 rounded-md h-15 hover:bg-gray-100 hover:font-medium animate-bounce"
                  >Show more
                    {/* <span>Show more</span> */}
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}

                {/* Render the ExperienceCard if showExperienceCard is true */}
              </div>
            </div>

            {showExperienceCard && (
        <div>
          <ol className="relative border-gray-600 border-s via-neutral-600 to-transparent dark:border-gray-300">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                position={item.position}
                location={item.location}
                timePeriod={item.timePeriod}
                responsibilities={item.responsibilities}
                technicalGridImages={item.technicalGridImages}
                companylogosrc={item.companylogosrc}
                logoWidth={item.logoWidth}
                logoHeight={item.logoHeight}
              />
            ))}
          </ol>
        </div>
      )}
<div className="w-full">
  <div className="relative right-0">
    <ul className="relative flex flex-wrap p-1 list-none rounded-lg bg-blue-gray-50/60" data-tabs="tabs" role="list">
      <li className="z-30 flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target=""  role="tab" aria-selected="true">
          <span className="ml-1">HTML</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" active="true" role="tab" aria-selected="false">
          <span className="ml-1">React</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="false">
          <span className="ml-1">Vue</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="true">
          <span className="ml-1">Angular</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target="" role="tab" aria-selected="true">
          <span className="ml-1">Svelte</span>
        </a>
      </li>
    </ul>
  </div>
</div> 
          </div>
        </div>
      </section>
      <div className="text-black bg-white">{/* , d,cd md mdssss */}</div>
    </>
  );
}

export default Profile;
