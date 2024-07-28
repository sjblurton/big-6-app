import { WorkoutInstruction } from "../outputs/workoutInstructionsSchema";

const handstands: WorkoutInstruction[] = [
  {
    workoutId: "handstands",
    level: 1,
    name: "Wall Headstand",
    progressions: {
      beginner: {
        sets: 1,
        reps: 30,
      },
      intermediate: {
        sets: 1,
        reps: 60,
      },
      advanced: {
        sets: 1,
        reps: 120,
      },
    },
    directions: {
      positive:
        "Place your head and hands on the floor near a wall, forming a triangle.",
      negative:
        "Kick up into a headstand, using the wall for balance. Hold the position, keeping your body straight.",
    },

    video: "https://youtu.be/tYX-9RQyiJA",
  },
  {
    workoutId: "handstands",
    level: 2,
    name: "Crow Stand",
    progressions: {
      beginner: {
        sets: 1,
        reps: 10,
      },
      intermediate: {
        sets: 1,
        reps: 30,
      },
      advanced: {
        sets: 1,
        reps: 60,
      },
    },
    directions: {
      positive: "Squat down, placing your hands on the floor in front of you.",
      negative:
        "Lean forward, balancing your knees on your elbows. Lift your feet off the ground, holding the position.",
    },

    video: "https://youtu.be/oLGMF0yilWQ",
  },
  {
    workoutId: "handstands",
    level: 3,
    name: "Wall Handstand",
    progressions: {
      beginner: {
        sets: 1,
        reps: 30,
      },
      intermediate: {
        sets: 1,
        reps: 60,
      },
      advanced: {
        sets: 1,
        reps: 120,
      },
    },
    directions: {
      positive:
        "Place your hands on the floor near a wall, shoulder-width apart.",
      negative:
        "Kick up into a handstand, using the wall for support. Keep your body straight and engage your core.",
    },

    video: "https://youtu.be/gI4vnrDAxEQ",
  },
  {
    workoutId: "handstands",
    level: 4,
    name: "Half Handstand Push Ups",
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
      positive: "Perform a wall handstand.",
      negative: "Lower your head halfway to the ground, then push back up.",
    },

    video: "https://youtu.be/a9WJRuue0YA",
  },
  {
    workoutId: "handstands",
    level: 5,
    name: "Handstand Push Ups",
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
        reps: 15,
      },
    },
    directions: {
      positive: "Perform a wall handstand.",
      negative: "Lower your head to the ground, then push back up.",
    },

    video: "https://youtu.be/S27I9QGHtzo",
  },
  {
    workoutId: "handstands",
    level: 6,
    name: "Close Handstand",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 9,
      },
      advanced: {
        sets: 2,
        reps: 12,
      },
    },
    directions: {
      positive: "Perform a wall handstand with hands closer together.",
      negative: "Lower your head to the ground, then push back up.",
    },

    video: "https://youtu.be/vWv3P2-zvRQ",
  },
  {
    workoutId: "handstands",
    level: 7,
    name: "Uneven Handstand Push Ups",
    progressions: {
      beginner: {
        sets: 1,
        reps: 5,
      },
      intermediate: {
        sets: 2,
        reps: 8,
      },
      advanced: {
        sets: 2,
        reps: 10,
      },
    },
    directions: {
      positive: "Perform a wall handstand with one hand elevated.",
      negative: "Lower your head to the ground, then push back up.",
    },

    video: "https://youtu.be/bzuf-4law2k",
  },
  {
    workoutId: "handstands",
    level: 8,
    name: "Half One Arm Handstand Push Ups",
    progressions: {
      beginner: {
        sets: 1,
        reps: 4,
      },
      intermediate: {
        sets: 2,
        reps: 6,
      },
      advanced: {
        sets: 2,
        reps: 8,
      },
    },

    directions: {
      positive: "Perform a wall handstand with one arm behind your back.",
      negative: "Lower halfway to the ground, then push back up.",
    },

    video: "",
  },
  {
    workoutId: "handstands",
    level: 9,
    name: "Levered Handstand Push Ups",
    progressions: {
      beginner: {
        sets: 1,
        reps: 3,
      },
      intermediate: {
        sets: 2,
        reps: 4,
      },
      advanced: {
        sets: 2,
        reps: 6,
      },
    },

    directions: {
      positive: "Perform a wall handstand with one hand further forward.",
      negative: "Lower your head to the ground, then push back up.",
    },

    video: "https://youtu.be/3IJMlCWovF8",
  },
  {
    workoutId: "handstands",
    level: 10,
    name: "One Arm Handstand Push Ups",
    progressions: {
      beginner: {
        sets: 1,
        reps: 1,
      },
      intermediate: {
        sets: 2,
        reps: 2,
      },
      advanced: {
        sets: 1,
        reps: 5,
      },
    },
    directions: {
      positive: "Perform a wall handstand with one arm behind your back.",
      negative: "Lower your head to the ground, then push back up.",
    },

    video: "https://youtu.be/hYnmRO37SRQ",
  },
] as const;

export default handstands;

export const handstandOverview =
  "Starting from a headstand all the way to the one arm handstand push up, there’s 10 levels of progression, the ultimate so of strength. I’m not sure how many of you will make it to the one arm handstand push up, but it will take years of work. Enjoy the journey.";
