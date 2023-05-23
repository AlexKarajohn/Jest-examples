import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
       
    },
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>

export const Red: Story ={
    args:{
        color: 'red',
        text: 'Lorem Ipsum',
        cb: () => {},
        size: 50,

    }
};
export const Blue: Story ={
    args:{
        color: 'blue',
        text: 'Lorem Ipsum',
        cb: () => {},
        size: 50,
    }
};
export const Grey: Story ={
    args:{
        color: 'grey',
        text: 'Lorem Ipsum',
        cb: () => {},
        size: 50,
    }
};

export const Small: Story ={
    args:{
        color: 'grey',
        text: 'Lorem Ipsum',
        cb: () => {},
        size: 50,
    }
};

export const Big: Story ={
    args:{
        color: 'grey',
        text: 'Lorem Ipsum',
        cb: () => {},
        size: 150,
    }
};