import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";

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


export async function loginUser(username, password) {
  try {
    const result = await axios.post('http://localhost:3000/users/login', {username, password});

    console.log(result.data)
    
    if (result.data) {
      await setData('token', result.data);
      return true;
    }

    return false;
    
  } catch (e) {
    console.log(e);
    return false;
  }
}

  export async function createLocalHunt(huntObj) {
    const currentHunts = await getData('hunts');
    const hunts = currentHunts ? currentHunts : {};
    const keys = Object.keys(hunts).map(e => parseInt(e));

    const _id = keys.length ? keys[keys.length - 1] + 1 : 1;
    const author = 'localAuthor';
    const group = [];

    const hunt = {_id, author, group, ...huntObj}

    hunts[_id] = hunt;

    await setData('hunts', hunts);
  }

  export async function deleteLocalHunt(id) {
    const currentHunts = await getData('hunts');

    delete currentHunts[id];

    await setData('hunts', currentHunts);
  }

  export async function updateLocalHunt(hunt) {
    const currentHunts = await getData('hunts');

    console.log(hunt)

    currentHunts[hunt._id] = hunt;

    await setData('hunts', currentHunts)
  }

  export function getHuntProgress(hunt) {

    const clues = hunt.clues;

    let total = 0;
    let complete = 0;

    for (let clue in clues) {
      total += 1;
      if (clues[clue].entry) {
        complete += 1;
      }
    }

    return Math.round(100 * complete / total);
  }