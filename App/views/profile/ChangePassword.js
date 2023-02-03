import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { Styles, ThemeContext } from "../../Styles";
import StandardButton from "../../components/StandardButton";
import { useNavigation } from "@react-navigation/native";
import { updatePassword } from "../../models/users";
import { ScrollView } from "react-native-gesture-handler";
import { CustomAlert } from "../../Methods";
import { ToastContext } from "../../components/Toast";

// Change password View
const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const theme = React.useContext(ThemeContext);
  const setToast = React.useContext(ToastContext);

  // Submit Handler
  async function verfiyInputs() {
    // verify and see if passwords match
    if (!oldPassword || !newPassword || !passwordConfirm) {
      setFeedback("Fields cannot be blank");
      return;
    }

    if (newPassword !== passwordConfirm) {
      setFeedback("New password does not match confirmation");
      return;
    }

    CustomAlert(
      "Change Password",
      "Are you sure you would like to change your password?",
      async () => {
        // send credentials to server for verification
        const result = await updatePassword(oldPassword, newPassword);
        if (result === true) {
          navigation.navigate("Profile");
          setToast("Password Changed");
        } else {
          setFeedback(result);
        }
      }
    );
  }

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <TextInput
        onChangeText={setOldPassword}
        placeholder="Old Password"
        placeholderTextColor={theme.inputTextColor}
        style={theme.StandardStyles.textInput}
        secureTextEntry
      />
      <TextInput
        onChangeText={setNewPassword}
        placeholder="Password"
        placeholderTextColor={theme.inputTextColor}
        style={theme.StandardStyles.textInput}
        secureTextEntry
      />
      <TextInput
        onChangeText={setPasswordConfirm}
        placeholder="Confirm Password"
        placeholderTextColor={theme.inputTextColor}
        style={theme.StandardStyles.textInput}
        secureTextEntry
      />
      <Text style={{ color: theme.feedbackNegColor }}>{feedback}</Text>
      <StandardButton title="Submit" onPress={verfiyInputs} />
    </ScrollView>
  );
};

export default ChangePassword;
