import { WorkoutInstructions } from "../outputs/workoutInstructionsSchema";

const handstands: WorkoutInstructions= [
		{
            workoutId: "handstands",
			level: 1,
			name: "Wall Headstand",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/tYX-9RQyiJA",
		},
		{
		            workoutId: "handstands",
            level: 2,
			name: "Crow Stand",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/oLGMF0yilWQ",
		},
		{
		            workoutId: "handstands",
            level: 3,
			name: "Wall Handstand",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/gI4vnrDAxEQ",
		},
		{
		            workoutId: "handstands",
            level: 4,
			name: "Half Handstand Push Ups",
            progressions:{
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
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/a9WJRuue0YA",
		},
		{
		            workoutId: "handstands",
            level: 5,
			name: "Handstand Push Ups",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/S27I9QGHtzo",
		},
		{
		            workoutId: "handstands",
            level: 6,
			name: "Close Handstand",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/vWv3P2-zvRQ",
		},
		{
		            workoutId: "handstands",
            level: 7,
			name: "Uneven Handstand Push Ups",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/bzuf-4law2k",
		},
		{
		            workoutId: "handstands",
            level: 8,
			name: "Half One Arm Handstand Push Ups",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "",
		},
		{
		            workoutId: "handstands",
            level: 9,
			name: "Levered Handstand Push Ups",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/3IJMlCWovF8",
		},
		{
		            workoutId: "handstands",
            level: 10,
			name: "One Arm Handstand Push Ups",
            progressions:{
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
				positive: "",

				negative: "",
			},
			images: {
				positive: "Images.Handstands",
				negative: "Images.Handstands",
			},
			video: "https://youtu.be/hYnmRO37SRQ",
		},
	] as const

    export default handstands;