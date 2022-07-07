import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './button'
import '../styles.css'

const STORY_CATEGORIES = {
    DEFAULT: 'Default attributes',
    CUSTOM: 'Custom attributes',
}

export default {
    component: Button,
    title: 'Button',
    argTypes: {
        variant: {
            description: 'Button look & feel',
            control: {
                type: 'radio',
            },
            table: {
                category: STORY_CATEGORIES.CUSTOM,
            },
        },
        bare: {
            description: 'Removes border and background color',
            table: {
                category: STORY_CATEGORIES.CUSTOM,
            },
        },
        as: {
            description: 'Morph button into any other valid html tag with nesting support',
            table: {
                category: STORY_CATEGORIES.CUSTOM,
            },
        },
        children: {
            description: 'Button label, or node',
            table: {
                category: STORY_CATEGORIES.DEFAULT,
            },
        },
        disabled: {
            type: { name: 'boolean' },
            description: 'Default button "disabled" prop',
            defaultValue: false,
            table: {
                category: STORY_CATEGORIES.DEFAULT,
            },
        },
    },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>

export const Primary = Template.bind({})
Primary.args = {
    children: 'Primary',
    variant: 'primary',
    bare: false,
    as: 'button',
}

export const Warn = Template.bind({})
Warn.args = {
    ...Primary.args,
    children: 'Attention!',
    variant: 'warn',
}

export const Destructive = Template.bind({})
Destructive.args = {
    ...Primary.args,
    children: 'Cthulhu Fthagn',
    variant: 'destructive',
}

export const Link = Template.bind({})
Link.args = {
    ...Primary.args,
    children: 'Link',
    bare: true,
    as: 'a',
}
