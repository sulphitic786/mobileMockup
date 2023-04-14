import React from "react";
import { Box, } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import TransactionList from "../TransactionList";
import { Select } from "@chakra-ui/react/dist/chakra-ui-react.cjs";
import { SettingsIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/react";
import doubleArrow from "../../assets/doubleArrow.png"

const Main = () => {
  return (
    <Box
      d="flex"
      flexDir="column"
      // justifyContent="center"
      // alignItems="center"
      // gap="1em"
      //justifyContent="space-between"
      //bg="yellow.200"
      width="100%"
      pt={2}
    >

    <Box>
      <Select
        id="type"
        alignItems="left"
        textAlign="left"
        justifyContent="left"
        color="white"
        value="Type"
        width="30%"
        onChange={34}
        mt={5}
        // bg="purple"
        fontWeight="bold"
        cursor="pointer"
        border="none"
        focusBorderColor="white.500"
      >Edric JayeBB
        <option
          value="Income"
          cursor="pointer"
          style={{ background: "#462d81", color: "white" }}
        >
          Edric Jaye
        </option>
        <option
          value="logout"
          style={{ background: "#462d81", color: "white" }}
        >
          Logout
        </option>
      </Select>
    </Box>

    <Box 
      mt="2em"
      mb="5em"
      >
    <Text 
      p={0} 
      color="gray.100"
      size="lg"
      fontWeight="normal"
      >
      Available Balance
    </Text>
    <Heading
      //ref={main}
      textAlign="center"
      // padding={2}
      as="h6"
      size="lg"
      color="gray.100"
      // border="2px solid #A0AEC0"
      width="97%"
      mt={0}
    >
      $13,970.85
    </Heading>
    </Box>

      <Box width="100%" ><TransactionList /></Box>

      <Box
       d="flex"
       justifyContent="space-around"
       alignItems="center"
       width="100%"
       bg="#232234"
       py="3"
       mx="auto"
       >
        <Box cursor="pointer">
        <Icon fontSize={"25px"} color="gray.100" as={FaHome} />
        {/* <Icon as={TbSend} /> */}
          <Text
          size="lg"
          color="gray.100"
          >
          Home</Text>
        </Box>
       <Box className="centerHome"
        p="10px"
        cursor="pointer"
        borderRadius={"50%"}
        bg="#232234"
        style={{position:"relative", top:"-35px"}}
        >
        <Image src={doubleArrow} width={"40px"} height={"40px"} borderRadius="50%" alt='Dan Abramov' />       </Box>
       <Box cursor="pointer">
        <Icon color="#858897" fontSize={"25px"} as={SettingsIcon} />
        <Text
        size="lg"
        color="#858897"
        >
        Setting</Text>
       </Box>
      </Box>
      
    </Box>
  );
};

export default Main;


