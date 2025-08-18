import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div
        className="bg-custom-white text-black d-flex align-items-center justify-content-center"
        style={{ flex: "0 0 10%" }}
    >
        Header
    </div>
  )
}

export default Header