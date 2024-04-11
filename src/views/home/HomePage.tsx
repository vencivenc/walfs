import React from "react";
import {
  Box,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";
import {ScrollView} from "react-native";

const homestayInfoData = [
  {
    title: "Wolfs",
    src: require("../../assets/display/image16.png"),
    location: "401 Platte River Rd, Gothenburg, United States",
    rating: 4.9,
  },
  {
    title: "The Resistance",
    src: require("../../assets/display/image17.png"),
    location: "1502 Silica Ave, Sacramento California",
    rating: 4.89,
  },
];

const HomePage = ({isActive}: any) => {
  return (
    <Box style={{display: isActive ? "flex" : "none"}}>
      <ScrollView>
        <Box>
          <Box pb="$8" px="$4" sx={{"@md": {px: 0}}}>
            <TabPanelData />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

const TabPanelData = () => {
  const [likes, setLikes]: any = React.useState([]);
  return (
    <VStack
      justifyContent="space-between"
      sx={{
        "@lg": {
          flexDirection: "row",
        },
      }}
    >
      {homestayInfoData.map((image: any, index: any) => {
        return (
          <Box
            flex={1}
            key={index}
            my="$2"
            sx={{
              "@lg": {
                ml: index === 0 ? "$0" : "$2",
                mr: index === homestayInfoData.length - 1 ? "$0" : "$2",
                my: "$0",
              },
            }}
          >
            <Pressable w="100%">
              <Box overflow="hidden" borderRadius="$md" h="$72">
                <Image
                  source={image.src}
                  h="$72"
                  w="100%"
                  alt="Explore"
                />
              </Box>
            </Pressable>
            <HStack
              justifyContent="space-between"
              py="$2"
              alignItems="flex-start"
            >
              <VStack space="$sm" flex={1}>
                <Text
                  fontWeight="$semibold"
                  color="$textLight900"
                  sx={{
                    _dark: {color: "$textDark200"},
                  }}
                >
                  {image.title}
                </Text>
                <Text
                  size="sm"
                  color="$textLight500"
                  sx={{
                    _dark: {color: "$textDark500"},
                  }}
                >
                  {image.location}
                </Text>
              </VStack>
              <Pressable>
                <HStack alignItems="center" justifyContent="flex-start">
                  <Icon
                    as={Star}
                    size={12}
                    fill="currentColor"
                    sx={{
                      _dark: {color: "$backgroundDark50"},
                      _light: {color: "black"},
                    }}
                  />
                  <Text
                    pl="$1"
                    size="sm"
                    sx={{
                      _light: {color: "$textLight900"},
                      _dark: {color: "$textDark200"},
                    }}
                  >
                    {image.rating}
                  </Text>
                </HStack>
              </Pressable>
            </HStack>
          </Box>
        );
      })}
    </VStack>
  );
};
export default HomePage;
