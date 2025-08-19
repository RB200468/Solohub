import React from 'react'
import UsersList from './UsersList'

type Props = {}

function Content({}: Props) {

    return (
        <div
            className="bg-custom-grey d-flex align-items-start justify-content-evenly p-3 flex-wrap"
            style={{ flex: "1 0 90%", borderRadius: "20px", transform: "scale(0.98)", transformOrigin: "center"}}
        >
            <UsersList/>
        </div>
    )
}

export default Content