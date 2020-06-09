import React, { Component } from 'react';
import Fund from './FundHomepage';
import {Flex} from "@chakra-ui/core";
class Homepage extends Component {
    state = {funds:[]}
    componentDidMount(){
fetch("https://api.kuvera.in/api/v3/funds.json").then(res=>res.json()).then(funds=>this.setState({funds:funds.slice(0,100)}))
    }
    render() { 
        return ( <Flex mx={["2%","20%","5.3%"]} wrap="wrap" justify="space-between" mt="100px">
            {(this.state.funds.length !==0) && (this.state.funds.map(fund=><Fund fund={fund}/>))}
        </Flex>);
    }
}
 
export default Homepage;