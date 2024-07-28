import { WorkoutInstruction } from "../outputs/workoutInstructionsSchema";

const pushUps: WorkoutInstruction[] = [
  {
    workoutId: "push-ups",
    level: 1,
    name: "Wall Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 10,
      },
      intermediate: {
        sets: 1,
        reps: 25,
      },
      advanced: {
        sets: 1,
        reps: 50,
      },
    },
    directions: {
      positive:
        "Stand facing a wall with your feet shoulder-width apart. Lean towards the wall until your nose almost touches it.",
      negative:
        "Push back to the starting position, making sure to keep your body in a straight line and your core engaged.",
    },

    video: "https://youtu.be/N5C9NUHZ20U",
  },
  {
    workoutId: "push-ups",
    level: 2,
    name: "Incline Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 10,
      },
      intermediate: {
        sets: 2,
        reps: 20,
      },
      advanced: {
        sets: 3,
        reps: 40,
      },
    },
    directions: {
      positive:
        "Place your hands on an elevated surface, such as a bench or step, with your body in a straight line from head to heels.",
      negative:
        "Lower your chest towards the elevated surface, then push back up to the starting position.",
    },

    video: "https://youtu.be/Gv8y_prZBZY",
  },
  {
    workoutId: "push-ups",
    level: 3,
    name: "Kneeling Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 10,
      },
      intermediate: {
        sets: 2,
        reps: 15,
      },
      advanced: {
        sets: 3,
        reps: 30,
      },
    },
    directions: {
      positive:
        "Start on your hands and knees, with your hands slightly wider than shoulder-width apart.",
      negative:
        "Lower your chest to the ground, then push back up to the starting position, keeping your core engaged and your body straight.",
    },

    video: "https://youtu.be/NyzxeqY6CR8",
  },
  {
    workoutId: "push-ups",
    level: 4,
    name: "Half Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 8,
      },
      intermediate: {
        sets: 2,
        reps: 12,
      },
      advanced: {
        sets: 2,
        reps: 25,
      },
    },
    directions: {
      positive:
        "Assume a push-up position with your hands slightly wider than shoulder-width apart and your body in a straight line.",
      negative:
        "Lower your body halfway down, then push back up to the starting position.",
    },

    video: "https://youtu.be/bGuUODcwnHA",
  },
  {
    workoutId: "push-ups",
    level: 5,
    name: "Full Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },

    directions: {
      positive:
        "Start in a plank position with your hands under your shoulders and your body in a straight line.",
      negative:
        "Lower your body until your chest nearly touches the ground, then push back up to the starting position. Keep your elbows at a 45-degree angle to your body.",
    },

    video: "https://youtu.be/1QJICN6udbs",
  },
  {
    workoutId: "push-ups",
    level: 6,
    name: "Close Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },

    directions: {
      positive:
        "Begin in a push-up position with your hands closer together, directly under your chest.",
      negative:
        "Lower your body, keeping your elbows close to your sides, then push back up to the starting position.",
    },

    video: "https://youtu.be/3-1vRVuWgBc",
  },
  {
    workoutId: "push-ups",
    level: 7,
    name: "Uneven Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },

    directions: {
      positive:
        "Place one hand on an elevated surface and the other hand on the floor. Assume a push-up position with your body in a straight line.",
      negative:
        "Lower your body until your chest nearly touches the ground, then push back up to the starting position. Switch hands after completing the set.",
    },
    video: "https://youtu.be/o1abTRdwpUs",
  },
  {
    workoutId: "push-ups",
    level: 8,
    name: "Half One Arm Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },

    directions: {
      positive:
        "Assume a push-up position with one arm behind your back and your other arm in a regular push-up position.",
      negative:
        "Lower your body halfway down, then push back up to the starting position. Keep your core engaged and your body straight.",
    },

    video: "https://youtu.be/63077t3I4Zc",
  },
  {
    workoutId: "push-ups",
    level: 9,
    name: "Levered Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },

    directions: {
      positive:
        "Start in a push-up position with one hand placed further forward than the other. Keep your body in a straight line.",
      negative:
        "Lower your body until your chest nearly touches the ground, then push back up to the starting position. Switch hand positions after completing the set.",
    },

    video: "https://youtu.be/Hwq5zdb-owA",
  },
  {
    workoutId: "push-ups",
    level: 10,
    name: "On Arm Push Up",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 10,
      },
      advanced: {
        sets: 2,
        reps: 100,
      },
    },
    directions: {
      positive:
        "Begin in a push-up position with one arm behind your back and the other arm in a regular push-up position.",
      negative:
        "Lower your body until your chest nearly touches the ground, then push back up to the starting position.",
    },

    video: "https://youtu.be/ReKZry7JQEQ",
  },
] as const;

export default pushUps;

export const pushUpOverview =
  "The push up is the ultimate upper body exercise. It generates strength, builds muscle, develops powerful tendons and trains the upper body pressing the muscles to work in coordination with the midsection, and lower body";
