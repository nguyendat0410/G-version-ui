/**
 * @description   ¯\(ツ)/¯
 * @since         Wednesday, 9 20th 2023, 10:59:35 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input component primary", () => {
    render(<Input type="text" />);
  });
});
