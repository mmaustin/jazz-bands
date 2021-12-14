import React from 'react'
import {connect} from 'react-redux'
import { deleteBand } from '../actions/bandActions'

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
            <button onClick={() => this.props.deleteBand(band.id)}>Delete Band</button>
        </>
    )
}

export default connect(null, {deleteBand})(Band)