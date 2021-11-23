import React from 'react'

const BandFile = ({bands}) => {
    return(
        <>
            {bands.map((band, index) => (
                <BandStats key={index} band={band} />
            ))}
        </>
    )
}

export default BandFile