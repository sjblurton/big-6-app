interface InstructionImagesSet {
  positive: () => JSX.Element;
  negative: () => JSX.Element;
}

export type LevelKeys = `level${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10}`;

export type LevelInstructionImages = {
  [key in LevelKeys]: InstructionImagesSet;
};
