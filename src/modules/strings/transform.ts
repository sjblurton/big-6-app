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
