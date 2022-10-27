import axios from "axios";
import { setData, getData } from "../Methods";

// PUBLIC HUNT METHODS

export async function getPublicHunts() {
    const user = await getData('user');
    const result = await axios.get('http://localhost:3000/hunts', {params: {JWT: user.token}});
    return result.data;
}


// LOCAL HUNT METHODS

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

    await setData('hunts', currentHunts);
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