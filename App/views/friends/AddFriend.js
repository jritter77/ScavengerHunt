import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { sendFriendRequest } from "../../models/friends";
import { getData } from "../../Methods";
import axios from "axios";

const apiRoot = "http://lookout-sh.com/";

const AddFriend = ({ navigation }) => {
  const [friend, setFriend] = React.useState("");
  const theme = React.useContext(ThemeContext);

  async function handleSubmit() {
    // Send username

    // Verify the username exists
    const user = await getData("user");

    //  check if user exists
    const exists = await axios.get(apiRoot + "users", {
      params: { JWT: user.token, username: friend },
    });

    console.log(exists.data);

    // If not notify user

    if (exists.data.length === 0) {
      console.log("Not found!");
    }

    // Else send friend request
    else {
      sendFriendRequest(friend);
    }
  }
  return (
    <View style={theme.StandardStyles.page}>
      <Text style={styles.Text}>Add Friend</Text>
      <TextInput
        style={theme.StandardStyles.textInput}
        placeholder="Friend Username"
      />
      <StandardButton title="Submit" />
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
  },
});

export default AddFriend;
