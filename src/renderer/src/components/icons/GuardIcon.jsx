import React from 'react'

const GuardIcon = ({ width = 36, height = 36 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.9821 16.5873C33.9821 24.4152 27.6108 31.7469 18.9064 33.8919C18.3141 34.036 17.668 34.036 17.0757 33.8919C8.37126 31.7469 2 24.4152 2 16.5873V9.55974C2 8.24709 3.11276 6.75834 4.49469 6.26209L14.4913 2.61231C16.7347 1.7959 19.2653 1.7959 21.5087 2.61231L31.5053 6.26209C32.8693 6.75834 34 8.24709 34 9.55974L33.9821 16.5873Z"
        stroke="black"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default GuardIcon
