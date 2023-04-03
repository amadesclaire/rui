/* Storybook file */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

// this is an export default for a storybook story using as componentMeta<typeof Button>

export default {
  title: 'RUI/Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: <p>Click me</p>,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Warning = Template.bind({});
Warning.args = {};

export const Link = Template.bind({});
Link.args = {};
