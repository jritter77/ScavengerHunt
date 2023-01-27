import axios from "axios";
import { setData, getData } from "../Methods";

// Server API
// const apiRoot = "https://lookout.jrive.space/";

// Local API
const apiRoot = "http://localhost:3000/";

// Create New User
export async function createNewUser(username, password) {
  try {
    const result = await axios.post(apiRoot + "users", {
      username: username,
      password: password,
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// Login User
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

// Get User
export async function getUser(username) {
  try {
    const user = await getData("user");
    const result = await axios.get(apiRoot + "users", {
      params: { JWT: user.token, username: username },
    });

    return result.data;
  } catch (e) {
    console.log(e);
  }
}

// Check user exists
export async function userExists(username) {
  const user = await getData("user");

  const exists = await axios.get(apiRoot + "users", {
    params: { JWT: user.token, username: username },
  });

  return exists.data.length !== 0;
}

// Update Username
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

// Update Password
export async function updatePassword(oldPassword, newPassword) {
  try {
    const user = await getData("user");
    const verify = await loginUser(user.username, oldPassword);
    if (verify) {
      const result = await axios.put(
        apiRoot + "users/changePassword",
        { user: { _id: user.id }, password: newPassword },
        { params: { JWT: user.token } }
      );
      await loginUser(user.username, newPassword);
      return true;
    }

    return "invalid password";
  } catch (e) {
    console.log(e);
    return false;
  }
}

// Get User Settings
export async function getUserSettings() {
  const user = await getData("user");

  let userSettings = await getData(user.id + "_settings");

  if (!userSettings) {
    userSettings = { theme: "default" };
    await setData(user.id + "_settings", userSettings);
  }

  return userSettings;
}
