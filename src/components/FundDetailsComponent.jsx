import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Heading, Icon, Box, Image, Flex, Text, Button } from "@chakra-ui/core";
class FundDetailsComponent extends Component {
  render() {
    const { fund } = this.props;
    console.log(fund);
    return (
      <React.Fragment>
        <Text
          pt="8px"
          textAlign="center"
          borderBottom="1px solid hsl(0,0%,92%)"
          color="#1f7ae0"
          fontSize="2rem"
        >
          Fund Details
        </Text>
        <Box mx="5%" mt="10px">
          <Link className="back" to={{ pathname: "/" }}>
            <Box
              w="fit-content"
              p="11px 30px 10px 21px"
              fontSize="14px"
              rounded="4px"
              border="1px solid #ccc"
              shadow="2px 2px hsl(0, 0%, 95%)"
              bg="hsl(0, 0%, 80%)"
            >
              {" "}
              <Icon
                name="arrow-back"
                style={{ marginRight: "5px" }}
              ></Icon>{" "}
              Back
            </Box>
          </Link>
        </Box>

        <Flex direction="column" mt="1rem" w={["100%", "80%", "80%"]} mx={["5%","8%"]}>
          <Flex wrap="wrap" justify="space-between">
            <Image
              w={["90%", "30%"]}
              src={require("../asset/fund.png")}
              alt="fund"
            />
            <Flex
              w={["90%", "60%"]}
              direction="column"
              justify="space-between"
              py="20px"
            >
              <Text fontWeight="600" fontSize="1.6rem" mb="10px">
                {fund.name}
              </Text>
              <Text
                wordBreak="break-word"
                mb="10px"
                fontWeight="600"
                fontSize="1rem"
                color="hsl(0,0%,40%)"
              >
                "{fund.investment_objective}"
              </Text>
              <Text
                wordBreak="break-word"
                fontWeight="600"
                mb="10px"
                fontSize="1rem"
              >
                Fund Manager : {fund.fund_manager}
              </Text>
            </Flex>
          </Flex>
          <Flex  className="detailsCard" w={["90%","100%"]}></Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default FundDetailsComponent;
