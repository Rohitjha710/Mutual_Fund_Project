import React, { Component } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Checkbox,
  CheckboxGroup,
  Heading
} from "@chakra-ui/core";

import { filteredFunds } from "../actions/mfActions";
import { connect } from "react-redux";
class Filter extends Component {
  checkboxChangeCategory = e => {
    this.props.filteredFunds(
      "fund_category",
      e,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  checkboxChangeType = e => {
    this.props.filteredFunds(
      "fund_type",
      e,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  checkboxChangePlan = e => {
    this.props.filteredFunds(
      "plan",
      e,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  render() {
    return (
      <Popover>
        <PopoverTrigger>
          <Button>Filter</Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          {/* <PopoverArrow /> */}
          {/* <PopoverCloseButton /> */}
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody>
            <Heading as="h3" fontSize="1.5rem">
              Type
            </Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeType}
              defaultValue={this.props.typeFilter}
            >
              {this.props.fund_type.map(type => (
                <Checkbox key={type} value={type}>
                  {type}
                </Checkbox>
              ))}
            </CheckboxGroup>

            <Heading as="h3" fontSize="1.5rem">
              Plan
            </Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangePlan}
              defaultValue={this.props.planFilter}
            >
              {this.props.plan.map(plan => (
                <Checkbox key={plan} value={plan}>
                  {plan}
                </Checkbox>
              ))}
            </CheckboxGroup>
            <Heading as="h3" fontSize="1.5rem">
              Category
            </Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeCategory}
              defaultValue={this.props.categoryFilter}
            >
              {this.props.fund_category.map(category => (
                <Checkbox key={category} value={category}>
                  {category}
                </Checkbox>
              ))}
            </CheckboxGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  }
}

const mapStateToProps = state => ({
  fund_category: state.funds.fund_category,
  fund_type: state.funds.fund_type,
  plan: state.funds.plan,
  categoryFilter: state.funds.filters.fund_category,
  typeFilter: state.funds.filters.fund_type,
  planFilter: state.funds.filters.plan,
  sortOrder: state.funds.sortOrder,
  sortKey: state.funds.sortKey
});
export default connect(mapStateToProps, { filteredFunds })(Filter);
