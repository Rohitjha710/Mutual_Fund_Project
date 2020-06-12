import React, { Component } from "react";
import Fund from "./FundHomepage";
import { Flex } from "@chakra-ui/core";
import { connect } from "react-redux";
class FundsHomePage extends Component {
  render() {
    return (
      <Flex mx={["2%", "20%", "5.3%"]} wrap="wrap" justify="space-between">
        {this.props.funds.map(fund => (
          <Fund key={fund.code} fund={fund} />
        ))}
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.funds.topHundredFunds
});
export default connect(mapStateToProps, {})(FundsHomePage);
