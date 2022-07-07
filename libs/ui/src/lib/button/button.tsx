import styles from './button.module.css'
import React from 'react'
import { createClassNames } from '@monorepository/utils'

const DEFAULT_ELEMENT = 'button'
const BEM_BLOCK = 'button'

export type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
    children: string
    // prettier-ignore
    variant?: 'primary'
            | 'secondary'
            | 'brand'
            | 'warn'
            | 'destructive'
    bare?: boolean
    as?: E
}

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
    Omit<React.ComponentProps<E>, keyof ButtonOwnProps>

// prettier-ignore
export function Button<E extends React.ElementType = typeof DEFAULT_ELEMENT>({
                                                                                         children = '',
                                                                                         variant = 'primary',
                                                                                         bare = false,
                                                                                         as,
                                                                                         ...rest
                                                                                     }: ButtonProps<E>) {
    const TagName = as || DEFAULT_ELEMENT

    const classNames = [
        styles[BEM_BLOCK],
        ...createClassNames({
            [variant]: true,
            bare,
        })
            .split(' ')
            .map((bemModifier) => styles[`${BEM_BLOCK}--${bemModifier}`]),
    ].join(' ')

    return (
        <TagName
            {...rest}
            className={classNames}>
            {children}
        </TagName>
    )
}

export default Button
