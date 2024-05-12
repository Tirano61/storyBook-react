import type { Meta, StoryObj } from '@storybook/react';
import { type HeaderProps } from './Header';
declare const meta: Meta<HeaderProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const LoggedIn: Story;
export declare const LoggedOut: Story;
