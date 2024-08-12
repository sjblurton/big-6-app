import { InstructionParams } from "@/modules/api/instructions/services/instructions.service";
import { WORKOUT_IDS } from "@/modules/model/api/routes/shared/workoutIds";
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels";
import ButtonGroup from "./ButtonGroup/ButtonGroup";
import { MuiGrid } from "../../library/mui";

function InstructionsTitle({
  params: { level, name },
}: {
  params: Required<InstructionParams>;
}) {
  const workoutArray = Object.values(WORKOUT_IDS);

  const workoutDefaultIndex = workoutArray.findIndex(
    (workout) => workout.key === name,
  );

  const levelDefaultIndex = levelArray.findIndex(
    (levelLink) => levelLink === level,
  );

  return (
    <MuiGrid container justifyContent="center" gap={2}>
      <MuiGrid item>
        <ButtonGroup
          options={workoutArray.map(({ key, label }) => ({
            label,
            href: `/instructions/${key}/${level}`,
          }))}
          defaultIndex={workoutDefaultIndex}
        />
      </MuiGrid>
      <MuiGrid item>
        <ButtonGroup
          options={levelArray.map((levelLink) => ({
            label: levelLink,
            href: `/instructions/${name}/${levelLink}`,
          }))}
          defaultIndex={levelDefaultIndex}
        />
      </MuiGrid>
    </MuiGrid>
  );
}

export default InstructionsTitle;
