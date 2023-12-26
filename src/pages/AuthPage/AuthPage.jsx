import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
      >
        <Container maxW={"60%"} padding={0}>
          <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
            {/* left side of container */}
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/auth.png" h={650} alt="phone image" />
            </Box>
            {/* right side of container */}
            <VStack spacing={4} align={"stretch"}>
              <AuthForm />
              <Box textAlign={"center"}>Get the App.</Box>
              <Flex gap={5} justifyContent={"center"}>
                <Image src="/playstore.png" h={10} alt="playstore img" />
                <Image src="/microsoft.png" h={10} alt="microsoft img" />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AuthPage;
