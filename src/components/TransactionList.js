import React, { useContext } from "react";
import { BudgetContext } from "../context/budget-context";
import { Box, Text } from "@chakra-ui/layout";
import { Icon, Circle } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { FaRupeeSign } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { List, ListItem, IconButton } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import btc from "../assets/btc.png";
import usdt from "../assets/usdt.png";
import bnb from "../assets/bnb.png";
import usdc from "../assets/usdc.png";
import matic from "../assets/matic.png";
import { Image } from "@chakra-ui/react";

const TransactionList = () => {
  const { transactions, deleteTransaction, findTransaction } =
    useContext(BudgetContext);

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
        <Box 
        >
        <Icon color="gray.100" as={FaHistory} />
        {/* <Icon as={TbSend} /> */}
          <Text
          size="lg"
          color="gray.100"
          >
          Send</Text>
        </Box>
        <Text color="white" fontWeight={"light"} fontSize="40px">|</Text>
       <Box>
       <Icon color="gray.100" as={"FaHistory"} />
        <Text
        size="lg"
        color="gray.100"
        >
        Recieved</Text>
       </Box>
       <Text color="white" fontWeight={"light"} fontSize="40px">|</Text>
       <Box>
        <Icon color="gray.100" as={"FaHistory"} />
        <Text
        size="lg"
        color="gray.100"
        >
        History</Text>
       </Box>
      </Box>

      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
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
              bg={transaction.type === "Income" ? "green.500" : "red.500"}
              color="white"
              fontSize="xl"
            >
              {transaction.category=="BTC"?
              <Image src={btc} borderRadius="50%" alt='Dan Abramov' />
              : transaction.category=="USDT"?
              <Image src={usdt} borderRadius="50%" alt='Dan Abramov' />
              : transaction.category=="BNB"?
              <Image src={bnb} borderRadius="50%" alt='Dan Abramov' />
              : transaction.category=="USDC"?
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
            >
              <Box d="flex">
              <Text fontWeight="bold" color="#f1f1f1" fontSize="lg">
                {transaction.category}
              </Text>
              <Text fontWeight="bold" fontSize="sm" alignSelf="center" ms="2"
                color={transaction.percent<0? "#d74144": "#0e8c72"}
                >
                {transaction.percent}</Text>
              </Box>
              
              <Text alignItems="left" color="#858897" fontWeight="bold" fontSize="xs">
                {`$${transaction.amount}`}
              </Text>
            </Box>
          </Box>
          
          <Box>


          <Box
              d="flex"
              flexDir="column"
              gap="1.75px"
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
