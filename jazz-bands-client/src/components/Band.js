import React from 'react'
import Personnel from './Personnel'

const Band = ({band}) => {
    return(
        <>
            <li>
                {band.band}
            </li>
                {band.personnel.map((member, index) => (
                    <Personnel key={index} member={member} />
                ))}
            <p>
                Signature Song: {band.signatureSong}
            </p>
        </>
    )
}

export default Band