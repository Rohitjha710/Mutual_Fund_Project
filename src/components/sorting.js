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
        <PopoverContent zIndex={4} w={["100%", "40%", "20%"]}>
          <PopoverCloseButton />
          <PopoverBody>
            <Button onClick={() => this.props.resetSort()} variantColor="red">
              <Icon name="repeat" mr="5px"></Icon>Reset
            </Button>
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                Name
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "name" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("name", "ASC")}
              >
                ASC
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "name" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("name", "desc")}
              >
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                CATEGORY
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "fund_category" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("fund_category", "ASC")}
              >
                ASC
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "fund_category" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("fund_category", "desc")}
              >
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                TYPE
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "fund_type" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("fund_type", "ASC")}
              >
                ASC
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "fund_type" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("fund_type", "desc")}
              >
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                {" "}
                PLAN
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "plan" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("plan", "ASC")}
              >
                ASC
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "plan" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("plan", "desc")}
              >
                DESC
              </Button>
            </Box>
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                1Y RETURNS
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "year_1" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("year_1", "ASC")}
              >
                LOW
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "year_1" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("year_1", "desc")}
              >
                HIGH
              </Button>
            </Box>{" "}
            <Box className="sortParams">
              <Text color="hsl(0,0%,60%)" fontSize="0.9rem" fontWeight="600">
                3Y RETURNS
              </Text>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "year_3" && sortOrder === "ASC"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("year_3", "ASC")}
              >
                LOW
              </Button>
              <Button
                color="hsl(0,0%,60%)"
                fontSize="0.9rem"
                fontWeight="300"
                mr="10px"
                w="40%"
                variantColor={
                  sortKey === "year_3" && sortOrder === "desc"
                    ? "blue"
                    : "transparent"
                }
                border="1px solid hsl(0,0%,60%)"
                onClick={() => this.onChange("year_3", "desc")}
              >
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
  categoryFilter: state.funds.filters.fund_category,
  typeFilter: state.funds.filters.fund_type,
  planFilter: state.funds.filters.plan,
  sortOrder: state.funds.sortOrder,
  sortKey: state.funds.sortKey
});
export default connect(mapStateToProps, { resetSort, sortFundsByParam })(
  Sorting
);
