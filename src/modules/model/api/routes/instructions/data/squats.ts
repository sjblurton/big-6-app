import { WorkoutInstructions } from "../outputs/workoutInstructionsSchema";

const squats:WorkoutInstructions =[
		{
            
			workoutId: "squats",
            level: 1,
			name: "Shoulder stand Squats",
            progressions:{
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
					"Place your hands on your lower back for support, whilst keeping your upper arms firmly on the floor.",

				negative:
					"Keeping your torso as upright as possible, bend at the hips and knees until your knees touch your forehead.",
			},
			images: {
				negative: "Images.Squats",
				positive: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=a-JNXY_hnSs&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=4",
		},
		{
			workoutId: "squats",
            level: 2,
			name: "Jackknife Squats",
            progressions:{
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
					"Tilt forwards slightly so that you can take some of your body's weight though your hands.",

				negative:
					"Bend at the knees and hips until your hamstrings reach your calves, and you can not go any further.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=QhyRsrPOkoY&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=5",
		},
		{
			workoutId: "squats",
            level: 3,
			name: "Supported Squats",
            progressions:{
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
					"Your arms should be out straight and angled down, holding onto a sturdy object higher than your thighs.",

				negative:
					"Slowly lower yourself down by bending at the hips and knees, keeping your back as straight as possible.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=cLQS5mZmXN0&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=6",
		},
		{
			workoutId: "squats",
            level: 4,
			name: "Half Squats",
            progressions:{
                beginner: {
                    sets: 1,
                    reps: 10,
                },
                intermediate: {
                    sets: 2,
                    reps: 35,
                },
                advanced: {
                    sets: 2,
                    reps: 50,
                },
            },
			directions: {
				positive:
					"Don't keep your feet perfectly in line with one another, allow your toes to point very slightly outwards.",

				negative:
					"Bend at the hips and knees until your knees are angled at ninety degrees.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=tIHNkW0nGFg&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=7",
		},
		{
			workoutId: "squats",
            level: 5,
			name: "Full Squats",
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
                    reps: 30,
                },
            },
			directions: {
				positive:
					"Stand tall, with the feet shoulder width apart or a little wider, depending upon your preferences.",

				negative:
					"Continue descending at a controlled speed until the backs of your thighs are resting against your calves.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=S3bNmmxkh_k&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=8",
		},
		{
			workoutId: "squats",
            level: 6,
			name: "Close Squats",
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
				positive:
					"Stand up straight with your heals together, toes angled out very slightly.",

				negative:
					"To prevent yourself from tipping backwards you may have to flex your shins.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=MiNzsa9MIpI&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=9",
		},
		{
			workoutId: "squats",
            level: 7,
			name: "Chair One-Leg Squats",
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
				positive:
					"Stand up straight with one foot flat on the floor, and the other out in front of you.",

				negative:
					"Bend at the knees and hips until seated keeping the other foot off the floor.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video: "",
		},
		{
			workoutId: "squats",
            level: 8,
			name: "Half One-Leg Squats",
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
				positive:
					"Your elevated foot should be at about the level of your opposite thigh.",

				negative:
					"Keep the back flat and the heel of your supported leg on the floor at all times.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video: "https://www.youtube.com/watch?v=dZON2MCVdfg",
		},
		{
			workoutId: "squats",
            level: 9,
			name: "assisted One-Leg Squats",
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
				positive:
					"Stand up straight with one foot flat on the floor, and the other foot up in the air in front of you.",

				negative:
					"Press down on the basketball to help you over the first few centimeters.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=9Mcs9M1HORQ&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=12",
		},
		{
			workoutId: "squats",
            level: 10,
			name: "Pistol Squats",
            progressions:{
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
				positive: "Keep your elevated leg as straight as possible.",

				negative:
					"Descend smoothly, until the back of the thigh of your supporting leg rests against the calf.",
			},
			images: {
				positive: "Images.Squats",
				negative: "Images.Squats",
			},
			video:
				"https://www.youtube.com/watch?v=fNCTWGl1Q8A&list=PLZsDuSZDsUoYOuq2RgSqZSV-11BdHYViN&index=13",
		},
	] as const

export default squats