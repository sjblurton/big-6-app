import { type Meta, type StoryObj } from "@storybook/react"
import buildOas from "../../model/api/openapi-builder"
import Swagger from "./Swagger"

const meta: Meta = {
    title: "Documentation/Swagger",
    component: Swagger,
    tags: ["!autodocs"],
    args: {
        json: buildOas(),
    },
}

export default meta

type Story = StoryObj<typeof Swagger>

export const API: Story = {}
