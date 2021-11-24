import React, {Component} from 'react'
import BandFile from './BandFile';

class BandsState extends Component {

    constructor(){
        super();
        this.state = {
            bandName: "",
            playerOne: "",
            playerTwo: "",
            playerThree: "",
            playerFour: "",
            playerFive:  "",
            signatureSong: "",
            allBands: []
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <BandFile handleChange={this.handleChange} state={this.state}/>
        )
    }

}

export default BandsState