import React from "react";
import {
  AlertDialog,
  Text,
  Heading,
  Icon,
  Button,
  CloseIcon,
  AlertDialogBackdrop,
  AlertDialogContent,
  ButtonText,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@gluestack-ui/themed";
import {supabase} from "../common/superbase";

const LogoutAlertDialog = ({
                             openLogoutAlertDialog,
                             setOpenLogoutAlertDialog,
                           }: any) => {
  const logoutHandler = async () => {
    await supabase.auth.signOut()
    setOpenLogoutAlertDialog(false);
  };
  const handleClose = () => {
    setOpenLogoutAlertDialog(false);
  };

  return (
    <AlertDialog isOpen={openLogoutAlertDialog} onClose={handleClose}>
      <AlertDialogBackdrop />
      <AlertDialogContent>
        <AlertDialogHeader>
          <Heading>Logout</Heading>
          <AlertDialogCloseButton>
            <Icon as={CloseIcon} />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>
          <Text>Are you sure, you want to logout?</Text>
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            variant="outline"
            action="secondary"
            onPress={handleClose}
            mr="$3"
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button action="negative" onPress={logoutHandler}>
            <ButtonText>Logout</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutAlertDialog;
