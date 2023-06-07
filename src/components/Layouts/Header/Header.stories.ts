import type { Option } from './type';
import Header from './Header.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'Components/Layouts/Header',
  component: Header,
  render: (args: Option) => ({
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
    href: '/',
  },
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
