/**
 * @description   ¯\(ツ)/¯
 * @since         Wednesday, 9 20th 2023, 10:49:49 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React, { memo } from "react";
import isEqual from "react-fast-compare";

import { IInput } from "./Input.types";
import "./Input.scss";

const Input = memo((props: IInput) => {
  const {
    type,
    placeholder,
    onChange = () => {},
    onKeyUp = () => {},
    onKeyDown = () => {},
    disable,
    value,
    withIcon = false,
    withLabel = false,
    textLabel,
    hasRequired = false,
  } = props;

  const getClassName = () => {
    let className = "";
    className = props.error ? `${className} input-error` : className;
    className = props.disable ? `${className} input-disable` : className;
    className = props.withIcon ? `${className} with-icon` : className;
    return className.trim();
  };
  return (
    <div className="input input-relative">
      {withLabel ? <label className="with-label">{textLabel} {hasRequired ? (<span className="">(*)</span>) : null}</label> : null}
      <input
        type={type}
        className={getClassName()}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        disabled={disable}
        defaultValue={value}
      />
      {withIcon ? (
        <div className="icon-absolute">
          <img
            src="/search.png"
            className="pr-2"
            width={20}
          />
        </div>
      ) : null}
    </div>
  );
}, isEqual);

export default Input;
