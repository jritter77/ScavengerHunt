import axios from "axios";
import { getData } from "../Methods";

// Server API
const apiRoot = "https://lookout-sh.com/";

// Local API
// const apiRoot = "http://localhost:3000/";

// Send friend request
export async function sendFriendRequest(friendName) {
  try {
    const user = await getData("user");

    const result = await axios.post(
      apiRoot + "friends",
      { user: { username: user.username }, receiver: { username: friendName } },
      { params: { JWT: user.token } }
    );

    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// get friend requests
export async function getFriends() {
  try {
    const user = await getData("user");
    const result = await axios.get(apiRoot + "friends", {
      params: { JWT: user.token },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    return false;
  }
}

// accept friend request
export async function acceptFriendRequest(request) {
  try {
    const user = await getData("user");
    const result = await axios.put(
      apiRoot + "friends/accept",
      { request },
      { params: { JWT: user.token } }
    );
    console.log(result.data);
  } catch (e) {
    console.log(e);
  }
}
