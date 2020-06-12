import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon, Box, Image, Flex, Text} from "@chakra-ui/core";
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

        <Flex
          direction="column"
          mt="1rem"
          w={["100%", "80%", "80%"]}
          mx={["5%", "8%"]}
        >
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
          <Flex
            className="detailsCard"
            w={["90%", "100%"]}
            wrap="wrap"
            px="5%"
            py="20px"
            mt="2rem"
          >
            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Type
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.fund_type}
              </Text>
            </Box>
            
            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Category
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.fund_category}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Plan
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.plan}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Min Lump
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.lump_min}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Max Lump
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.lump_max}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Min Sip
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.sip_min}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Max Sip
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.Sip_min}
              </Text>
            </Box>

            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                1Y Returns
              </Text>
              <Text  color={
                  fund.returns.year_1 < 0
                    ? "hsl(0,100%,50%)"
                    : "hsl(120,100%,50%)"
                } fontSize="1.2rem" fontWeight="100">
                {fund.returns.year_1}
              </Text>
            </Box>
            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                3Y Returns
              </Text>
              <Text  color={
                  fund.returns.year_1 < 0
                    ? "hsl(0,100%,50%)"
                    : "hsl(120,100%,50%)"
                } fontSize="1.2rem" fontWeight="100">
                {fund.returns.year_3}
              </Text>
            </Box>
            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                5Y Returns
              </Text>
              <Text  color={
                  fund.returns.year_1 < 0
                    ? "hsl(0,100%,50%)"
                    : "hsl(120,100%,50%)"
                } fontSize="1.2rem" fontWeight="100">
                {fund.returns.year_5}
              </Text>
            </Box>
 
            <Box minW="30%" mb="1.5rem" mr="1rem">
              <Text fontSize="1rem" fontWeight="300" color="#1f7ae0">
                Fund House
              </Text>
              <Text color="hsl(0,0%,40%)" fontSize="1.2rem" fontWeight="100">
                {fund.fund_house}
              </Text>
            </Box>
            <Box className="knowMore"
              w="fit-content"
              h="fit-content"
              p="5px 15px 5px 10px"
              fontSize="14px"
              rounded="4px"
              border="1px solid #ccc"
              shadow="2px 2px hsl(0, 0%, 95%)"
              bg="	#ADD8E6"
            ><a href={fund.detail_info}>Know More <Icon name="arrow-forward"></Icon></a></Box>
          </Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default FundDetailsComponent;
