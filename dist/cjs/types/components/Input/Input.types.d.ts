import { FormEvent, KeyboardEvent } from "react";
export type IInput = {
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
