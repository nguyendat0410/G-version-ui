/*
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:14:52 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { MouseEvent} from 'react';

import { ButtonSize, ButtonVariant } from '@themes';

export type IButton = {
  label: string;
  variant: keyof typeof ButtonVariant;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  size?: keyof typeof ButtonSize;

  disable?: boolean;
};
