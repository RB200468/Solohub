import React from 'react'

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className="col-2 bg-custom-white text-black d-flex justify-content-center align-items-center g-0">
        <div className="row h-100 w-100 flex-column border">
            <div
                className="d-flex border"
                style={{ flex: "0 0 10%" }}
            >
                Logo
            </div>
            <div
                className="d-flex"
                style={{ flex: "1 0 90%" }}
            >
                Menu List
            </div>
        </div> 
    </div>
  )
}

export default Sidebar