import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { sendFriendRequest } from "../../models/friends";
import { getData } from "../../Methods";
import axios from "axios";

// const apiRoot = "https://lookout-sh.com/";

const apiRoot = "http://localhost:3000/";


const AddFriend = ({ navigation }) => {
  const [friend, setFriend] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const theme = React.useContext(ThemeContext);

  async function handleSubmit() {
    // Send username

    // Verify the username exists
    const user = await getData("user");

    if (user.username === friend) {
      console.log("Cannot send friend request to self!");
      setFeedback("Cannot send friend request to self!");
      return;
    }

    //  check if user exists
    const exists = await axios.get(apiRoot + "users", {
      params: { JWT: user.token, username: friend },
    });

    // If not notify user

    if (exists.data.length === 0) {
      console.log("Not found!");
      setFeedback("User not found...");
    }

    // Else send friend request
    else {
      const result = await sendFriendRequest(friend);
      setFeedback(result);
    }
  }
  return (
    <View style={theme.StandardStyles.page}>
      <TextInput
        style={theme.StandardStyles.textInput}
        placeholder="Friend Username"
        placeholderTextColor={theme.inputTextColor}
        onChangeText={setFriend}
      />
      <Text
        style={{
          ...styles.feedback,
          color:
            feedback === "Friend Request Sent!"
              ? theme.feedbackPosColor
              : theme.feedbackNegColor,
        }}
      >
        {feedback}
      </Text>
      <StandardButton title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  feedback: {
    fontSize: 20,
  },
});

export default AddFriend;
