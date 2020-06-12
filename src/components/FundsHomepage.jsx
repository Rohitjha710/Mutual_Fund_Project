import React, { Component } from "react";
import Fund from "./FundHomepage";
import { Flex,Spinner } from "@chakra-ui/core";
import { connect } from "react-redux";
class FundsHomePage extends Component {
  render() {
    const {fund_category, fund_type, plan} = this.props.filters;
    let isFilterSet = fund_category.length + fund_type.length + plan.length === 0 ?false:true;
    return (
      <Flex mx={["2%", "20%", "5.3%"]} wrap="wrap" justify="space-between">
       {this.props.funds.length === 0 && !isFilterSet  && <Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl" ml="45%" mt="50px"
/>}
        {this.props.funds.map(fund => (
          <Fund key={fund.code} fund={fund} />
        ))}
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.funds.topHundredFunds,
  filters : state.funds.filters
});
export default connect(mapStateToProps, {})(FundsHomePage);
