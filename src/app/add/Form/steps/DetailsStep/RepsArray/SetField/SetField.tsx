import {
    MuiFloatingActionButton,
    MuiGrid,
    MuiTextField,
} from "@/modules/components/library/mui"
import { MuiDeleteOutline } from "@/modules/components/library/mui/mui-icons"
import { textFieldStyles } from "@/modules/components/ui/form-inputs/TextField/TextField"

type SetFieldProperties = {
    index: number
    value: number
    onRemove: () => void
}

const SetField = ({ index, value, onRemove }: SetFieldProperties) => (
    <MuiGrid item container mt={1} justifyContent="space-between">
        <MuiGrid item xs={10}>
            <MuiTextField
                fullWidth
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
        </MuiGrid>
        <MuiGrid item display="flex" alignItems="center">
            <MuiFloatingActionButton
                color="secondary"
                aria-label="remove"
                size="small"
                onClick={onRemove}
            >
                <MuiDeleteOutline style={{ color: "white" }} />
            </MuiFloatingActionButton>
        </MuiGrid>
    </MuiGrid>
)

export default SetField
