import { Ref } from "react";
import { assignRef } from ".";

export function mergeRefsReact16<T>(refs: (Ref<T> | undefined)[]): Ref<T> {
  return (value: T | null) => {
    for (const ref of refs) assignRef(ref, value);
  };
}
