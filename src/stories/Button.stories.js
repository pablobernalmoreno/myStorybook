import MyButton from "../components/Button";

export default {
  title: "Components/Button",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default",
}

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  type: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  type: "Secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  type: "Tertiary",
};
