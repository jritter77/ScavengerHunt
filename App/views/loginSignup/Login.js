import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";
import StandardButton from "../../components/StandardButton";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Styles, ThemeContext } from "../../Styles";
import { loginUser } from "../../models/users";
import { ToastContext } from "../../components/Toast";

// Login View
const Login = ({ setLoggedIn }) => {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [feedback, setFeedback] = React.useState("");

  const theme = useContext(ThemeContext);
  const setToast = useContext(ToastContext);

  // Submit Handler
  async function handleSubmit() {
    // Verify credentials are not blank or violate syntax
    if (!username || !password) {
      setFeedback("Please enter a username and password");
      return;
    } else {
      setFeedback("");
    }

    // Send credentials to server for verification
    const result = await loginUser(username, password);

    if (result) {
      setLoggedIn(true);
      setToast("Welcome " + username + "!");
    } else {
      setFeedback("Invalid Credentials");
    }
  }

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={{
        ...theme.StandardStyles.scrollContainerContent,
        minHeight: "100%",
        justifyContent: "center",
      }}
    >
      <TextInput
        onChangeText={setUsername}
        placeholder="Username"
        style={Styles.StandardStyles.textInput}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={Styles.StandardStyles.textInput}
      />
      <Text style={styles.feedback}>{feedback}</Text>
      <StandardButton
        title="Login"
        onPress={() => {
          handleSubmit();
        }}
      />
      <StandardButton
        title="SignUp"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  feedback: {
    fontSize: 20,
    color: "red",
    width: "70%",
  },
});

export default Login;
