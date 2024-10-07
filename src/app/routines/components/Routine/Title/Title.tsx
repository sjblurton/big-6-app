import { type Dispatch, type SetStateAction } from "react"

import {
    MuiButton,
    MuiGrid,
    MuiTypography,
} from "@/modules/components/library/mui"

type TitleProperties = {
    list: {
        max: number
        active: number
    }
    setActive: Dispatch<SetStateAction<number>>
    title: string
}

function Title({ list: { max, active }, setActive, title }: TitleProperties) {
    const handleBackClick = () => {
        setActive((current) => (current === 0 ? 0 : current - 1))
    }

    const handleNextClick = () => {
        setActive((current) => (current === max ? max : current + 1))
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
