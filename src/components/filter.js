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

    this.props.filteredFunds("fund_category", e);
  };
  checkboxChangeType = e => {
    
    this.props.filteredFunds("fund_type", e);
  };
  checkboxChangePlan = e => {
    this.props.filteredFunds("plan", e);
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
          
            <Heading as="h3" fontSize="1.5rem">Type</Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeType}
            >
              {this.props.fund_type.map(type => (
                <Checkbox value={type}>{type}</Checkbox>
              ))}
            </CheckboxGroup>

            <Heading as="h3" fontSize="1.5rem">Plan</Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangePlan}
            >
              {this.props.plan.map(plan => (
                <Checkbox value={plan}>{plan}</Checkbox>
              ))}
            </CheckboxGroup>
            <Heading as="h3" fontSize="1.5rem">Category</Heading>
            <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeCategory}
            >
              {this.props.fund_category.map(category => (
                <Checkbox value={category}>{category}</Checkbox>
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
  plan: state.funds.plan
});
export default connect(mapStateToProps, { filteredFunds })(Filter);
