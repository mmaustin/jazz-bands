 import React from 'react'
//import Personnel from './Personnel'

const Band = ({band, color}) => {
    return(
        <>
            <p onClick={color}>{band.band_name}</p>
            <p onClick={color}>{band.player_one}</p>
            <p onClick={color}>{band.player_two}</p>
            <p onClick={color}>{band.player_three}</p>
            <p onClick={color}>{band.player_four}</p>
            <p onClick={color}>{band.player_five}</p>
            <p onClick={color}>{band.signature_song}</p>
        </>
    )
}

export default Band