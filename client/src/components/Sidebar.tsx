import React from 'react'

type Props = {
    isCollapsed: boolean;
}

function Sidebar({isCollapsed}: Props) {
  return (
    <div className={`bg-custom-white text-black d-flex justify-content-center align-items-center g-0 d-none d-md-flex sticky-top ${
        isCollapsed ? "col-1" : "col-2"
        }`}>
        <div className="row h-100 w-100 flex-column border">
            <div
                className="d-flex border border align-items-center justify-content-center"
                style={{ flex: "0 0 10%" }}
            >
                <img src={`../../assets/temporaryLogo-${isCollapsed ? "short" : "long"}.svg`} alt="temporary logo" style={{width: `${isCollapsed ? "60%" : "100%"}`, height: "auto", maxHeight: "100%"}}/>
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