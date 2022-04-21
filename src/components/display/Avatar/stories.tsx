// Dependencies
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Components
import Avatar, { AvatarSizes } from "./index";

export default {
  title: "Display/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      default: AvatarSizes.SMALL,
      options: [AvatarSizes.SMALL, AvatarSizes.MEDIUM, AvatarSizes.LARGE],
    },
    hash: {
      control: "text",
    },
    image: {
      control: "text",
    },
  },
  parameters: {
    jest: ["test.tsx"],
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

// With Image
export const Image = Template.bind({});
Image.args = {
  hash: "",
  size: AvatarSizes.MEDIUM,
  image:
    "https://64.media.tumblr.com/1ca5ac368badaea331737f7856d844a8/tumblr_qdawidrDy61rpwm80o1_250.jpg",
};
Image.parameters = {
  jest: ["test.ts"],
};

// With Metamask
export const Metamask = Template.bind({});
Metamask.args = {
  hash: "0xc3B2CFa1684dd33e8Ea8F657122f42b288d32852",
  size: AvatarSizes.MEDIUM,
  image: "",
};
Metamask.parameters = {
  jest: ["test.ts"],
};
