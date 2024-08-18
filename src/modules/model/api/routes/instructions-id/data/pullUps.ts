import { WorkoutInstruction } from "../outputs/workoutInstructionsSchema"

const pullUps: WorkoutInstruction[] = [
    {
        workoutId: "pull-ups",
        level: 1,
        name: "Vertical Pull up",
        progressions: {
            beginner: {
                sets: 1,
                reps: 10,
            },
            intermediate: {
                sets: 1,
                reps: 20,
            },
            advanced: {
                sets: 1,
                reps: 40,
            },
        },

        directions: {
            positive:
                "Stand close to the wall, tips of the toes should be 10cm to 20cm away.",

            negative: "slowly lower yourself until elbows are straight.",
        },

        video: "https://youtu.be/F8kIJMeqCMs",
    },
    {
        workoutId: "pull-ups",
        level: 2,
        name: "Horizontal Pull up",
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
                reps: 30,
            },
        },
        directions: {
            positive: "Keep your body tense, and locked straight.",

            negative: "Smoothly pull yourself up up to the bar.",
        },

        video: "https://youtu.be/YN0vvoqssfw",
    },
    {
        workoutId: "pull-ups",
        level: 3,
        name: "Jackknife Pull up",
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
                reps: 20,
            },
        },
        directions: {
            positive:
                "When working with the bar keep your shoulders good and tight",

            negative:
                "Smoothly pull yourself up, using your straightened legs to assist you.",
        },

        video: "https://youtu.be/58ss6OF4fmQ",
    },
    {
        workoutId: "pull-ups",
        level: 4,
        name: "Half Pull up",
        progressions: {
            beginner: {
                sets: 1,
                reps: 8,
            },
            intermediate: {
                sets: 2,
                reps: 11,
            },
            advanced: {
                sets: 2,
                reps: 15,
            },
        },

        directions: {
            positive: "Your upper arms should be parallel to the the floor.",
            negative:
                "Allow your elbows to travel forwards if it right for you.",
        },

        video: "https://youtu.be/vsRRJGHhKnA",
    },
    {
        workoutId: "pull-ups",
        level: 5,
        name: "Full Pull up",
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
            positive:
                "Retain a very slight bend in the elbows to take the stress off the arm joints.",

            negative:
                "Bend at the elbows and shoulders until your chin passes over the bar.",
        },

        video: "https://youtu.be/fCHcb4MB1FM",
    },
    {
        workoutId: "pull-ups",
        level: 6,
        name: "Close Pull up",
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
            positive:
                "Your hands should be next to each other, 4cm apart from the thumbs.",

            negative: "Try to minimize leg movement during the set",
        },

        video: "https://youtu.be/Om_3c0jozTc",
    },
    {
        workoutId: "pull-ups",
        level: 7,
        name: "Uneven Pull up",
        progressions: {
            beginner: {
                sets: 1,
                reps: 5,
            },
            intermediate: {
                sets: 2,
                reps: 7,
            },
            advanced: {
                sets: 2,
                reps: 9,
            },
        },
        directions: {
            positive:
                "A side-on or underhand grip will be more comfortable, than the overhand version.",

            negative:
                "Bend at the elbows and shoulders to smoothly pull your chin up over the bar.",
        },

        video: "https://youtu.be/fCHcb4MB1FM",
    },
    {
        workoutId: "pull-ups",
        level: 8,
        name: "Half One Arm Pull up",
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
            positive:
                "The elbow should be at a right angle, with your upper arm parallel to the ground.",

            negative: "Smoothly pull your chin over the bar.",
        },

        video: "https://youtu.be/ve0EIQdRLag",
    },
    {
        workoutId: "pull-ups",
        level: 9,
        name: "assisted One-Leg Pull up",
        progressions: {
            beginner: {
                sets: 1,
                reps: 3,
            },
            intermediate: {
                sets: 2,
                reps: 5,
            },
            advanced: {
                sets: 2,
                reps: 7,
            },
        },
        directions: {
            positive:
                "With your opposite hand, grab the towel as low as possible-around eye level.",

            negative:
                "Release the towel, and continue pulling yourself up with just one arm until your chin is over the bar.",
        },

        video: "https://youtu.be/W8DBEewoDmY",
    },
    {
        workoutId: "pull-ups",
        level: 10,
        name: "On Arm Pull up",
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
                "Your working arm should be virtually straight, with just a little kink in it to take the stress off the joints.",

            negative:
                "Bend at the elbow, and shoulder to pull your body up with as little momentum as possible.",
        },

        video: "https://youtu.be/2tHTY6ZKzkc",
    },
] as const

export default pullUps

export const pullUpsOverview =
    "Perhaps the best and safest exercise to build a powerful upper back is the humble pull up, using these techniques getting to level 8 or 9 is within most peoples grasps. The one arm pull up is going to take dedication, commitment, and consistency turning up week in and week out."
