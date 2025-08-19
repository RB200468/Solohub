import React from 'react'

type Props = {
    toggleSidebar: () => void;
}

function Header({toggleSidebar}: Props) {
  return (
    <div
        className="bg-custom-white text-black d-flex align-items-center justify-content-between px-3"
        style={{ flex: "0 0 10%" }}
    >
        <button type="button" className="btn bg-custom-grey text-black" onClick={toggleSidebar}>Sidebar</button>
        <button type="button" className="btn bg-custom-grey text-black">Profile/Menu</button>
    </div>
  )
}

export default Header