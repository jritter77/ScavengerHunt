import axios from "axios";
import { setData, getData } from "../Methods";

// Server API
// const apiRoot = "https://lookout-sh.com/";

// Local API
const apiRoot = "http://localhost:3000/";

export async function createNewUser(username, password) {
  try {
    const result = await axios.post(apiRoot + "users", {username: username, password: password});
    if (result.data) {
      return true;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function loginUser(username, password) {
  try {
    const result = await axios.post(apiRoot + "users/login", {
      username,
      password,
    });


    if (result.data) {
      await setData("user", result.data);
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function updateUsername(newUsername, password) {
  console.log("");
  try {
    const user = await getData("user");
    const verify = await loginUser(user.username, password);

    if (verify) {
      const result = await axios.put(
        apiRoot + "users",
        { user: { _id: user.id }, attr: { username: newUsername } },
        { params: { JWT: user.token } }
      );
      await loginUser(newUsername, password);
      return true;
    }

    return false;
  } catch (e) {
    console.log(e);
    return false;
  }
}
