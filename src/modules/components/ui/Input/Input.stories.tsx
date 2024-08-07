import type { Meta, StoryObj } from "@storybook/react";

import { z } from "zod";
import { disableArg } from "@/modules/storybook/argTypes/disableArgs";
import Input from "./Input";
import FormProvider from "../../library/FormProvider/FormProvider";
import { MuiButton } from "../../library/mui/inputs";

const schema = z.object({
  test: z.string().min(1).max(255),
});

type FormData = z.infer<typeof schema>;

function OnSubmitButton() {
  return (
    <MuiButton color="warning" variant="contained" type="submit">
      Submit
    </MuiButton>
  );
}

const onSubmit = async (data: FormData) => {
  console.log({ data }); // eslint-disable-line no-console
  return new Response(JSON.stringify(data));
};

/**
 * The Input component is a Mui component styled and adapted to meet
 * the needs of this project. The button has been added to the story to
 * demonstrate how the form can be submitted.
 */

const meta: Meta = {
  title: "Components/Form/Input",
  component: Input,
  args: {
    name: "input-name",
    isFullWidth: false,
    isMultiline: false,
  },
  argTypes: {
    name: disableArg,
  },
  decorators: [
    (Story) => (
      <FormProvider<FormData> onSubmit={onSubmit} schema={schema}>
        <Story />
        <OnSubmitButton />
      </FormProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "First Name",
  },
};

export const Multiline: Story = {
  args: {
    label: "Multiline",
    isMultiline: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width",
    isFullWidth: true,
  },
};
