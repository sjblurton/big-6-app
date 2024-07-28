import { WorkoutInstruction } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";

const bridges: WorkoutInstruction[] = [
  {
    workoutId: "bridges",
    level: 1,
    name: "Short Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 10,
      },
      intermediate: {
        sets: 2,
        reps: 25,
      },
      advanced: {
        sets: 3,
        reps: 50,
      },
    },
    directions: {
      positive:
        "The feet should be shoulder width apart or a little less depending upon your frame.",

      negative:
        "Your thighs, trunk and torso should form a straight line, with no sagging of the hips.",
    },

    video: "https://youtu.be/JQFddjAFWZw",
  },
  {
    workoutId: "bridges",
    level: 2,
    name: "Straight Bridges",
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
        "Your body will now form a right angle, with your trunk perpendicular to your legs.",

      negative:
        "push your hips upwards until your legs and torso form a straight line.",
    },

    video: "https://youtu.be/gkTVDJHHIZ0",
  },
  {
    workoutId: "bridges",
    level: 3,
    name: "Angled Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 8,
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
        "Angled bridges require an object which is about knee height or a little higher.",

      negative:
        "the arms don't need to be fully extended, the elbows will be bent.",
    },

    video: "https://youtu.be/o9yKAjvUQlM",
  },
  {
    workoutId: "bridges",
    level: 4,
    name: "Head Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 8,
      },
      intermediate: {
        sets: 2,
        reps: 15,
      },
      advanced: {
        sets: 2,
        reps: 25,
      },
    },
    directions: {
      positive: "The top of your skull very gently touches the floor",

      negative: "Hold the full bridge at the top.",
    },

    video: "https://youtu.be/BIq3sAZAekg",
  },
  {
    workoutId: "bridges",
    level: 5,
    name: "Half Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 8,
      },
      intermediate: {
        sets: 2,
        reps: 15,
      },
      advanced: {
        sets: 2,
        reps: 20,
      },
    },
    directions: {
      positive:
        "The feet should be shoulder width apart or a little closer, and the ball should be supporting the small of your back.",

      negative: "Keep going until your back is fully arced.",
    },

    video: "https://youtu.be/JXHnTtE9NSk",
  },
  {
    workoutId: "bridges",
    level: 6,
    name: "Full Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 6,
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
      positive:
        "Place the hands alongside the head, with the palms flat on the the floor and your fingers pointing towards yours toes.",

      negative:
        "Allow the head to tilt backwards between the arms, so that you can look at the wall behind you.",
    },

    video: "https://www.youtube.com/watch?v=qnU9LoO5Cyg",
  },
  {
    workoutId: "bridges",
    level: 7,
    name: "Wall Walking Bridges (Down)",
    progressions: {
      beginner: {
        sets: 1,
        reps: 3,
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
      positive:
        "Continue smoothly bending back until you can see the wall behind you.",

      negative:
        "Keep bending backwards as you walk down the wall with your hands. Until the hands are flat on the floor.",
    },

    video: "https://youtu.be/LD1h45ArqcY",
  },
  {
    workoutId: "bridges",
    level: 8,
    name: "Wall Walking Bridges (Up)",
    progressions: {
      beginner: {
        sets: 1,
        reps: 2,
      },
      intermediate: {
        sets: 2,
        reps: 4,
      },
      advanced: {
        sets: 2,
        reps: 8,
      },
    },

    directions: {
      positive:
        "Place one palm back on the wall, pushing through it. Continue walking up the wall until you are nearly straight.",

      negative:
        "Push gently away from the wall until you are standing totally clear from the it.",
    },

    video: "https://youtu.be/sc_hsEM7xnA",
  },
  {
    workoutId: "bridges",
    level: 9,
    name: "Closing Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 1,
      },
      intermediate: {
        sets: 2,
        reps: 3,
      },
      advanced: {
        sets: 2,
        reps: 6,
      },
    },
    directions: {
      positive:
        "Place your hands on your hips and begin pushing your pelvis forward. As soon as you see the floor, take your hands off your hips.",

      negative:
        "Extend your arms as you keep the movement going, until your palms are resting on the floor.",
    },

    video: "https://youtu.be/tGv50Whxouk",
  },
  {
    workoutId: "bridges",
    level: 10,
    name: "Stand to Stand Bridges",
    progressions: {
      beginner: {
        sets: 1,
        reps: 1,
      },
      intermediate: {
        sets: 2,
        reps: 3,
      },
      advanced: {
        sets: 3,
        reps: 30,
      },
    },
    directions: {
      positive:
        "Perform a closing bridge (step 9) into a full bridge hold. Press through the hands and finally the fingers, lifting the palms off the floor.",

      negative:
        "Finally, pull the hips in until you are standing straight with hands by your sides.",
    },
    video: "https://www.youtube.com/watch?v=wZnixqvk-24",
  },
] as const;

export default bridges;

export const bridgesOverview =
  "To pick the one most important strength building exercise in the world, the Bridge would be it. It will stop you having back problems as you get older, and improve your performance in any strength training you choice to do.";
