import React from 'react'
//import Band from './Band'

const Bands = ({band}) => {
    return(
        <>
            <p>{band.bandName}</p>
            <p>{band.playerThree}</p>
        </>
    )
}

export default Bands