import React, { Component } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Box,
  Text,
  PopoverCloseButton
} from "@chakra-ui/core";
import { sortFundsByParam } from "../actions/mfActions";
import { connect } from "react-redux";
class Sorting extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(param, sortD) {
    // console.log(param);
    // console.log(sortD);
    this.props.sortFundsByParam(param, sortD);
  }
  render() {
    return (
      <Popover>
        <PopoverTrigger>
          <Button w="20%">Sort Funds</Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4} w="20%">
          {/* <PopoverArrow /> */}
          <PopoverCloseButton />
          <PopoverBody>
            <Box className="sortParams">
              <Text>Name</Text>
              <Button mr="10px" onClick={() => this.onChange("name", "ASC")}>
                ASC
              </Button>
              <Button onClick={() => this.onChange("name", "desc")}>
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text>CATEGORY</Text>
              <Button
                mr="10px"
                onClick={() => this.onChange("fund_category", "ASC")}
              >
                ASC
              </Button>
              <Button onClick={() => this.onChange("fund_category", "desc")}>
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text>TYPE</Text>
              <Button
                mr="10px"
                onClick={() => this.onChange("fund_type", "ASC")}
              >
                ASC
              </Button>
              <Button onClick={() => this.onChange("fund_type", "desc")}>
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text>PLAN</Text>
              <Button mr="10px" onClick={() => this.onChange("plan", "ASC")}>
                ASC
              </Button>
              <Button onClick={() => this.onChange("plan", "desc")}>
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text>1Y RETURNS</Text>
              <Button mr="10px" onClick={() => this.onChange("year_1", "ASC")}>
                LOW
              </Button>
              <Button onClick={() => this.onChange("year_1", "desc")}>
                HIGH
              </Button>
            </Box>{" "}
            <Box className="sortParams">
              <Text>3Y RETURNS</Text>
              <Button mr="10px" onClick={() => this.onChange("year_3", "ASC")}>
                LOW
              </Button>
              <Button onClick={() => this.onChange("year_3", "desc")}>
                HIGH
              </Button>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
}
const mapStateToProps = state => ({
  s: state.funds.fundsList
});
export default connect(mapStateToProps, {sortFundsByParam})(Sorting);
