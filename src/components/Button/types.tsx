/*
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:14:52 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { MouseEvent} from 'react';

import { colors} from '../../themes';

export type IButton = {
  label: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  bgColor?: keyof typeof colors;
  width?: number;
  height?: number;
  disable?: boolean;
};
