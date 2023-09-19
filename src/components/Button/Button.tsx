/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:14:33 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React, { memo } from "react";
import isEqual from "react-fast-compare";

import { colors, textColor } from "../../themes";
import type { IButton } from "./types";

const ButtonComponent = (props: IButton) => {
  const {
    label,
    onClick,
    bgColor = "primary",
    width = 160,
    height = 40,
    disable = false,
  } = props;
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: 6,
        backgroundColor: disable ? colors.disabled : colors[bgColor],
        width,
        height,
        borderColor: bgColor === "ghost" ? colors.primary : 'none',
        cursor: disable ? "not-allowed" : "pointer",
      }}
    >
      <span
        style={{
          color: disable ? textColor.disabled : textColor[bgColor],
          fontSize: 14,
        }}
      >
        {label}
      </span>
    </button>
  );
};

export const Button = memo(ButtonComponent, isEqual);
