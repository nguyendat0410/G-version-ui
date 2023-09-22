import { MouseEvent } from 'react';
import { ButtonSize, ButtonVariant } from '../../themes';
export type IButton = {
    label: string;
    variant: keyof typeof ButtonVariant;
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    size?: keyof typeof ButtonSize;
    disable?: boolean;
};
