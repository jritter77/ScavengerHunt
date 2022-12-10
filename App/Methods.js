import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";

// Cutom alert function
export function CustomAlert(title, msg, confirmHandler) {
  return Alert.alert(title, msg, [
    { text: "yes", onPress: confirmHandler },
    { text: "no" },
  ]);
}

// set local data function
export async function setData(key, data) {
  try {
    const strData = JSON.stringify(data);
    await AsyncStorage.setItem(key, strData);
  } catch (e) {
    console.log(e);
  }
}

// get local data function
export async function getData(key) {
  try {
    const result = await AsyncStorage.getItem(key);
    return JSON.parse(result);
  } catch (e) {
    console.log(e);
  }
}

// remove local data function
export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
