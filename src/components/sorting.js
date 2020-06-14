import React, { Component } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Box,
  Text,
  Icon,
  PopoverCloseButton
} from "@chakra-ui/core";
import { sortFundsByParam, resetSort } from "../actions/mfActions";
import { connect } from "react-redux";
class Sorting extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(param, sortD) {
    const { categoryFilter, planFilter, typeFilter } = this.props;
    this.props.sortFundsByParam(
      param,
      sortD,
      typeFilter,
      planFilter,
      categoryFilter
    );
  }
  render() {
    const { sortKey, sortOrder } = this.props;
    return (
      <Popover>
        <PopoverTrigger>
          <Button w={["200px", "180px", "200px"]} mb="1rem">
            Sort Funds
          </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4} w={["fit-content", "40%", "fit-content"]}>
          <PopoverCloseButton />
          <PopoverBody>
            <Button   onClick={() => this.props.resetSort()} variantColor="red">
              <Icon name="repeat" mr="3px"></Icon>Reset
            </Button>
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                Name
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "name" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("name", "desc")}
              >
                DESC
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "name" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("name", "ASC")}
              >
                ASC
              </Button>
              
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                CATEGORY
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "fund_category" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("fund_category", "desc")}
              >
                DESC
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "fund_category" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("fund_category", "ASC")}
              >
                ASC
              </Button>
              
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                TYPE
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "fund_type" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("fund_type", "desc")}
              >
                DESC
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "fund_type" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("fund_type", "ASC")}
              >
                ASC
              </Button>
              
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                {" "}
                PLAN
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "plan" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("plan", "desc")}
              >
                DESC
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "plan" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("plan", "ASC")}
              >
                ASC
              </Button>
              
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                1Y RETURNS
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "year_1" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("year_1", "desc")}
              >
                HIGH
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "year_1" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("year_1", "ASC")}
              >
                LOW
              </Button>
              
            </Box>{" "}
            <Box className="sortParams">
              <Text color="hsl(0,0%,40%)" display="inline" fontSize="10px" fontWeight="600">
                3Y RETURNS
              </Text>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "year_3" && sortOrder === "desc"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("year_3", "desc")}
              >
                HIGH
              </Button>
              <Button
                color="hsl(0,0%,40%)"
                fontSize="10px"
                fontWeight="600"
                mr="10px"
                w="20%" h="30px" float="right"
                variantColor={
                  sortKey === "year_3" && sortOrder === "ASC"
                    ? "pink"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,40%)"
                onClick={() => this.onChange("year_3", "ASC")}
              >
                LOW
              </Button>
              
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
}
const mapStateToProps = state => ({
  categoryFilter: state.funds.filters.fund_category,
  typeFilter: state.funds.filters.fund_type,
  planFilter: state.funds.filters.plan,
  sortOrder: state.funds.sortOrder,
  sortKey: state.funds.sortKey
});
export default connect(mapStateToProps, { resetSort, sortFundsByParam })(
  Sorting
);
