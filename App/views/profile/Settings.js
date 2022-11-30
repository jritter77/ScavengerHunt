import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles } from "../../Styles";
import StandardButton from "../../components/StandardButton";

const Settings = ({ navigation }) => {
  return (
    <View style={Styles.StandardStyles.page}>
      <Text style={styles.text}>Themes</Text>
      <Text style={styles.text}>Font Size</Text>
      <Text style={styles.text}>Data</Text>
      <StandardButton
        title='Delete Local Data'
        onPress={() => console.log('delete data')}
        
        />
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Settings;
