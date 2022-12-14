import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { getData } from "../Methods";

// Custom Drawer Navigation Component
const CustomDrawer = (props) => {
  const [username, setUsername] = React.useState("");

  // Effect Hook to fetch user object from local storage
  React.useEffect(() => {
    const getUser = async () => {
      const user = await getData("user");
      setUsername(user.username);
    };

    getUser();
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={username}
        style={{ borderBottomWidth: 2 }}
        labelStyle={{ fontSize: 20, fontWeight: "bold" }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
