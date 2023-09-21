/**
 * @description   ¯\(ツ)/¯
 * @since         Wednesday, 9 20th 2023, 10:50:17 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

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
