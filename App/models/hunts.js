import axios from "axios";
import { setData, getData } from "../Methods";

// PUBLIC HUNT METHODS

// Server API
//const apiRoot = "https://lookout-sh.com/";

// Local API
const apiRoot = "http://localhost:3000/";

export async function getPublicHunts(searchTerm) {
  const user = await getData("user");
  const result = await axios.get(apiRoot + "hunts", {
    params: { JWT: user.token, search: searchTerm },
  });
  return result.data;
}

export async function publishHunt(localHunt) {
  const user = await getData("user");

  for (let clue in localHunt.clueList) {
    localHunt.clueList[clue].entry = "";
  }

  const publishedHunt = {
    author: localHunt.author,
    authorId: localHunt.authorId,
    title: localHunt.title,
    description: localHunt.description,
    clueList: localHunt.clueList,
    ratings: [],
    downloads: 0,
  };

  const result = await axios.post(
    apiRoot + "hunts",
    { hunt: publishedHunt },
    { params: { JWT: user.token } }
  );

  return result.data;
}


export async function unpublishHunt(publishedHuntId) {
  const user = await getData('user');

  console.log(user.token)
  
  const result = await axios.delete(
    apiRoot + 'hunts', 
    { params: {JWT: user.token, huntId: publishedHuntId}}
  );

  console.log(result)

  return true;
}

export async function downloadHunt(publishedHuntId) {
  const user = await getData("user");
  const currentHunts = (await getData("hunts")) || {};

  const result = await axios.get(apiRoot + "hunts/download", {
    params: { JWT: user.token, huntId: publishedHuntId },
  });
  const publishedHunt = result.data;

  const localHunt = {
    _id: publishedHunt._id,
    author: publishedHunt.author,
    authorId: publishedHunt.authorId,
    title: publishedHunt.title,
    description: publishedHunt.description,
    clueList: publishedHunt.clueList,
    group: [],
  };

  currentHunts[localHunt._id] = localHunt;

  await setData("hunts", currentHunts);

  return localHunt;
}

// LOCAL HUNT METHODS

export async function createLocalHunt(huntObj) {
  const user = await getData("user");
  const currentHunts = await getData("hunts");
  const hunts = currentHunts ? currentHunts : {};
  const keys = Object.keys(hunts).map((e) => parseInt(e));

  const _id = huntObj.title;
  const author = user.username;
  const authorId = user.id;
  const group = [];

  const hunt = { _id, authorId, author, group, ...huntObj };

  hunts[_id] = hunt;

  await setData("hunts", hunts);

  return hunt;
}

export async function deleteLocalHunt(id) {
  const currentHunts = await getData("hunts");

  delete currentHunts[id];

  await setData("hunts", currentHunts);
}

export async function updateLocalHunt(hunt) {
  const currentHunts = await getData("hunts");

  console.log(hunt);

  currentHunts[hunt._id] = hunt;

  await setData("hunts", currentHunts);
}

export function getHuntProgress(hunt) {
  const clues = hunt.clueList;

  let total = 0;
  let complete = 0;

  for (let clue in clues) {
    total += 1;
    if (clues[clue].entry) {
      complete += 1;
    }
  }

  return Math.round((100 * complete) / total);
}
