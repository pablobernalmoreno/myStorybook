import DragNDrop from "../components/dragNdrop/DragNDrop";

export default {
  title: "Components/DragNDrop",
  component: DragNDrop,
  argTypes: {
    items: {
      name: "items",
      defaultValue: {
        summary: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
      },
      description: "Items to be displayed",
      control: { type: "array" },
      type: { required: true },
    },
    variant: {
      name: "variant",
      defaultValue: { summary: "" },
      description: "Variant of button to give styles",
      options: ["Primary", "Secondary", "Tertiary", "Default"],
      control: { type: "radio" },
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

const Template = (args) => <DragNDrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
};

export const Primay = Template.bind({});
Primay.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  variant: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  variant: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  variant: "Tertiary",
};

export const Custom = Template.bind({});
Custom.args = {
  items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  customStyles: { color: "orange", backgroundColor: "red" },
};
