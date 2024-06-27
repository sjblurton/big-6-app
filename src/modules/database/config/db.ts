import {getFirestore} from "firebase/firestore";

import firebaseApp from "./config";

export const firestoreDb = getFirestore(firebaseApp);

export const COLLECTION_NAMES = {
  PULL_UPS: "pull-ups",
  PUSH_UPS: "push-ups",
  SQUATS: "squats",
  LEG_RAISES: "leg-raises",
  HANDSTANDS: "handstands",
  BRIDGES: "bridges",
  ERRORS_500: "errors-500",
} as const;

export const WORKOUT_COLLECTIONS = [
  COLLECTION_NAMES.PULL_UPS,
  COLLECTION_NAMES.PUSH_UPS,
  COLLECTION_NAMES.SQUATS,
  COLLECTION_NAMES.LEG_RAISES,
  COLLECTION_NAMES.HANDSTANDS,
  COLLECTION_NAMES.BRIDGES,
] as const;

export {
  Timestamp,
  FieldValue,
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  where,
  query,
  limit,
  orderBy,
  getDocs,
  getDocsFromServer,
  startAt,
  setDoc,
  doc,
} from "firebase/firestore";

export type {Firestore} from "firebase/firestore";
