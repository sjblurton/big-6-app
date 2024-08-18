import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { z } from "zod"
import { act } from "react"
import FormProvider from "../../library/FormProvider/FormProvider"
import Input from "./Input"

const schema = z.object({
    testField: z.string().min(1, "This field is required"),
})

type FormData = z.infer<typeof schema>

const onSubmit = jest.fn(
    async (data: FormData) =>
        new Promise((resolve) => {
            resolve(data)
        })
)

function renderInput() {
    return render(
        // @ts-expect-error - It's a test so I'm not too worried about the type
        <FormProvider schema={schema} onSubmit={onSubmit}>
            <Input<FormData>
                label="Test Field"
                isMultiline={false}
                name="testField"
                isFullWidth
            />
            <button type="submit">Submit</button>
        </FormProvider>
    )
}

describe("Input component", () => {
    test("renders without crashing", () => {
        renderInput()
        expect(screen.getByLabelText("Test Field")).toBeInTheDocument()
    })

    test("displays error when triggering onSubmit with data data", async () => {
        renderInput()
        const submitButton = screen.getByText("Submit")

        act(() => {
            fireEvent.click(submitButton)
        })

        expect(
            await screen.findByText("This field is required")
        ).toBeInTheDocument()
    })

    test("submits the form with correct data", async () => {
        renderInput()
        const input = screen.getByLabelText("Test Field")
        fireEvent.change(input, { target: { value: "Valid Input" } })
        const submitButton = screen.getByText("Submit")

        fireEvent.click(submitButton)

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1)
            const data = onSubmit.mock.calls[0][0]
            expect(data).toEqual({ testField: "Valid Input" })
        })
    })
})
