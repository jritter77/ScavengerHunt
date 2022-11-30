import axios from "axios";
import { getData } from "../Methods";

// Server API
const apiRoot = "https://lookout-sh.com/";

// Local API
// const apiRoot = "http://localhost:3000/";

export async function sendFriendRequest(friendName) {
  try {
    const user = await getData("user");

    const result = await axios.post(
      apiRoot + "friends",
      { user: user.username, reciever: friendName },
      { params: { JWT: user.token } }
    );

    console.log(result.data);
  } catch (e) {
    console.log(e);
    return false;
  }
}

// get friend requests
export async function getFriendReq() {
  try {
    const user = await getData("user");
    const result = await axios.get(
      apiRoot + "friends",
      { params: { JWT: user.token } });
    console.log(result.data);
  } catch (e) {
    console.log(e)
    return false
  }
}


// accept friend request