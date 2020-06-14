import React, { Component } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
  Checkbox,
  CheckboxGroup,
  Text,
  Icon,
  PopoverCloseButton
} from "@chakra-ui/core";

import Select from 'react-select';

import { filteredFunds, resetFilter } from "../actions/mfActions";
import { connect } from "react-redux";
class Filter extends Component {
  checkboxChangeCategory = e => {

    let categoryFilter = [];
    if(e !== null){
    e.map(eachCategoryFilter=>categoryFilter.push(eachCategoryFilter.value))
    }
    this.props.filteredFunds(
      "fund_category",
      categoryFilter,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  checkboxChangeType = e => {
   
    let typeFilter = [];
    if(e !== null){
    e.map(eachTypeFilter=>typeFilter.push(eachTypeFilter.value))
    }
    this.props.filteredFunds(
      "fund_type",
      typeFilter,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  checkboxChangePlan = e => {

    let planFilter = [];
    if(e !== null){
    e.map(eachPlanFilter=>planFilter.push(eachPlanFilter.value))
    }
    this.props.filteredFunds(
      "plan",
      planFilter,
      this.props.sortKey,
      this.props.sortOrder
    );
  };
  render() {
    let typeFilterChoices = [];
     this.props.typeFilter.map(eachTypeFilter=>typeFilterChoices.push({label:eachTypeFilter,value:eachTypeFilter}))
     let typeFilterOptions = [];
     this.props.fund_type.map(eachTypeFilter=>typeFilterOptions.push({label:eachTypeFilter,value:eachTypeFilter}))
    
     let planFilterChoices = [];
     this.props.planFilter.map(eachPlanFilter=>planFilterChoices.push({label:eachPlanFilter,value:eachPlanFilter}))
     let planFilterOptions = [];
     this.props.plan.map(eachPlanFilter=>planFilterOptions.push({label:eachPlanFilter,value:eachPlanFilter}))
    
     let categoryFilterChoices = [];
     this.props.categoryFilter.map(eachCategoryFilter=>categoryFilterChoices.push({label:eachCategoryFilter,value:eachCategoryFilter}))
     let categoryFilterOptions = [];
     this.props.fund_category.map(eachCategoryFilter=>categoryFilterOptions.push({label:eachCategoryFilter,value:eachCategoryFilter}))
    

     return (
      <Popover>
        <PopoverTrigger>
          <Button w={["200px", "180px", "200px"]} mb="1rem">
            Filter
          </Button>
        </PopoverTrigger>
        <PopoverContent zIndex={4} w={["100%", "40%", "20%"]}>
          <PopoverCloseButton />
          <PopoverBody>
            <Button onClick={() => this.props.resetFilter()} variantColor="red">
              <Icon name="repeat" mr="5px"></Icon>Reset
            </Button>

            <Text
              fontWeight="600"
              color="hsl(0,0%,40%)"
              fontSize="1.2rem"
              my="10px"
            >
              Type
            </Text>
            <Select
             value={typeFilterChoices}
             onChange={this.checkboxChangeType}
             options={typeFilterOptions}
             isMulti
            />
            {/* <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeType}
              defaultValue={this.props.typeFilter}
            >
              {this.props.fund_type.map(type => (
                <Checkbox key={type} value={type}>
                  {type}
                </Checkbox>
              ))}
            </CheckboxGroup> */}

            <Text
              fontWeight="600"
              color="hsl(0,0%,40%)"
              fontSize="1.2rem"
              my="10px"
            >
              Plan
            </Text>
            <Select
             value={planFilterChoices}
             onChange={this.checkboxChangePlan}
             options={planFilterOptions}
             isMulti
            />
            {/* <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangePlan}
              defaultValue={this.props.planFilter}
            >
              {this.props.plan.map(plan => (
                <Checkbox key={plan} value={plan}>
                  {plan}
                </Checkbox>
              ))}
            </CheckboxGroup> */}
            <Text
              fontWeight="600"
              color="hsl(0,0%,40%)"
              fontSize="1.2rem"
              my="10px"
            >
              Category
            </Text>
            <Select
             value={categoryFilterChoices}
             onChange={this.checkboxChangeCategory}
             options={categoryFilterOptions}
             isMulti
            />
            {/* <CheckboxGroup
              variantColor="green"
              onChange={this.checkboxChangeCategory}
              defaultValue={this.props.categoryFilter}
            >
              {this.props.fund_category.map(category => (
                <Checkbox key={category} value={category}>
                  {category}
                </Checkbox>
              ))}
            </CheckboxGroup> */}
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
export default connect(mapStateToProps, { filteredFunds, resetFilter })(Filter);
