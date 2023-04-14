import React, { useContext } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Icon, Circle, Heading } from "@chakra-ui/react";
import { List, ListItem, IconButton } from "@chakra-ui/react";
import { FaHistory } from "react-icons/fa";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import bnb from "../assets/bnb.png";
import usdc from "../assets/usdc.png";
import matic from "../assets/matic.png";
import send from "../assets/send.png";
import qrcode from "../assets/qrcode.png";
import { Image } from "@chakra-ui/react";

const TransactionList = () => {

    const cehnnalList = [
      {
        amount: 500,
        category: "BTC",
        type: "Income",
        date: "2022-01-26",
        percent: -0.02,
        id: "44c68123-5b86-4cc8-b915-bb9e16cebe6a",
      },
      {
        amount: 250,
        category: "USDT",
        type: "Expense",
        date: "2022-01-30",
        percent: 0.01,
        id: "c5647dde-d857-463d-8b4e-1c866cc5f83e",
      },
      {
        amount: 125,
        category: "BNB",
        type: "Income",
        date: "2022-01-26",
        percent: -0.02,
        id: "33b295b8-a8cb-49f0-8f0d-bb268686de1a",
      },
      {
        amount: 150,
        category: "USDC",
        type: "Income",
        date: "2022-01-23",
        percent: 0.01,
        id: "270304a8-b11d-4e16-9341-33df641ede64",
      },
     
      {
        amount: 120,
        category: "MATIC",
        type: "Expense",
        date: "2022-01-30",
        percent: -0.02,
        id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
      },
    
     
    ];

  return (
    <List
      d="flex"
      flexDir="column"
      // gap="0.8em"
      //py={1}
      p={3}
      alignItems="center"
      justifyContent="start"
      // maxH="20em"
      // overflow="auto"
      //bg="purple.500"
      width="100%"
      bg="#1e1a2b"
      // borderRadius="0.45em"
      borderTopRadius="0.9em"
      //border="1px solid black"
    >

      <Box
        className="midCard"
        d="flex"
        justifyContent="space-around"
        alignItems="center"
        width="90%"
        bg="#232234"
        py="3"
        mx="auto"
        borderRadius="1em"
        style={{position:"relative", marginTop: "-45px"}}
       >
        <Box cursor={"pointer"}
        >
        <Image mx={"auto"} width={"30px"} height="30px" src={send} />
          <Text
          size="lg"
          color="gray.100"
          >
          Send</Text>
        </Box>
        <Text color="white" fontWeight={"light"} fontSize="40px">|</Text>
       <Box cursor={"pointer"}>
       <Image mx={"auto"} width={"30px"} height="30px" src={qrcode} alt="qr_code" />
        <Text
        size="lg"
        color="gray.100"
        >
        Recieved</Text>
       </Box>
       <Text color="white" fontWeight={"light"} fontSize="40px">|</Text>
       
       <Box cursor={"pointer"}>
        <Icon fontSize={"25px"} color="gray.100" as={FaHistory} />
        <Text
        size="lg"
        color="gray.100"
        >
        History</Text>
       </Box>
      </Box>

      <Box
        d="flex"
        justifyContent="space-between"
        py={"1.2em"}
        px={3}
        width={"100%"}
        alignItems="center"
        >
        <Heading
          color="white"
          as={"h2"}
          size='lg'
          >
          Coin List
        </Heading>
        <Text _hover={{color:"green.200"}} cursor={"pointer"} fontWeight="normal" color="#f1f1f1" fontSize="md">
          + Import Token
        </Text>
      </Box>

      {cehnnalList.map((channal) => (
        <ListItem
          key={channal.id}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderRadius="0.4em"
          // border="1px solid black"
          // bg="yellow.300"
          bg="#1e1a2b"
          width="100%"
          p={1.5}
          cursor="pointer"
          _hover={{ background: "#232234" }}
        >
          <Box
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="6px"
          >
            <Circle
              size="50px"
              bg={channal.type === "Income" ? "green.500" : "red.500"}
              color="white"
              fontSize="xl"
            >
              {channal.category=="BTC"?
              <Image src={btc} borderRadius="50%" alt='Dan Abramov' />
              : channal.category=="USDT"?
              <Image src={usdt} borderRadius="50%" alt='Dan Abramov' />
              : channal.category=="BNB"?
              <Image src={bnb} borderRadius="50%" alt='Dan Abramov' />
              : channal.category=="USDC"?
              <Image src={usdc} borderRadius="50%" alt='Dan Abramov' />
              :
              <Image src={matic} borderRadius="50%" alt='Dan Abramov' />
              }
            </Circle>
            <Box
              d="flex"
              flexDir="column"
              alignItems="start"
              alignSelf="start"
              gap="1.75px"
              px={3}
            >
              <Box d="flex">
              <Text fontWeight="bold" color="#f1f1f1" fontSize="lg">
                {channal.category}
              </Text>
              <Text fontWeight="bold" fontSize="sm" alignSelf="center" ms="2"
                color={channal.percent<0? "#d74144": "#0e8c72"}
                >
                {channal.percent}</Text>
              </Box>
              
              <Text alignItems="left" color="#858897" fontWeight="bold" fontSize="xs">
                {`$${channal.amount}`}
              </Text>
            </Box>
          </Box>
          <Box>


          <Box
              d="flex"
              flexDir="column"
              gap="1.75px"
              px={3}
            >
              <Box d="flex">
              <Text fontWeight="bold" alignItems="left" fontSize="sm" color="#f1f1f1" alignSelf="center" ms="2">
                0
              </Text>
              </Box>
              
              <Text alignItems="left" color="#858897" fontWeight="bold" fontSize="xs">
                {`$0`}
              </Text>
            </Box>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;
