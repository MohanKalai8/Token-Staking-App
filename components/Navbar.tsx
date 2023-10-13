import { Container, Flex, Heading } from "@chakra-ui/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";


export default function Navbar() {
    return (
        <Container ml={50} maxW={"1200px"} py={4}>
            <Flex direction={"row"} justifyContent={"space-between"}>
                <Heading>Token Staking App</Heading>
                <ConnectWallet />
            </Flex>
        </Container>
    )
}