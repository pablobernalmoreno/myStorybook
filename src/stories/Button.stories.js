import { object } from "prop-types";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      name: "label",
      defaultValue: { summary: "Default" },
      description: "Label for the button",
      control: { type: "text" },
      type: { required: true },
    },
    type: {
      name: "type",
      defaultValue: { summary: "" },
      description: "Type of button to give styles",
      options: ["Primary", "Secondary", "Tertiary", "Default"],
      control: { type: "radio" },
    },
    onClick: {
      name: "onClick",
      defaultValue: { summary: "() => {}" },
      description: "Function to be called on click",
      type: { required: true },
    },
    customStyles: {
      name: "customStyles",
      defaultValue: {},
      description: "Custom styles to be added by the user",
      control: "object",
    },
    otherProps: {
      name: "otherProps",
      defaultValue: {},
      description: "Here you can add your own props and they will work",
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  onClick: () => {},
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  type: "Primary",
  onClick: () => {},
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  type: "Secondary",
  onClick: () => {},
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  type: "Tertiary",
  onClick: () => {},
};

export const Custom = Template.bind({});
Custom.args = {
  label: "Custom",
  type: "Custom",
  customStyles: { backgroundColor: "red" },
  onClick: () => {},
};
