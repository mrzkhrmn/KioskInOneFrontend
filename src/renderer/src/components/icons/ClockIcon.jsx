import React from 'react'

const ClockIcon = ({ width = 32, height = 32 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.9353 22.088L17.9754 19.1279C17.1114 18.6159 16.4074 17.3839 16.4074 16.3759V9.81595M33 17C33 25.832 25.832 33 17 33C8.168 33 1 25.832 1 17C1 8.168 8.168 1 17 1C25.832 1 33 8.168 33 17Z"
        stroke="black"
        strokeWidth="1.90909"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ClockIcon
