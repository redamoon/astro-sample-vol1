import Header from './Header.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof Header>;

type Args = {
  title: string;
};

const meta: Meta<typeof Header> = {
  title: 'Components/Layouts/Header',
  component: Header,
  render: (args: Args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: "<Header v-bind='args' />",
  }),
};

export const Default: Story = {
  args: {
    title: 'ロゴ',
  },
};
export default meta;
