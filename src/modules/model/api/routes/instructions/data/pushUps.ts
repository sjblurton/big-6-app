import { WorkoutInstructions } from "../outputs/workoutInstructionsSchema";

const pushUps: WorkoutInstructions = [
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
      positive: "",
      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",
      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
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
      positive: "",

      negative: "",
    },
    images: {
      positive: "Images.PushUps",
      negative: "Images.PushUps",
    },
    video: "https://youtu.be/ReKZry7JQEQ",
  },
] as const;

export default pushUps;
