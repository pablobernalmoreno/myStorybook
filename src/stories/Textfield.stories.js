import Textfield from "../components/textfield/Textfield";

export default {
  title: "Components/Textfield",
  component: Textfield,
  argTypes: {
    label: {
      name: "label",
      defaultValue: { summary: "Default" },
      description: "Label for the input field",
      control: { type: "text" },
      type: { required: true },
    },
    variant: {
      name: "variant",
      defaultValue: { summary: "" },
      description: "Variant of the input and label",
      options: ["Filled", "Outlined", "Default"],
      control: { type: "radio" },
    },
    onChange: {
      name: "onChange",
      defaultValue: { summary: "() => {}" },
      description: "Function to be called on change",
      type: { required: true },
    },
    labelCustomStyles: {
      name: "customStyles",
      defaultValue: {},
      description:
        "Custom styles to be added by the user to the label component",
      control: "object",
    },
    inputCustomStyles: {
      name: "customStyles",
      defaultValue: {},
      description:
        "Custom styles to be added by the user to the input component",
      control: "object",
    },
    labelOtherProps: {
      name: "otherProps",
      defaultValue: {},
      description:
        "Here you can add your own props and they will work for the label component",
    },
    inputOtherProps: {
      name: "otherProps",
      defaultValue: {},
      description:
        "Here you can add your own props and they will work for the input component",
    },
  },
};

const Template = (args) => <Textfield {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
  onChange: (e) => {
    e.preventDefault();
  },
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled",
  variant: "filled",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined",
};
