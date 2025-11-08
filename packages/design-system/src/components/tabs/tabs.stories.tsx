/**
 * External dependencies.
 */
import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * Internal dependencies.
 */
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 1 Content</h3>
          <p className="text-gray-600">This is the content for tab 1.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 2 Content</h3>
          <p className="text-gray-600">This is the content for tab 2.</p>
        </div>
      </TabsContent>
      <TabsContent value="tab3">
        <div className="p-4">
          <h3 className="text-lg font-semibold">Tab 3 Content</h3>
          <p className="text-gray-600">This is the content for tab 3.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
