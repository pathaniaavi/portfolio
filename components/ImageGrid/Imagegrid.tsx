import React from "react";

const ImageGrid = ({ images }) => {
  const gridColumns = images.length; // Determine number of columns based on the length of images array
  const gridClass = `grid items-center max-w-lg grid-cols-6 mx-auto mt-3 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-${gridColumns}`;
  console.log("gridColumns:", gridColumns); 
  return (
    <div className={ `grid items-center max-w-lg grid-cols-${gridColumns} mx-auto mt-3 sm:max-w-xl sm:grid-cols-${gridColumns} sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-${gridColumns}`}>
      {images.map((image, index) => (
        <img
          title={image.alt}
          key={index}
          className={`object-contain w-full sm:col-span-1 lg:col-span-1 max-h-12`}
          src={image.src}
          alt={image.alt}
        />
      ))}
      <div
        id="tooltip-animation"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 opacity-30 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};

export default ImageGrid;
