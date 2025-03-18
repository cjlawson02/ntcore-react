import React from "react";

import { StoryFn, Meta } from "@storybook/react";

import { Gauge, GaugeProps } from "../index";

export default {
    title: "Gauge",
    component: Gauge,
} as Meta<typeof Gauge>;

const Template: StoryFn<typeof Gauge> = (args: GaugeProps) => (
    <Gauge {...args} />
);

export const Default = Template.bind({});

Default.args = {
    value: 50,
};
