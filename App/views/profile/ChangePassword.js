import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { useNavigation } from "@react-navigation/native";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const theme = React.useContext(ThemeContext);

  return (
    <View style={theme.StandardStyles.page}>
      <Text>ChangePassword</Text>
      <TextInput
        onChangeText={setOldPassword}
        placeholder="Old Password"
        style={theme.StandardStyles.textInput}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        style={theme.StandardStyles.textInput}
      />
      <TextInput
        onChangeText={setPasswordConfirm}
        placeholder="Confirm Password"
        style={theme.StandardStyles.textInput}
      />
      <StandardButton
        title="Submit"
        onPress={() => {
          navigation.navigate("ChangeCredentials");
        }}
      />
    </View>
  );
};

export default ChangePassword;
