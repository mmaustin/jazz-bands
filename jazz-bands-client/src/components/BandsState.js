import React, {Component} from 'react'
import {bands} from '../data/bands'
import BandFile from './BandFile';

class BandsState extends Component {

    constructor(){
        super();
        this.state = {
            bands: bands
        }
    }

    render(){
        return(
            <>
                <BandFile bands={this.state.bands} />
            </>
        )
    }

}

export default BandsState