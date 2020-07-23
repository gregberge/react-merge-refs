import * as React from 'react';

export default function mergeRefs<T = any>(
    refs: React.MutableRefObject<T> | React.LegacyRef<T>
): React.RefCallback<T>;