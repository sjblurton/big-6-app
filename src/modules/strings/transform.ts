import {
  levelArray,
  LevelPath,
} from "../model/api/routes/instructions-id-level/constants/levels";
import {
  WORKOUT_ID_LIST,
  WorkoutIds,
} from "../model/api/routes/shared/workoutIds";

export function toKebabCase(str: string) {
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export function toCapitalizedWords(name: string) {
  const cleanedName = name.replace(/[^a-zA-Z]+/g, " ");
  const words = cleanedName.match(/[a-zA-Z][a-zA-Z]*/g) || [];

  return words.map((word) => capitalize(word.toLowerCase())).join(" ");
}

export function pathLevelToNumber(level: LevelPath) {
  if (!levelArray.includes(level)) {
    throw new Error(`Invalid level: ${level}`);
  }
  return parseInt(level.split("-")[1], 10);
}

export function pathLevelToTitleString(level: LevelPath) {
  if (!levelArray.includes(level)) {
    throw new Error(`Invalid level: ${level}`);
  }
  return level.split("-").map(capitalize).join(" ");
}

export function workoutIdToTitleString(id: WorkoutIds) {
  if (!WORKOUT_ID_LIST.includes(id)) {
    throw new Error(`Invalid workout id: ${id}`);
  }
  return id.split("-").map(toCapitalizedWords).join(" ");
}
