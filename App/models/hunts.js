import axios from "axios";
import { setData, getData } from "../Methods";

// PUBLIC HUNT METHODS

// Server API
// const apiRoot = "https://lookout.jrive.space/";

// Local API
const apiRoot = "http://localhost:3000/";

// Get public hunts
export async function getPublicHunts(searchTerm, limit) {
  const user = await getData("user");
  const result = await axios.get(apiRoot + "hunts", {
    params: { JWT: user.token, search: searchTerm, limit },
  });
  return result.data;
}

// Publish Hunt
export async function publishHunt(localHunt) {
  const user = await getData("user");

  const exists = await axios.get(apiRoot + "hunts/exists", {
    params: { JWT: user.token, title: localHunt.title },
  });

  if (exists.data.length) {
    alert("Title already in use. Please choose a new title to publish.");
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

// Unpublish Hunt
export async function unpublishHunt(publishedHuntId) {
  const user = await getData("user");

  const result = await axios.delete(apiRoot + "hunts", {
    params: { JWT: user.token, huntId: publishedHuntId },
  });

  return true;
}

// Download Hunt
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

// Rate Hunt
export async function rateHunt(huntId, rating) {
  const user = await getData("user");

  rating.username = user.username;

  const result = await axios.post(
    apiRoot + "hunts/rating",
    { userId: user.id, huntId: huntId, rating: rating },
    { params: { JWT: user.token } }
  );

  return result.data;
}

// Get Average Rating
export function getAvgRating(ratings) {
  let total = 0;
  let count = 0;

  for (let r in ratings) {
    total += ratings[r].rating;
    count++;
  }

  return count ? total / count : 0;
}

// LOCAL HUNT METHODS

// Create Local Hunt
export async function createLocalHunt(huntObj) {
  const user = await getData("user");
  const currentHunts = await getUserHunts();
  const hunts = currentHunts ? currentHunts : {};

  for (let h in currentHunts) {
    if (currentHunts[h].title === huntObj.title) {
      alert("Hunt with title already exists. Please select a new title.");
      return;
    }
  }

  const _id = huntObj.title;
  const author = user.username;
  const authorId = user.id;
  const group = [];

  const hunt = { _id, authorId, author, group, ...huntObj };

  hunts[_id] = hunt;

  await setUserHunts(hunts);

  return hunt;
}

export async function editLocalHunt(editedHunt) {
  const currentHunts = await getUserHunts();

  for (let h in currentHunts) {
    console.log(currentHunts[h]._id, editedHunt._id);
    if (
      currentHunts[h]._id !== editedHunt._id &&
      currentHunts[h].title === editedHunt.title
    ) {
      alert("Hunt with title already exists. Please select a new title.");
      return;
    }
  }

  currentHunts[editedHunt._id] = editedHunt;

  await setUserHunts(currentHunts);

  return editedHunt;
}

// Delete Local Hunt
export async function deleteLocalHunt(id) {
  const currentHunts = await getUserHunts();

  delete currentHunts[id];

  await setUserHunts(currentHunts);
}

// Update Local Hunt
export async function updateLocalHunt(hunt) {
  const currentHunts = await getUserHunts();

  console.log(hunt);

  currentHunts[hunt._id] = hunt;

  await setUserHunts(currentHunts);
}

// get Hunt Progress
export function getHuntProgress(hunt) {
  const clues = hunt.clueList;

  let total = 0;
  let complete = 0;

  for (let clue in clues) {
    total += 1;
    if (
      (clues[clue].type === "checkbox" && clues[clue].entry) ||
      (clues[clue].type === "text" && clues[clue].entry === clues[clue].answer)
    ) {
      complete += 1;
    }
  }

  return Math.round((100 * complete) / total);
}

// Set User Hunt
export async function setUserHunts(hunts) {
  const user = await getData("user");
  const localHunts = await setData(user.id + "_hunts", hunts);
}

// Get User Hunts
export async function getUserHunts() {
  const user = await getData("user");
  const localHunts = await getData(user.id + "_hunts");
  return localHunts;
}
