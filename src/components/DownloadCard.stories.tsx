import type { Meta, StoryObj } from '@storybook/react';

import DownloadCard from './DownloadCard';

const meta = {
  title: 'Example/DownloadCard',
  component: DownloadCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  // decorators: [
  //   (Story) => (
  //     <div style={{ width: '345px' }}>
  //       {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  //       <Story />
  //     </div>
  //   ),
  // ],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof DownloadCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};