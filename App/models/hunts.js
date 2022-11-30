import axios from "axios";
import { setData, getData } from "../Methods";

// PUBLIC HUNT METHODS

// Server API
const apiRoot = "https://lookout-sh.com/";

// Local API
// const apiRoot = "http://localhost:3000/";

export async function getPublicHunts(searchTerm) {
  const user = await getData("user");
  const result = await axios.get(apiRoot + "hunts", {
    params: { JWT: user.token, search: searchTerm },
  });
  return result.data;
}

export async function publishHunt(localHunt) {
  const user = await getData("user");

  const exists = await axios.get(apiRoot + "hunts", {
    params: { JWT: user.token, huntId: localHunt._id },
  });


  if (exists.data.length) {
    alert('Hunt is already published!\n\nPlease unpublish hunt and republish to replace.')
    return;
  }

  for (let clue in localHunt.clueList) {
    localHunt.clueList[clue].entry = "";
  }

  const publishedHunt = {
    author: localHunt.author,
    authorId: localHunt.authorId,
    title: localHunt.title,
    description: localHunt.description,
    clueList: localHunt.clueList,
    ratings: {},
    downloads: 0,
  };

  const result = await axios.post(
    apiRoot + "hunts",
    { hunt: publishedHunt },
    { params: { JWT: user.token } }
  );

  await deleteLocalHunt(localHunt._id);

  const currentHunts = await getUserHunts();


  currentHunts[result.data._id] = result.data;

  await setUserHunts(currentHunts);


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
  const currentHunts = (await getUserHunts()) || {};

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

  await setUserHunts(currentHunts);

  return localHunt;
}

export async function rateHunt(huntId, rating) {
  const user = await getData('user');

  rating.username = user.username;

  const result = await axios.post(
    apiRoot + 'hunts/rating', 
    {userId: user.id, huntId: huntId, rating: rating},
    { params: { JWT: user.token } }
  );

  return result.data;
}


export function getAvgRating(ratings) {
  let total = 0;
  let count = 0;

  for (let r in ratings) {
    total += ratings[r].rating;
    count++;
  }

  return count ? total/count : 0;
}

// LOCAL HUNT METHODS

export async function createLocalHunt(huntObj) {
  const user = await getData("user");
  const currentHunts = await getUserHunts();
  const hunts = currentHunts ? currentHunts : {};

  const _id = huntObj.title;
  const author = user.username;
  const authorId = user.id;
  const group = [];

  const hunt = { _id, authorId, author, group, ...huntObj };

  hunts[_id] = hunt;

  await setUserHunts(hunts);

  return hunt;
}

export async function deleteLocalHunt(id) {
  const currentHunts = await getUserHunts();

  delete currentHunts[id];

  await setUserHunts(currentHunts);
}

export async function updateLocalHunt(hunt) {
  const currentHunts = await getUserHunts();

  console.log(hunt);

  currentHunts[hunt._id] = hunt;

  await setUserHunts(currentHunts);
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


export async function setUserHunts(hunts) {
  const user = await getData('user');
  const localHunts = await setData(user.id + '_hunts', hunts);
}

export async function getUserHunts() {
  const user = await getData('user');
  const localHunts = await getData(user.id + '_hunts');
  return localHunts;
}