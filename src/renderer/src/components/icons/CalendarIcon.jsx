import React from 'react'

const CalendarIcon = ({ width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.8882 2V6.79998M25.1113 2V6.79998M2.88833 13.3437H33.1105M24.5687 20.7199H24.5846M24.5687 25.5201H24.5846M17.9918 20.7199H18.0078M17.9918 25.5201H18.0078M11.4113 20.7199H11.4272M11.4113 25.5201H11.4272M34 12.4001V26.0001C34 30.8 31.3334 34 25.1112 34H10.8889C4.66667 34 2 30.8 2 26.0001V12.4001C2 7.60013 4.66667 4.40014 10.8889 4.40014H25.1112C31.3334 4.40014 34 7.60013 34 12.4001Z"
        stroke="black"
        strokeWidth="2.81818"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CalendarIcon
