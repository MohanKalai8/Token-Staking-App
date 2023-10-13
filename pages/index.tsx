
import styles from "../styles/Home.module.css";
import Image from "next/image";
import type { NextPage } from "next";
import { Container, Heading, Flex, SimpleGrid } from "@chakra-ui/react";
import { useAddress } from "@thirdweb-dev/react";
import StakeToken from "../components/StakeToken";
import RewardToken from "../components/RewardToken";
import Stake from "../components/Stake";


const Home: NextPage = () => {
  const address = useAddress();

  if (!address) {
    return (
      <Container>
        <Heading maxW={"1200px"}>
          <Flex h={"50vh"} justifyContent={"center"} alignItems={"center"}>
            <Heading>Please connect your wallet</Heading>
          </Flex>
        </Heading>
      </Container>
    )
  }
  return (
    <Container maxW={"1200px"} >
      <Flex direction={"row"} justifyContent={"center"}>
        <SimpleGrid columns={2} spacing={4} >
          <StakeToken />
          <RewardToken />
          <Stake />
        </SimpleGrid>
      </Flex>

    </Container>
  );
};

export default Home;
