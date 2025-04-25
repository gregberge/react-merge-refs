import { Ref } from "react";
import { assignRef } from ".";

export function mergeRefsReact19<T>(refs: (Ref<T> | undefined)[]): Ref<T> {
  return (value: T | null) => {
    const cleanups: (() => void)[] = [];

    for (const ref of refs) {
      const cleanup = assignRef(ref, value);
      const isCleanup = typeof cleanup === "function";
      cleanups.push(isCleanup ? cleanup : () => assignRef(ref, null));
    }

    return () => {
      for (const cleanup of cleanups) cleanup();
    };
  };
}
