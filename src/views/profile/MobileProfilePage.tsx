import React, {useContext} from "react";

import {
  HStack,
  Text,
  Heading,
  Avatar,
  VStack,
  Link,
  Divider,
  Button,
  ButtonText,
  Switch,
  FormControl,
  FormControlLabelText,
} from "@gluestack-ui/themed";
import {ScrollView} from "react-native";
import LogoutAlertDialog from "../../components/LogoutAlertDialog";
import {useUser} from "../../context/UserContext";
import {ThemeContext} from "../../context/ThemeContext";
import {ColorMode} from "../../common/constants";

const MobileProfilePage = ({isActive}: any) => {
  const [openLogoutAlertDialog, setOpenLogoutAlertDialog] =
    React.useState(false);
  return (
    <ScrollView style={{display: isActive ? "flex" : "none"}}>
      <VStack px="$5" py="$4" space="lg" flex={1}>
        <Heading>Profile</Heading>
        <ProfileCard />
        <Divider />
        <SupportSection />
        <Divider />
        <LogoutButton
          openLogoutAlertDialog={openLogoutAlertDialog}
          setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        />
      </VStack>
      <LogoutAlertDialog
        setOpenLogoutAlertDialog={setOpenLogoutAlertDialog}
        openLogoutAlertDialog={openLogoutAlertDialog}
      />
    </ScrollView>
  );
};

const ProfileCard = () => {
  const {user} = useUser();

  if (!user) {
    return
  }

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <HStack space="md">
        <Avatar bg="$blue600">
          <Avatar.FallbackText>Henry Stan</Avatar.FallbackText>
          <Avatar.Image
            alt="Avatar"
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <VStack>
          <Text>{user.email}</Text>
          <Link>
            <Text color="$textLight500" size="sm">
              Level 1
            </Text>
          </Link>
        </VStack>
      </HStack>
    </HStack>
  );
};

const SupportSection = () => {
  const {colorMode, setColorMode} = useContext(ThemeContext);

  const toggleColorMode = () => {
    if (setColorMode) {
      setColorMode(colorMode === ColorMode.LIGHT_COLOR_MODE ? ColorMode.DARK_COLOR_MODE : ColorMode.LIGHT_COLOR_MODE);
    }
  }

  return (
    <VStack space="md">
      <Heading>Settings</Heading>
      <FormControl>
        <HStack space="sm" justifyContent="space-between">
          <FormControlLabelText>Dark Mode</FormControlLabelText>
          <Switch size="sm" value={colorMode !== ColorMode.LIGHT_COLOR_MODE} onChange={toggleColorMode} />
        </HStack>
      </FormControl>
    </VStack>
  );
};

const LogoutButton = ({setOpenLogoutAlertDialog}: any) => {
  return (
    <Button
      action="secondary"
      variant="outline"
      onPress={() => {
        setOpenLogoutAlertDialog(true);
      }}
    >
      <ButtonText>Logout</ButtonText>
    </Button>
  );
};

export default MobileProfilePage;
