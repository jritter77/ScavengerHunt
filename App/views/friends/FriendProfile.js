import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { Styles } from "../../Styles";

const FriendProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style = {styles.usernameText}>Bob</Text>
      <Text style = {styles.usernameText}>Hunts Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameText: {
    fontSize: 20,
    paddingTop: ' 15%'
  },
  


  container: {
    height: '100%',
    backgroundColor: '#FFFDD1',
    alignItems: 'center'
  }
})

export default FriendProfile;
