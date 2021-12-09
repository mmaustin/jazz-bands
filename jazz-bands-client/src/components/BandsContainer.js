import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchBands } from '../actions/bandActions'
import Bands from './Bands'

class BandsContainer extends Component {
    componentDidMount() {
      this.props.fetchBands();
    }
  
  
    render(){
      return (
        <div>
          <Bands bands={this.props.bands} color={this.props.color}/>
        </div>
      );
    }
  } 
  
  
  function mapStateToProps(state) {
    return { bands: state.bands };
  }
  
  export default connect(mapStateToProps, {fetchBands})(BandsContainer);