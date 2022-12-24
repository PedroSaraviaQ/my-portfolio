import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack m={1}>
      <VStack  m={1} color="white" borderRadius='md' overflow='hidden' bg="white" alignItems='baseline'>
        <Image  borderRadius='md' src={imageSrc} height = "60%" width = "100%"></Image>
        <Heading pl={2} textAlign={[ 'left', 'center' ]} size="md" color="black">{title}</Heading>
        <Text pl={2} s = "sm" color="black">{description}</Text>
        <Heading pl={2} pb={.5} size="sm" color="black">See More  <FontAwesomeIcon icon={faArrowRight}/></Heading>
      </VStack>
    </HStack>
  )
};

export default Card;
