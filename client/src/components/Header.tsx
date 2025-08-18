import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <div
        className="bg-custom-white text-black d-flex align-items-center justify-content-between border"
        style={{ flex: "0 0 10%" }}
    >
        <div className="d-flex border">Sidebar Button</div>
        <div className="d-flex border">Profile/Menu</div>
    </div>
  )
}

export default Header