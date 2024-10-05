import { type Dispatch, type SetStateAction } from "react"

import {
    MuiButton,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"

type TitleProps = {
    list: {
        max: number
        active: number
    }
    setActive: Dispatch<SetStateAction<number>>
    title: string
}

function Title({ list: { max, active }, setActive, title }: TitleProps) {
    const handleBackClick = () => {
        setActive((curr) => (curr === 0 ? 0 : curr - 1))
    }

    const handleNextClick = () => {
        setActive((curr) => (curr === max ? max : curr + 1))
    }

    return (
        <MuiGrid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            mb={2}
        >
            <MuiGrid item xs={3} container justifyContent="center">
                <MuiButton
                    variant="contained"
                    type="button"
                    onClick={handleBackClick}
                    disabled={active === 0}
                >
                    back
                </MuiButton>
            </MuiGrid>

            <MuiGrid item xs={6} container justifyContent="center">
                <MuiTypography variant="h2" component="h2">
                    {title}
                </MuiTypography>
            </MuiGrid>

            <MuiGrid item xs={3} container justifyContent="center">
                <MuiButton
                    variant="contained"
                    type="button"
                    onClick={handleNextClick}
                    disabled={active === max}
                >
                    next
                </MuiButton>
            </MuiGrid>
        </MuiGrid>
    )
}

export default Title
