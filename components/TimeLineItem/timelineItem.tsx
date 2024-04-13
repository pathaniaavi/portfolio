import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";

const TimelineItem = ({
  position,
  location,
  timePeriod,
  responsibilities,
  technicalGridImages,
  companylogosrc,
  logoWidth,
  logoHeight,
}) => {
  return (
    <li className="mb-10 border-t-0 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5  opacity-50 border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 ">
        {timePeriod}
      </time>
      <div className="m-5 border rounded-md shadow-md">
        <ExperienceCard
          position={position}
          location={location}
          timePeriod={timePeriod}
          responsibilities={responsibilities}
          technicalGridImages={technicalGridImages}
          companylogosrc={companylogosrc}
          logoWidth={logoWidth}
          logoHeight={logoHeight}
        />
      </div>
    </li>
  );
};

export default TimelineItem;
