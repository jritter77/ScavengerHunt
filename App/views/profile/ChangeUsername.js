import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { useNavigation } from "@react-navigation/native";

import { CustomAlert } from "../../Methods";
import { updateUsername } from "../../models/users";

const ChangeUserName = ({ navigation }) => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const theme = React.useContext(ThemeContext);

  return (
    <View style={theme.StandardStyles.page}>
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
        onPress={async () => {
          if (await updateUsername(username, password)) {
            navigation.navigate("Profile");
          } else {
            setFeedback("Incorrect Password");
          }
        }}
      />
    </View>
  );
};

export default ChangeUserName;
