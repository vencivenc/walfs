import React from "react";
import {
  Box,
  Card,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  Heading,
  Text,
  Divider,
  Image,
  Button,
  ButtonText,
  HStack
} from "@gluestack-ui/themed";

const GameListItem = () => {
  return <Card p="$6" borderRadius="$lg" maxWidth={360} m="$3">
    <Box flexDirection="row">
      <VStack>
        <Heading size="md" fontFamily="$heading" mb="$1">
          Jane Doe
        </Heading>
        <Text size="sm" fontFamily="$heading">
          janedoe@sample.com
        </Text>
      </VStack>
    </Box>

      <HStack space="md">
        <Box w='$40' h="$20">
          <Button
            fontFamily="$heading"
            mr="$0"
            mb="$3"

          >
            <ButtonText size="sm">Host new game</ButtonText>
          </Button>
        </Box>

        <Box w="$30" h="$20">
          <Button
            fontFamily="$heading"
            mr="$0"
            mb="$3"
          >
            <ButtonText size="sm">Join another game</ButtonText>
          </Button>
        </Box>


      </HStack>

  </Card>
}

export default GameListItem;
