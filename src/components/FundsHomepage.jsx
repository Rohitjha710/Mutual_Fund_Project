import React, { Component } from "react";
import Fund from "./FundHomepage";
import { Flex, Spinner } from "@chakra-ui/core";
import { fetchFunds } from "../actions/mfActions";
import { connect } from "react-redux";
class FundsHomePage extends Component {
  componentDidMount() {
    this.props.fetchFunds();
  }
  render() {
    return (
      <Flex mx={["2%", "20%", "5.3%"]} wrap="wrap" justify="space-between">
        {this.props.funds.length === 0 ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="5rem"
            mx="10%"
            mt="20%"
          />
        ) : (
          this.props.funds.map(fund => <Fund key={fund.name} fund={fund} />)
        )}
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  funds: state.funds.fundsList
});
export default connect(mapStateToProps, { fetchFunds })(FundsHomePage);
