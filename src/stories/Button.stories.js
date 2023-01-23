import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = args => <Button {...args}/>

export const Primary = Template.bind({})
 
Primary.args = {
    backgroundColor: "#6B4EFF",
    label: "Primary",
}

export const Secondary = Template.bind({})
 
Secondary.args = {
    backgroundColor: "#E7E7FF",
    color: "#6B4EFF",
    label: "Secondary",
}