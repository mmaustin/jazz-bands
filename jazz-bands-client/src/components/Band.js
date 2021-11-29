 import React from 'react'
//import Personnel from './Personnel'

const Band = ({band, color}) => {
    return(
        <>
            <p onClick={color}>{band.bandName}</p>
            <p onClick={color}>{band.playerOne}</p>
            <p onClick={color}>{band.playerTwo}</p>
            <p onClick={color}>{band.playerThree}</p>
            <p onClick={color}>{band.playerFour}</p>
            <p onClick={color}>{band.playerFive}</p>
            <p onClick={color}>{band.signatureSong}</p>
        </>
    )
}

export default Band