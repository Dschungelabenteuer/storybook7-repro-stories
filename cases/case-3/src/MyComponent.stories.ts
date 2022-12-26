import type { Meta, StoryObj } from '@storybook/vue3';
import MyComponent from './MyComponent.vue';

type Story = StoryObj<typeof MyComponent>;

const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};

export default meta;

export const Playground: Story = {
  render: () => ({
    components: { MyComponent },
    template: '<MyComponent />',
  }),
};