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

  export async function createLocalHunt(huntObj) {
    const currentHunts = await getData('hunts');

    const hunts = currentHunts ? currentHunts : [];

    const _id = (currentHunts?.length) ? currentHunts[currentHunts.length-1]._id + 1 : 1;
    const author = 'localAuthor';
    const group = [];

    const hunt = {_id, author, group, ...huntObj}

    hunts.push(hunt);

    await setData('hunts', hunts);
  }

  export async function deleteLocalHunt(id) {
    const currentHunts = await getData('hunts');

    for (let i = 0; i < currentHunts.length; i++) {
      if (currentHunts[i]._id === id) {
        currentHunts.splice(i, 1);
        break;
      }
    }

    setData('hunts', currentHunts);
  }