import { white } from "@/styles/colors/_exports.module.scss";

function CircleText({
  percent,
  goal,
  reps,
}: {
  percent: number;
  goal: number;
  reps: number;
}) {
  return (
    <>
      <text
        x="50%"
        y="30%"
        fill={white}
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="smaller"
      >
        Reps: {reps}
      </text>
      <text
        fill={white}
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="larger"
      >
        {percent}%
      </text>
      <text
        fill={white}
        x="50%"
        y="70%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="smaller"
      >
        Goal: {goal}
      </text>
    </>
  );
}

export default CircleText;
