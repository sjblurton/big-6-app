import { DateTime } from "luxon";
import Link from "next/link";
import { MuiTypography } from "@/modules/components/library/mui";
import { light } from "@/styles/utilityClasses/background.module.scss";
import { shadow } from "@/styles/utilityClasses/boxShadow.module.scss";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import ProgressBar from "../ProgressBar/ProgressBar";
import { box, card, svg } from "./WorkoutCard.module.scss";
import { workoutSvgs } from "../../assets/workouts";

type Props = {
  workout: WorkoutData;
};

function Card({ workout: { date, level, reps, workoutId: workout } }: Props) {
  const totalReps = reps.reduce((acc, curr) => acc + curr, 0);
  const { title, component: Workout } = workoutSvgs[workout];
  const time = DateTime.fromMillis(date).toRelativeCalendar();

  return (
    <Link href="/" passHref>
      <article className={`${card} ${light} ${shadow}`}>
        <div className={box}>
          <MuiTypography variant="h3">{title}</MuiTypography>
          <MuiTypography variant="caption" component="small">
            Level: {level}
          </MuiTypography>
          <MuiTypography variant="caption" component="small">
            {time}
          </MuiTypography>
        </div>
        <div className={svg}>
          <Workout />
        </div>
        {/* TODO: Dynamically get the goal */}
        <ProgressBar goal={80} actual={totalReps} />
      </article>
    </Link>
  );
}

export default Card;
