import { Ref, RefCallback, useMemo, version } from "react";
import { mergeRefsReact16 } from "./mergeRefsReact16";
import { mergeRefsReact19 } from "./mergeRefsReact19";

/**
 * Assigns a value to a ref.
 * @param ref - The ref to assign the value to.
 * @param value - The value to assign to the ref.
 * @returns The ref cleanup callback, if any.
 */
export function assignRef<T>(
  ref: Ref<T> | undefined | null,
  value: T | null,
): ReturnType<RefCallback<T>> {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/**
 * Merges multiple refs into a single one.
 * @param refs List of refs to merge.
 * @returns Merged ref.
 */
export const mergeRefs =
  parseInt(version.split(".")[0], 10) >= 19
    ? mergeRefsReact19
    : mergeRefsReact16;

/**
 * Merges multiple refs into a single one ane memoizes the result to avoid refs execution on each render.
 * @param {RefItem<T>[]} refs List of refs to merge.
 * @returns {Ref<T>} Merged ref.
 */
export function useMergeRefs<T>(refs: (Ref<T> | undefined)[]): Ref<T> {
  return useMemo(() => mergeRefs(refs), refs);
}
