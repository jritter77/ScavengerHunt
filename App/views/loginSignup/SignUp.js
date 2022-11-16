import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles } from "../../Styles";
import { TextInput } from "react-native-gesture-handler";
import { createNewUser, loginUser } from "../../models/users";
import StandardButton from "../../components/StandardButton";

const SignUp = ({ setLoggedIn, navigation }) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [feedback, setFeedback] = React.useState('');

  const handleSubmit = async () => {

    if (!username) {
      setFeedback('Please enter a Username');
      return;
    }

    if (!password) {
      setFeedback('Please enter a password');
      return;
    }

    if (password !== confirmPass) {
      setFeedback('Passwords do not match');
      return;
    }

    if (await createNewUser(username, password)) {
      const result = await loginUser(username, password);
      if (result) {
        setLoggedIn(true);
      }
      else {
        setFeedback('Something went wrong...')
      }
    } else {
      setFeedback("Something went wrong...");
    }
  }

  return (
    <View style={Styles.StandardStyles.page}>
      <Text style={styles.formTitle}>Create New User</Text>
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
      <TextInput
        onChangeText={setConfirmPass}
        placeholder="Confirm Password"
        secureTextEntry
        style={Styles.StandardStyles.textInput}
      />
      <Text style={styles.feedback}>{feedback}</Text>
      <StandardButton
        title="Submit"
        onPress={handleSubmith}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formTitle: {
    fontSize: 20,
    width: '70%',
    fontWeight: 'bold'
  },
  feedback: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  }
})

export default SignUp;
