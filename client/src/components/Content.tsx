import React from 'react'
import UsersList from './UsersList'

type Props = {
    displayedContent: string;
}

function Content({displayedContent}: Props) {

    return (
        <div
            className="bg-custom-grey d-flex align-items-start justify-content-evenly p-3 flex-wrap"
            style={{ flex: "1 0 90%", borderRadius: "20px", transform: "scale(0.98)", transformOrigin: "center"}}
        >
            {displayedContent === "user-list" && <UsersList/>}
            {displayedContent === "home" && <h1>Home Page</h1>}
        </div>
    )
}

export default Content