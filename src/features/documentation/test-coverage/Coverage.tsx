"use client"

import {
    MuiBox,
    MuiContainer,
    MuiTable,
    MuiTableBody,
    MuiTableCell,
    MuiTableContainer,
    MuiTableHead,
    MuiTableRow,
    MuiTypography,
} from "@/components/libs/mui"
import {
    primary as backgroundColorPrimary,
    error as backgroundError,
    success as backgroundSuccess,
    warning as backgroundWarning,
} from "@/styles/utility-classes/background.module.scss"
import {
    bold as textBold,
    capitalize as textCapitalize,
} from "@/styles/utility-classes/typography.module.scss"

import { tableColumnNames } from "./constants"
import useCoverageData from "./use-coverage-data"

function Coverage() {
    const data = useCoverageData()

    const cellClassName = `${textCapitalize} ${textBold}`

    return (
        <MuiContainer maxWidth="lg">
            <MuiBox
                sx={{
                    my: 4,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MuiTypography variant="h2" component="h1" sx={{ mb: 2 }}>
                    Test Coverage
                </MuiTypography>
                {data.length === 0 ? (
                    <MuiTypography variant="h6" component="h2" sx={{ mt: 4 }}>
                        No data available
                    </MuiTypography>
                ) : (
                    <MuiTableContainer>
                        <MuiTable stickyHeader sx={{ minWidth: 650 }}>
                            <MuiTableHead>
                                <MuiTableRow>
                                    <MuiTableCell
                                        className={`${cellClassName} ${backgroundColorPrimary}`}
                                        key="header-name"
                                    >
                                        name
                                    </MuiTableCell>
                                    {tableColumnNames.map((columnName) => (
                                        <MuiTableCell
                                            className={`${cellClassName} ${backgroundColorPrimary}`}
                                            key={`header-${columnName}`}
                                        >
                                            {columnName}
                                        </MuiTableCell>
                                    ))}
                                </MuiTableRow>
                            </MuiTableHead>
                            <MuiTableBody>
                                {data.map((row) => (
                                    <MuiTableRow key={row.key}>
                                        <MuiTableCell className={cellClassName}>
                                            {row.name}
                                        </MuiTableCell>
                                        {tableColumnNames.map((columnName) => (
                                            <MuiTableCell
                                                className={`${cellClassName} ${selectClassName(row[columnName])}`}
                                                key={`${row.key}-${columnName}`}
                                            >
                                                {`${row[columnName]}%`}
                                            </MuiTableCell>
                                        ))}
                                    </MuiTableRow>
                                ))}
                            </MuiTableBody>
                        </MuiTable>
                    </MuiTableContainer>
                )}
            </MuiBox>
        </MuiContainer>
    )
}

export default Coverage

const selectClassName = (value: number) => {
    if (value < 80) {
        return backgroundError
    }
    if (value < 90) {
        return backgroundWarning
    }
    return backgroundSuccess
}
