import type * as React from "react";

type RefCleanup<T> = Exclude<ReturnType<React.RefCallback<T>>, void>;

export function mergeRefs<T = any>(
  refs: Array<React.Ref<T> | undefined>
): React.RefCallback<T> {
  return (value) => {
    const cleanups = refs.reduce((cleanups, ref) => {
      if (typeof ref === "function") {
        const cleanup = ref(value);
        if (typeof cleanup === "function") {
          cleanups.push(cleanup);
        } else {
          // simulate previous ref cleanup behavior
          cleanups.push(() => {
            ref(null);
          });
        }
      } else if (ref != null) {
        ref.current = value;
        // simulate previous ref cleanup behavior
        cleanups.push(() => {
          ref.current = null;
        });
      }
      return cleanups;
    }, [] as RefCleanup<T>[]);

    return () => {
      cleanups.forEach((cleanup) => {
        cleanup();
      });
    };
  };
}
