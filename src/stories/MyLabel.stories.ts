
import { MyLabel } from "../components/MyLabel";
import { Meta, StoryObj } from "@storybook/react";


const meta = {
  title: 'UI/labels/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes:{
    size: { control: 'inline-radio' },
    color: {control: 'inline-radio'},
    allCaps: { control: 'boolean'},
    fontColor: { control: 'color' },
    backgroundColor: { control: 'color'}
  }
} satisfies Meta<typeof MyLabel>


export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args:{
    label: 'Basic label',
  }
};
export const ALLCaps: Story = {
  args:{
    label: 'ALLCaps label',
    size: 'normal',
    allCaps: true,
  },
  
};
export const Secondary: Story = {
  args:{
    label: 'Secundary label',
    color: 'text-secondary'
  }
};
export const CustomColors: Story = {
  args:{
    label: 'Custom color label',
    fontColor: '#00fa1d'
  }
};
export const BackgroundColor: Story = {
  args:{
    label: 'Custom color label',
    fontColor: '#FFFFFF',
    backgroundColor: '#004a5d'
  }
};