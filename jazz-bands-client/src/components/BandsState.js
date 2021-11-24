import React, {Component} from 'react'
import BandFile from './BandFile';

class BandsState extends Component {

    constructor(){
        super();
        this.state = {
            bandName: "",
            playerOne: {name: "", instrument: ""},
            playerTwo: {name: "", instrument: ""},
            playerThree: {name: "", instrument: ""},
            playerFour: {name: "", instrument: ""},
            playerFive: {name: "", instrument: ""},
            signatureSong: ""
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
                <BandFile />
            </>
        )
    }

}

export default BandsState