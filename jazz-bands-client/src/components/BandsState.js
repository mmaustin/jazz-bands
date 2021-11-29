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

    iterateBands = () => {
        if(this.state.iterated){
            this.setState(prevState => {
                return {
                    allBands: prevState.allBands.concat([])
                    .map(band => {return {...band, bandName: band.bandName
                    .split( ' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')}}),
                    iterated: false
                }
            }, () => console.log(this.state.allBands))
        } else {
            this.setState(prevState => {
                return {
                    allBands: prevState.allBands.concat([])
                    .map(band => {return {...band, bandName: band.bandName.toUpperCase()}}),
                    iterated: true
                }
            }, () => console.log(this.state.allBands))
        }
    }

    /*componentDidMount(){
        this.interval = setInterval(this.changeText, 5000)
    }

    changeText = () => {
        
        let a = document.getElementsByClassName('colorChange');
        a[0].innerHTML += ' Or is it?'
    }*/

    changeColor = (e) => {
        if(e.target.style.backgroundColor === 'blue'){
            e.target.style.backgroundColor = 'red'
        } else {
            e.target.style.backgroundColor = 'blue'
        }
    }

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
         this.setState({allBands: data})
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
                {this.state.allBands.map((band, index) => <Band key={index} band={band} color={this.changeColor}/>)} 
                <button onClick={this.iterateBands}>Click Me!</button>          
            </div>
        )
    }

}

export default BandsState