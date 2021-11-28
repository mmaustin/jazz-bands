import React, {Component} from 'react'
//import BandFile from './BandFile';
import Band from './Band';

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
            allBands: [],
            iterated: false
        }
    }

    /*componentDidMount(){
        this.interval = setInterval(this.changeText, 5000)
    }

    changeText = () => {
        
        let a = document.getElementsByClassName('colorChange');
        a[0].innerHTML += ' Or is it?'
    }*/



    handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            bandName: this.state.bandName,
            playerOne: this.state.playerOne,
            playerTwo: this.state.playerTwo,
            playerThree: this.state.playerThree,
            playerFour: this.state.playerFour,
            playerFive: this.state.playerFive,
            signatureSong: this.state.signatureSong
        };
        let data = this.state.allBands.concat(formData);
         this.setState({allBands: data}, () => console.log(this.state.allBands))
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Band Name:
                    <input
                        type='text'
                        name='bandName'
                        onChange={this.handleChange}
                        value={this.state.bandName}
                    />
                    Trumpet:
                    <input
                        type='text'
                        name='playerOne'
                        onChange={this.handleChange}
                        value={this.state.playerOne}
                    />
                    Saxophone:
                    <input
                        type='text'
                        name='playerTwo'
                        onChange={this.handleChange}
                        value={this.state.playerTwo}
                    />
                    Piano:
                    <input
                        type='text'
                        name='playerThree'
                        onChange={this.handleChange}
                        value={this.state.playerThree}
                    />
                    Bass:
                    <input
                        type='text'
                        name='playerFour'
                        onChange={this.handleChange}
                        value={this.state.playerFour}
                    />
                    Drums:
                    <input
                        type='text'
                        name='playerFive'
                        onChange={this.handleChange}
                        value={this.state.playerFive}
                    />
                    Signature Song:
                    <input
                        type='text'
                        name='signatureSong'
                        onChange={this.handleChange}
                        value={this.state.signatureSong}
                    />
                    <input type="submit"/>
                </form> 
                <p className="colorChange">This is always here.</p>
                {this.state.allBands.map((band, index) => <Band key={index} band={band}/>)}           
            </div>
        )
    }

}

export default BandsState