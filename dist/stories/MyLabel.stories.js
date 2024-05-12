import { MyLabel } from "../components/MyLabel";
const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        color: { control: 'inline-radio' },
        allCaps: { control: 'boolean' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' }
    }
};
export default meta;
export const Basic = {
    args: {
        label: 'Basic label',
    }
};
export const ALLCaps = {
    args: {
        label: 'ALLCaps label',
        size: 'normal',
        allCaps: true,
    },
};
export const Secondary = {
    args: {
        label: 'Secundary label',
        color: 'text-secondary'
    }
};
export const CustomColors = {
    args: {
        label: 'Custom color label',
        fontColor: '#00fa1d'
    }
};
export const BackgroundColor = {
    args: {
        label: 'Custom color label',
        fontColor: '#FFFFFF',
        backgroundColor: '#004a5d'
    }
};
