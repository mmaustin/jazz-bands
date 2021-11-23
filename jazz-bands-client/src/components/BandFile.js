import React from 'react'
import Band from './Band'

const BandFile = ({bands}) => {
    return(
        <>
            {bands.map((band, index) => (
                <Band key={index} band={band} />
            ))}
        </>
    )
}

export default BandFile