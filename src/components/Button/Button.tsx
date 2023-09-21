/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:14:33 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 * Tue, 9 19th 2023 16:13:34 	Nguyễn Đạt	fix border width
 */

import React, { memo } from "react";
import isEqual from "react-fast-compare";

import { ButtonVariant, ButtonSize } from "@themes";
import type { IButton } from "./Button.types";
import "./Button.scss";

const Button = (props: IButton) => {
  const {
    label,
    onClick = () => {},
    variant = "primary",
    size = "medium",
    disable = false,
  } = props;

  const buildClassName = () => {
    let className = "btn";

    switch (size) {
      case ButtonSize.large:
        className = `${className} btn-large`;
        break;
      case ButtonSize.medium:
        className = `${className} btn-medium`;
        break;
      case ButtonSize.small:
        className = `${className} btn-small`;
        break;
    }

    switch (variant) {
      case ButtonVariant.primary:
        className = `${className} btn-primary`;
        break;
      case ButtonVariant.ghost:
        className = `${className} btn-ghost`;
        break;
      case ButtonVariant.secondary:
        className = `${className} btn-secondary`;
        break;
    }

    className = `${className}${props.disable ? "__disable" : ""}`;

    return className;
  };
  return (
    <button
      onClick={disable ? undefined : onClick}
      className={buildClassName()}
      disabled={disable}
    >
      {label}
    </button>
  );
};

export default memo(Button, isEqual);
