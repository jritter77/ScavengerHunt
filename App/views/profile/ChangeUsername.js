import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { useNavigation } from "@react-navigation/native";

import { CustomAlert } from "../../Methods";
import { updateUsername } from "../../models/users";
import { ScrollView } from "react-native-gesture-handler";

const ChangeUserName = ({ navigation }) => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const theme = React.useContext(ThemeContext);

  const handleSubmit = async () => {
    const result = await updateUsername(username, password);
    if (result) {
      navigation.navigate("Profile");
    } else {
      setFeedback("Incorrect Password");
    }
  }

  return (
    <ScrollView 
    style={theme.StandardStyles.scrollContainer}
    contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <TextInput
        onChangeText={setUserName}
        placeholder="UserName"
        placeholderTextColor={theme.inputTextColor}
        style={theme.StandardStyles.textInput}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={theme.inputTextColor}
        style={theme.StandardStyles.textInput}
        secureTextEntry
      />
      <Text style={{color: theme.feedbackNegColor}}>{feedback}</Text>
      <StandardButton
        title="Submit"
        onPress={() => CustomAlert(
          'Change Username',
          'Are you sure you would like to change your username?',
          handleSubmit
        )}
      />
    </ScrollView>
  );
};

export default ChangeUserName;
