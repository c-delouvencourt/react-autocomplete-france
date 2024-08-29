import type { StoryObj } from '@storybook/react';
import { ExampleAutocomplete } from './ExampleAutocomplete';
declare const meta: {
    title: string;
    component: typeof ExampleAutocomplete;
    tags: string[];
    argTypes: {
        initialCount: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithInitialCount: Story;
