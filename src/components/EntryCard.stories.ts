import type { Meta, StoryObj } from '@storybook/react';

import EntryCard from './EntryCard';

const meta = {
  title: 'Example/EntryCard',
  component: EntryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof EntryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    phraseTitle: 'タイトルです',
    phraseStandard: 'タイトルです',
    phraseExplain: 'タイトルです'
  },
};