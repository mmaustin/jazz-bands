import React, {Component} from 'react'
import { connect } from "react-redux";
import { fetchBands } from '../actions/bandActions'
import { capBands } from '../actions/bandActions';
import Bands from './Bands'

class BandsContainer extends Component {
    componentDidMount() {
      this.props.fetchBands();
    }
  
    capitalizeBands = () => {
      this.props.capBands()
    }
  
    render(){
      return (
        <div>
          <Bands bands={this.props.bands} color={this.props.color}/>
          <button onClick={this.capitalizeBands}>Click Me</button>
        </div>
      );
    }
  } 
  
  
  function mapStateToProps(state) {
    return { bands: state.bands };
  }
  
  export default connect(mapStateToProps, {fetchBands, capBands})(BandsContainer);