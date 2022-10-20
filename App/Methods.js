import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export function CustomAlert(title, msg, confirmHandler) {
    return Alert.alert(title, msg, [
        {text: 'yes', onPress: confirmHandler},
        {text:'no'}
    ])
}

export async function setData(key, data) {
    try {
      const strData = JSON.stringify(data);
      await AsyncStorage.setItem(key, strData);
    } catch (e) {
      console.log(e);
    }
  }

export async function getData(key) {
    try {
      const result = await AsyncStorage.getItem(key);
      return JSON.parse(result);
    } catch (e) {
      console.log(e);
    }
  }