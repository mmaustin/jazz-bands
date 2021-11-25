import React from 'react'
import Band from './Band'

const Bands = ({bands}) => {
    return(
        <>
            {bands.map((band, index) => {
                return <Band key={index} band={band} />
            })}
        </>
    )
}

export default Bands