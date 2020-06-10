import React, { Component } from 'react';
import { Flex } from "@chakra-ui/core";
import Sorting from "./sorting";
import Filter from "./filter";
class FilterAndSorting extends Component {
    state = {  }
    render() { 
        return ( <Flex 
            mx={["2%", "20%", "5.3%"]} justify="space-evenly">
            
            <Sorting/>
            <Filter/>
        </Flex> );
    }
}
 
export default FilterAndSorting;