import React from 'react'

type Props = {}

function Content({}: Props) {
  return (
    <div
        className="bg-custom-grey d-flex align-items-center justify-content-center"
        style={{ flex: "1 0 90%", borderRadius: "20px", transform: "scale(0.98)", transformOrigin: "center"}}
    >
        Content
    </div>
  )
}

export default Content