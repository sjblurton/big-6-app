"use client";

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
} from "@/modules/components/ui/library/mui";
import { error, hr, cell, white, success, warning } from "./page.module.scss";
import useCoverageData from "./useCoverageData";
import { tableColumnNames } from "./constants";

function Coverage() {
  const data = useCoverageData();

  const selectClassName = (value: number) => {
    if (value < 80) {
      return error;
    }
    if (value < 90) {
      return warning;
    }
    return success;
  };

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
        <MuiTypography
          variant="h2"
          component="h1"
          sx={{ mb: 2 }}
          className={white}
        >
          Test Coverage
        </MuiTypography>
        {data.length === 0 ? (
          <MuiTypography variant="h6" sx={{ mt: 4 }} className={white}>
            No data available
          </MuiTypography>
        ) : (
          <MuiTableContainer>
            <MuiTable stickyHeader sx={{ minWidth: 650 }}>
              <MuiTableHead>
                <MuiTableRow>
                  <MuiTableCell className={`${hr} ${cell}`} key="header-name">
                    name
                  </MuiTableCell>
                  {tableColumnNames.map((columnName) => (
                    <MuiTableCell
                      className={`${hr} ${cell}`}
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
                    <MuiTableCell className={cell}>{row.name}</MuiTableCell>
                    {tableColumnNames.map((columnName) => (
                      <MuiTableCell
                        className={`${cell} ${selectClassName(row[columnName])}`}
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
  );
}

export default Coverage;
