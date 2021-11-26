 import React from 'react'
//import Personnel from './Personnel'

const Band = ({band}) => {
    return(
        <>
            <p>{band.bandName}</p>
            <p>{band.playerOne}</p>
            <p>{band.playerTwo}</p>
            <p>{band.playerThree}</p>
            <p>{band.playerFour}</p>
            <p>{band.playerFive}</p>
            <p>{band.signatureSong}</p>
        </>
    )
}

export default Band