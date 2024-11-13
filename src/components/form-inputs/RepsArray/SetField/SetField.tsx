import {
    MuiFloatingActionButton,
    MuiGrid,
    MuiTextField,
} from "@/components/libs/mui"
import { MuiDeleteOutline } from "@/components/libs/mui/mui-icons"

import { textFieldStyles } from "../../TextField/TextField"

type SetFieldProperties = {
    index: number
    value: number
    onRemove: () => void
}

const SetField = ({ index, value, onRemove }: SetFieldProperties) => (
    <MuiGrid
        item
        container
        mt={1}
        alignItems="center"
        flexWrap="nowrap"
        xs={12}
    >
        <MuiTextField
            label={`Set ${index + 1}`}
            sx={textFieldStyles}
            variant="filled"
            size="small"
            value={value}
            inputProps={{
                input: {
                    readOnly: true,
                },
            }}
        />

        <MuiFloatingActionButton
            color="secondary"
            aria-label="remove"
            size="small"
            onClick={onRemove}
        >
            <MuiDeleteOutline style={{ color: "white" }} />
        </MuiFloatingActionButton>
    </MuiGrid>
)

export default SetField
