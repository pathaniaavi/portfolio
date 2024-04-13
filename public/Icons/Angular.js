import React from 'react';
import PropTypes from 'prop-types';

function AngularIcon({ width, height, color }) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031"></path>
        <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"></path>
        <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill={color}></path>
      </g>
    </svg>
  );
}

AngularIcon.defaultProps = {
  width: '24px',
  height: '24px',
  color: 'white',
};

AngularIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

export default AngularIcon;
