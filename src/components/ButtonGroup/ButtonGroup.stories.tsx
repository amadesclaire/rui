import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ButtonGroup",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: (
    <>
      <Button />
      <Button text="Primary" variant="secondary" />
      <Button text="Secondary" variant="warning" />
      <Button text="Link" variant="link" />
    </>
  ),
};
