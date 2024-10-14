import { getTextContrast } from "@/modules/colors/get-text-contrast"
import { MuiTypography } from "@/modules/components/library/mui"
import * as colors from "@/styles/colors/_exports.module.scss"

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
