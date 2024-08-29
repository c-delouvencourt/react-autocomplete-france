import type { Meta, StoryObj } from '@storybook/react'

import { ExampleAutocomplete } from './ExampleAutocomplete'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/ExampleAutocomplete',
    component: ExampleAutocomplete,
    tags: ['autodocs'],
    argTypes: {
        initialCount: { control: 'number' },
    },
} satisfies Meta<typeof ExampleAutocomplete>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {

    },
}

export const WithInitialCount: Story = {
    args: {

    },
}
