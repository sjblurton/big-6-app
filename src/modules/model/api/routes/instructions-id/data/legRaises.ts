import { WorkoutInstruction } from "../outputs/workoutInstructionsSchema"

const legRaises: WorkoutInstruction[] = [
    {
        workoutId: "leg-raises",
        level: 1,
        name: "Knee Tucks",
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
                reps: 40,
            },
        },
        directions: {
            positive:
                "Lean back a little, grip the edge of the seat with your hands, and straighten your legs.",

            negative:
                "By the time the motion is complete, you should have exhaled fully.",
        },

        video: "https://youtu.be/N8k-SeCkR0s",
    },
    {
        workoutId: "leg-raises",
        level: 2,
        name: "Flat Knee Raises",
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
                reps: 35,
            },
        },
        directions: {
            positive:
                "Bend your knees so that they are at approximately ninety degrees.",

            negative:
                "Keep the knees at a right angle throughout and exhale as you go.",
        },

        video: "https://youtu.be/98ragSP4gC8",
    },
    {
        workoutId: "leg-raises",
        level: 3,
        name: "Flat Bent Leg Raises",
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
                "Raise your legs, bending them at the knees approximately forty-five degrees from the straight aliment.",

            negative:
                "As you move, the angle of the knee should not change: it must remain 'Locked' iin the same position.",
        },

        video: "https://youtu.be/qq69_MifXAc",
    },
    {
        workoutId: "leg-raises",
        level: 4,
        name: "Flat Frog Raises",
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
            positive: "Straighten your legs out fully.",

            negative:
                "Lower your legs, keeping them perfectly straight until they are just off the floor.",
        },

        video: "https://youtu.be/esoUyks3PZM",
    },
    {
        workoutId: "leg-raises",
        level: 5,
        name: "Flat Straight Leg Raises",
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
                "Pressing down with the hands will help you keep your torso stable.",

            negative:
                "Keeping your legs locked, raise your feet until they are directly above your pelvis.",
        },

        video: "https://youtu.be/hav89ezKkPA",
    },
    {
        workoutId: "leg-raises",
        level: 6,
        name: "Hanging Knee Raises",
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
            positive:
                "Your body should be in a straight line, and you must keep your shoulders 'tight'.",

            negative:
                "Bring your knees up smoothly until they are level with your pelvis, and your knees are at a right angle.",
        },

        video: "https://youtu.be/t2MU4Q4V3Xk",
    },
    {
        workoutId: "leg-raises",
        level: 7,
        name: "Hanging Bent Leg Raises",
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
            positive:
                "Bend at the knees until your knee joints are angled off straight by around forty-five degrees.",

            negative:
                "Only move at the hips: keep your knees angle 'locked' into place.",
        },

        video: "https://youtu.be/CtFMjDbU0P4",
    },
    {
        workoutId: "leg-raises",
        level: 8,
        name: "Hanging Frog Raises",
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
            positive: "Extend your feet out in a line directly away from you",

            negative:
                "lower your legs, until fully extended keeping them locked straight.",
        },

        video: "https://youtu.be/GsZGSxGhcWk",
    },
    {
        workoutId: "leg-raises",
        level: 9,
        name: "Partial Straight Leg Raises",
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
            positive:
                "Lift the locked legs until they are at a forty-five degrees angle, and hold.",

            negative:
                "Smoothly raise your legs until they are parallel with the floor.",
        },

        video: "https://youtu.be/y4cCwSpScPo",
    },
    {
        workoutId: "leg-raises",
        level: 10,
        name: "Hanging Straight LegRaises",
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
                reps: 30,
            },
        },
        directions: {
            positive: "Remain flexed, even in the start position.",

            negative:
                "Exhale as your legs raise, blowing all the air you can out of your lungs so that the abdomen is fully contracted.",
        },

        video: "https://youtu.be/7jI6fDNY_yM",
    },
] as const

export default legRaises

export const legRaisesOverview =
    "The hanging leg raise done slowly and with perfectly straight legs is beyond most people, even very agile athletes. But not to worry we will build the on it slowly over many, weeks, months, and years with progressive callisthenics."
