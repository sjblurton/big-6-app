import { type Meta, type StoryObj } from "@storybook/react"

import Swagger from "./Swagger"

import buildOas from "../../../app/api/openapi-builder"

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
