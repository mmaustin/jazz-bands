import React from 'react'
import {connect} from 'react-redux'
import { deleteBand } from '../actions/bandActions'

const Band = (props) => {
    return(
        <>
            <p onClick={props.color}>{props.band.band_name}</p>
            <p onClick={props.color}>{props.band.player_one}</p>
            <p onClick={props.color}>{props.band.player_two}</p>
            <p onClick={props.color}>{props.band.player_three}</p>
            <p onClick={props.color}>{props.band.player_four}</p>
            <p onClick={props.color}>{props.band.player_five}</p>
            <p onClick={props.color}>{props.band.signature_song}</p>
            <img src={props.band.picture} alt='Band Pic'/>
            <button onClick={() => props.deleteBand(props.band.id)}>Delete Band</button>
        </>
    )
}

export default connect(null, {deleteBand})(Band)