import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandsContainer from './BandsContainer';
import {addBand} from '../actions/bandActions'

class BandsState extends Component {



    constructor(){
        super();
        this.state = {
            band_name: "",
            player_one: "",
            player_two: "",
            player_three: "",
            player_four: "",
            player_five:  "",
            signature_song: "",
            allBands: [],
            iterated: false
        }
    }

    

    /*iterateBands = () => {
        console.log(this.props.bands.map(band => {return {...band, band_name: band.band_name
            .split( ' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')}}))
        if(this.state.iterated){
            this.setState(prevState => {
                return {
                    allBands: prevState.allBands.concat([])
                    .map(band => {return {...band, band_name: band.band_name
                    .split( ' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ')}}),
                    iterated: false
                }
            }, () => console.log(this.state.allBands))
        } else {
            this.setState(prevState => {
                return {
                    allBands: prevState.allBands.concat([])
                    .map(band => {return {...band, band_name: band.band_name.toUpperCase()}}),
                    iterated: true
                }
            }, () => console.log(this.state.allBands))
        }
    }*/

    changeColor = (e) => {
        if(e.target.style.color === 'blue'){
            e.target.style.color = 'red'
        } else {
            e.target.style.color = 'blue'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBand({band_name: this.state.band_name, player_one: this.state.player_one,
                            player_two: this.state.player_two, player_three: this.state.player_three,
                            player_four: this.state.player_four, player_five: this.state.player_five,
                            signature_song: this.state.signature_song})
        /* blocked out code is for having state stored in react, minus redux"
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
         this.setState({allBands: this.props.bands})*/
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    checkState = () => {
        console.log(this.props.bands)
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Band Name:
                    <input
                        type='text'
                        name='band_name'
                        onChange={this.handleChange}
                        value={this.state.band_name}
                    />
                    Trumpet:
                    <input
                        type='text'
                        name='player_one'
                        onChange={this.handleChange}
                        value={this.state.player_one}
                    />
                    Saxophone:
                    <input
                        type='text'
                        name='player_two'
                        onChange={this.handleChange}
                        value={this.state.player_two}
                    />
                    Piano:
                    <input
                        type='text'
                        name='player_three'
                        onChange={this.handleChange}
                        value={this.state.player_three}
                    />
                    Bass:
                    <input
                        type='text'
                        name='player_four'
                        onChange={this.handleChange}
                        value={this.state.player_four}
                    />
                    Drums:
                    <input
                        type='text'
                        name='player_five'
                        onChange={this.handleChange}
                        value={this.state.player_five}
                    />
                    Signature Song:
                    <input
                        type='text'
                        name='signature_song'
                        onChange={this.handleChange}
                        value={this.state.signature_song}
                    />
                    <input type="submit"/>
                </form>
                {/*{this.state.allBands.map((band, index) => <Band key={index} band={band} color={this.changeColor}/>)}*/}
                <BandsContainer color={this.changeColor} iterated={this.state.iterated}/>
                {/*<button onClick={this.iterateBands}>Click Me!</button>*/}     
            </div>
        )
    }

}

/*function mapStateToProps(state) {
    return { bands: state.bands };
  }*/

export default connect(null, {addBand})(BandsState)