import React, {Component} from 'react'
import {connect} from 'react-redux'
import BandsContainer from './BandsContainer';
import {addBand} from '../actions/bandActions'
import BandCount from './BandCount'

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
                <BandsContainer color={this.changeColor} iterated={this.state.iterated}/>
                <BandCount />
            </div>
        )
    }

}


export default connect(null, {addBand})(BandsState)