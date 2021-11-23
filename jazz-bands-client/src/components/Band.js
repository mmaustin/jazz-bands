import React from 'react'

const Band = ({band}) => {
    return(
        <>
            <li>
                {band.band}
            </li>
            <p>
                {band.personnel.map(p => p.name)}
            </p>
        </>
    )
}

export default Band