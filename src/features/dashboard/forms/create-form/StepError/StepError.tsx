import { MuiTypography } from "@/components/libs/mui"
import * as colors from "@/styles/colors/_exports.module.scss"
import { getTextContrast } from "@/utils/colors/get-text-contrast"

function StepError({ message }: { message: string }) {
    return (
        <MuiTypography
            sx={{
                width: "100%",
                textAlign: "center",
                mt: 3,
                borderRadius: 1,
                backgroundColor: colors.errorLight,
                color: getTextContrast(colors.errorLight),
            }}
        >
            {message}
        </MuiTypography>
    )
}

export default StepError
