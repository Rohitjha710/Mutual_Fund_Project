import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchFundByCode } from "../actions/mfActions";
import FundDetailsComponent from "./FundDetailsComponent";
class FundDetails extends Component {
    componentDidMount(){
  let { fundCode } = this.props.match.params;

  this.props.fetchFundByCode(fundCode);
    }
    render() { 
        return (  
            <React.Fragment>
                {this.props.fundDetails.length !==0 && 
                 <FundDetailsComponent fund={this.props.fundDetails[0]}/>   
                }
            </React.Fragment>
        );
    }
}
 const mapStateToProps = state =>({
     fundDetails : state.funds.fundDetails
 })
export default connect(mapStateToProps,{fetchFundByCode})(FundDetails);