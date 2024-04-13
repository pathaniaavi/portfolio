import { Fragment } from "react";
import PropTypes from 'prop-types'; 
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Divider } from "@mui/material";

import JavaIcon from "../../public/Icons/Java";
import ImageGrid from "../ImageGrid/Imagegrid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ExperienceCard = ({ position, location, timePeriod, responsibilities, technicalGridImages ,companylogosrc , logoWidth, logoHeight}) => {
  return (
    <div className="p-8">
      <div className="">
        <div className="grid grid-cols-2">
          <h2 className="col-span-1 text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:tracking-tight ">
            {position}
          </h2>
          <Image className="col-span-1 ml-auto" src={companylogosrc} alt="dedalus logo" width={logoWidth} height={logoHeight} />
        </div>
        <div className="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-red-500" aria-hidden="true" />
            {location}
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-900" aria-hidden="true" />
            {timePeriod}
          </div>
        </div>

        <div className="mt-8 mb-5">
          <h2 className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-600">Responsibilities:</h2>
          <ul className="text-gray-500 list-disc list-inside dark:text-gray-600">
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <hr className="my-5 bg-transparent border-t-0 h-0.5 opacity-30 bg-gradient-to-r from-transparent via-neutral-600 to-transparent dark:via-neutral-400"></hr>

        <div>
          <ImageGrid images={technicalGridImages} />
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timePeriod: PropTypes.string.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  technicalGridImages: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      smColSpan: PropTypes.number.isRequired,
      lgColSpan: PropTypes.number.isRequired,
      maxHeight: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ExperienceCard;
