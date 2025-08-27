import React, {useState} from 'react'

type Props = {
    isCollapsed: boolean;
    setDisplayedContent: (newContent: string) => void;
}

function Sidebar({isCollapsed, setDisplayedContent}: Props) {
  console.log(isCollapsed, setDisplayedContent);
  return (
    <div className={`bg-custom-white text-black d-flex justify-content-center align-items-center g-0 d-none d-md-flex sticky-top ${
        isCollapsed ? "col-1" : "col-2"
        }`}>
        <div className="row h-100 w-100 flex-column">
            <div
                className="d-flex align-items-center justify-content-start"
                style={{ flex: "0 0 10%" }}
            >
                <img src={`../../assets/temporaryLogo-${isCollapsed ? "short" : "long"}.svg`} alt="temporary logo" style={{width: `${isCollapsed ? "45%" : "80%"}`, height: "auto", maxHeight: "100%"}}/>
            </div>
            <div
                className="d-flex flex-column px-1 py-3"
                style={{ flex: "1 0 90%" }}
            >
                <ul className='list-group'>
                    <li className='list-group-item' onClick={() => {setDisplayedContent('home')}} style={{cursor: "pointer"}}>Home</li>
                    <li className='list-group-item' onClick={() => {setDisplayedContent('user-list')}} style={{cursor: "pointer"}}>User List</li>
                    <li className='list-group-item'>Third item</li>
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Sidebar