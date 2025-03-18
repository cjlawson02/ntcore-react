import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Indicator, IndicatorProps } from "../index";

export default {
    title: "Indicator",
    component: Indicator,
} as Meta<typeof Indicator>;

const Template: StoryFn<typeof Indicator> = (args: IndicatorProps) => (
    <Indicator {...args} />
);

export const Default = Template.bind({});

Default.args = {
    value: false,
};
