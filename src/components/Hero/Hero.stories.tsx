import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hero from "./Hero";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Hero",
  component: Hero,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Title",
  subtitle: "Subtitle",
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  title: "Title",
  subtitle: "Subtitle",
  children: (
    <ButtonGroup>
      <Button text="secondary" variant="secondary"></Button>
      <Button text="primary" variant="primary"></Button>
    </ButtonGroup>
  ),
};
