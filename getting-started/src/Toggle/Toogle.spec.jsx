import React from "react"

function Toogle({ onChange }) {
    console.log('Toogle')
    return <input type="checkbox" onChange={onChange} />
}

export default Toogle