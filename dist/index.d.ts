import React, { MouseEvent, FormEvent, KeyboardEvent } from 'react';

declare enum ButtonVariant {
    primary = "primary",
    ghost = "ghost",
    secondary = "secondary"
}
declare enum ButtonSize {
    large = "large",
    medium = "medium",
    small = "small"
}

type IButton = {
    label: string;
    variant: keyof typeof ButtonVariant;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    size?: keyof typeof ButtonSize;
    disable?: boolean;
};

declare const _default: React.MemoExoticComponent<(props: IButton) => React.JSX.Element>;

type IInput = {
    type?: string;
    placeholder?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    value?: string;
    withIcon?: boolean;
    withLabel?: boolean;
    textLabel?: string;
    hasRequired?: boolean;
    error?: boolean;
    disable?: boolean;
};

declare const Input: React.MemoExoticComponent<(props: IInput) => React.JSX.Element>;

export { _default as Button, Input };
