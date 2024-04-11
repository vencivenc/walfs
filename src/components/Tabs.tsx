import React from "react";
import {HStack, Icon, Pressable, Text, VStack} from "@gluestack-ui/themed";

const Tabs = ({bottomTabs, activeTab, setActiveTab}: any) => {
  return (
    <>
      <HStack
        alignContent="center"
        position="absolute"
        bottom={0}
        justifyContent="space-between"
        w="100%"
        py="$3"
        px="$6"
        sx={{
          "@md": {display: "none"},
        }}
      >
        {bottomTabs.map((tab: any) => {
          return (
            <Pressable
              key={tab.label}
              onPress={() => {
                setActiveTab(tab.label);
              }}
              disabled={tab.disabled}
              opacity={tab.disabled ? 0.5 : 1}
            >
              <VStack alignItems="center">
                <Icon
                  as={tab.icon}
                  color={
                    activeTab === tab.label ? "$primary500" : "$textLight400"
                  }
                  size="sm"
                />
                <Text
                  size="xs"
                  color={
                    activeTab === tab.label ? "$textLight900" : "$textLight400"
                  }
                  sx={{
                    _dark: {
                      color:
                        activeTab === tab.label
                          ? "$textDark100"
                          : "$textLight400",
                    },
                  }}
                >
                  {tab.label}
                </Text>
              </VStack>
            </Pressable>
          );
        })}
      </HStack>
    </>
  );
};

export default Tabs;
