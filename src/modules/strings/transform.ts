import { LevelPath } from "../model/api/routes/instructions-id-level/constants/levels";
import { WorkoutIds } from "../model/api/routes/shared/workoutIds";

export function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export function toCapitalizedWords(name: string) {
  const words = name.match(/[A-Za-z][a-z]*/g) || [];

  return words.map(capitalize).join(" ");
}

export function pathLevelToNumber(level: LevelPath) {
  return parseInt(level.split("-")[1], 10);
}

export function pathLevelToTitleString(level: LevelPath) {
  return level.split("-").map(capitalize).join(" ");
}

export function workoutIdToTitleString(id: WorkoutIds) {
  return id.split("-").map(toCapitalizedWords).join(" ");
}
