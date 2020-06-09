import React, { Component } from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/core";
class FundHomepage extends Component {
  render() {
    const { fund } = this.props;
    return (
      <Box
        className="fund"
        w={["98%", "100%", "48%"]}
        minH="200px"
        borderBottom="1px offset black"
      >
        <Flex className="fundWrap" direction="column">
          <Heading as="h3" size="1rem" marginBottom="1rem">
            {fund.name}
          </Heading>
          <Flex wrap="wrap">
            <Box minW="30%" mb="2rem" mr="0.5rem">
              <Text fontSize="1rem" fontWeight="300" color="hsl(0,0%,40%)">
                Type
              </Text>
              <Text fontSize="1.5rem" fontWeight="600">
                {fund.fund_type}
              </Text>
            </Box>
            <Box minW="30%" mb="2rem" mr="0.5rem">
              <Text fontSize="1rem" fontWeight="300" color="hsl(0,0%,40%)">
                Plan
              </Text>
              <Text fontSize="1.5rem" fontWeight="600">
                {fund.plan}
              </Text>
            </Box>
            <Box minW="30%" mb="2rem" mr="0.5rem">
              <Text fontSize="1rem" fontWeight="300" color="hsl(0,0%,40%)">
                Year 1
              </Text>
              <Text
                fontSize="1.5rem"
                fontWeight="600"
                color={
                  fund.returns.year_1 < 0 ? "hsl(0,100%,50%)" : "(120,100%,50%)"
                }
              >
                {fund.returns.year_1}
              </Text>
            </Box>
            <Box minW="30%" mb="2rem" mr="0.5rem">
              <Text fontSize="1rem" fontWeight="300" color="hsl(0,0%,40%)">
                Year 3
              </Text>
              <Text
                fontSize="1.5rem"
                fontWeight="600"
                color={
                  fund.returns.year_3 < 0
                    ? "hsl(0,100%,50%)"
                    : "hsl(120,100%,50%)"
                }
              >
                {fund.returns.year_3}
              </Text>
            </Box>
            <Box minW="30%" mb="2rem" mr="0.5rem">
              <Text fontSize="1rem" fontWeight="300" color="hsl(0,0%,40%)">
                Category
              </Text>
              <Text fontSize="1.5rem" fontWeight="600">
                {fund.fund_category}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export default FundHomepage;
