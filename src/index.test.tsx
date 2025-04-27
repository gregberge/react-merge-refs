/**
 * @vitest-environment happy-dom
 */

import * as React from "react";
import { render } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { mergeRefs } from ".";
import { mergeRefsReact16 } from "./mergeRefsReact16";

test("mergeRefs React 16+", () => {
  const Dummy = React.forwardRef(function Dummy(_, ref) {
    React.useImperativeHandle(ref, () => "refValue");
    return null;
  });
  const refAsFunc = vi.fn();
  const refAsObj = { current: undefined };
  const Example: React.FC<{ visible: boolean }> = ({ visible }) => {
    return visible ? (
      <Dummy ref={mergeRefsReact16([refAsObj, refAsFunc])} />
    ) : null;
  };
  const { rerender } = render(<Example visible />);
  expect(refAsFunc).toHaveBeenCalledTimes(1);
  expect(refAsFunc).toHaveBeenCalledWith("refValue");
  expect(refAsObj.current).toBe("refValue");
  rerender(<Example visible={false} />);
  expect(refAsFunc).toHaveBeenCalledTimes(2);
  expect(refAsFunc).toHaveBeenCalledWith(null);
  expect(refAsObj.current).toBe(null);
});

test("mergeRefs React 19+", () => {
  const Dummy = React.forwardRef(function Dummy(_, ref) {
    React.useImperativeHandle(ref, () => "refValue");
    return null;
  });

  const refAsFunc = vi.fn();

  const refAsObj = { current: undefined };

  const refCleanup = vi.fn();
  const refAsFuncWithCleanup = vi.fn(() => refCleanup);

  const Example: React.FC<{ visible: boolean }> = ({ visible }) => {
    return visible ? (
      <Dummy ref={mergeRefs([refAsObj, refAsFunc, refAsFuncWithCleanup])} />
    ) : null;
  };
  const { rerender } = render(<Example visible />);

  expect(refAsFunc).toHaveBeenCalledTimes(1);
  expect(refAsFunc).toHaveBeenCalledWith("refValue");

  expect(refAsObj.current).toBe("refValue");

  expect(refAsFuncWithCleanup).toHaveBeenCalledTimes(1);
  expect(refAsFuncWithCleanup).toHaveBeenCalledWith("refValue");
  expect(refCleanup).toHaveBeenCalledTimes(0);

  rerender(<Example visible={false} />);

  expect(refAsFunc).toHaveBeenCalledTimes(2);
  expect(refAsFunc).toHaveBeenCalledWith(null);

  expect(refAsObj.current).toBe(null);

  expect(refAsFuncWithCleanup).toHaveBeenCalledTimes(1);
  expect(refCleanup).toHaveBeenCalledTimes(1);
});

test("mergeRefs with undefined and null refs", () => {
  const Dummy = React.forwardRef(function Dummy(_, ref) {
    React.useImperativeHandle(ref, () => "refValue");
    return null;
  });
  const refAsFunc = vi.fn();
  const refAsObj = { current: undefined };
  const Example: React.FC<{ visible: boolean }> = ({ visible }) => {
    return visible ? (
      <Dummy ref={mergeRefs([null, undefined, refAsFunc, refAsObj])} />
    ) : null;
  };
  const { rerender } = render(<Example visible />);
  expect(refAsFunc).toHaveBeenCalledTimes(1);
  expect(refAsFunc).toHaveBeenCalledWith("refValue");
  expect(refAsObj.current).toBe("refValue");
  rerender(<Example visible={false} />);
  expect(refAsFunc).toHaveBeenCalledTimes(2);
  expect(refAsFunc).toHaveBeenCalledWith(null);
  expect(refAsObj.current).toBe(null);
});
