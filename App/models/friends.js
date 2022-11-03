import axios from "axios";
import { getData } from "../Methods";

const apiRoot = "http://localhost:3000/";

export async function sendFriendRequest(frienedName) {
  try {
    const user = await getData("user");

    //  check if user exists
    const exists = await axios.get(apiRoot + "users", {
      params: { JWT: user.token, username: frienedName },
    });

    console.log(exists.data);

    // if so send friend request
    // const result = await axios.post(
    //   apiRoot + "friends",
    //   { user: user.username, reciever: frine },
    //   { params: { JWT: user.token } }
    // );

    // if not tell user
  } catch (e) {
    console.log(e);
    return false;
  }
}
