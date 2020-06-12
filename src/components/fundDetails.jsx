import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchFundByCode } from "../actions/mfActions";
class FundDetails extends Component {
    componentDidMount(){
  let { fundCode } = this.props.match.params;

  this.props.fetchFundByCode(fundCode);
    }
    render() { 
        console.log(this.props.fundDetails)
        return (  
            <h1>hey</h1>
        );
    }
}
 const mapStateToProps = state =>({
     fundDetails : state.funds.fundDetails
 })
export default connect(mapStateToProps,{fetchFundByCode})(FundDetails);