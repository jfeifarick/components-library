import type { Meta, StoryObj } from '@storybook/react';
import { MyNewLibrary } from './my-new-library';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MyNewLibrary> = {
  component: MyNewLibrary,
  title: 'MyNewLibrary',
};
export default meta;
type Story = StoryObj<typeof MyNewLibrary>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MyNewLibrary!/gi)).toBeTruthy();
  },
};
