import { MuiSkeleton } from "@/components/libs/mui"
import * as background from "@/styles/utility-classes/background.module.scss"
import * as boxShadow from "@/styles/utility-classes/box-shadow.module.scss"

import { box, card, svg } from "./WorkoutCard.module.scss"

function WorkoutCardSkeleton() {
    return (
        <div className={`${card} ${background.light} ${boxShadow.subtle}`}>
            <div className={box}>
                <MuiSkeleton variant="text" width={125} />
                <MuiSkeleton variant="text" width={100} />
                <MuiSkeleton variant="text" width={100} />
            </div>
            <div className={svg}>
                <MuiSkeleton variant="rectangular" height={90} width={90} />
            </div>
            <MuiSkeleton variant="circular" height={100} width={100} />
        </div>
    )
}

export default WorkoutCardSkeleton
