# react-merge-refs

![Node.js CI](https://github.com/gregberge/react-merge-refs/workflows/Node.js%20CI/badge.svg)

React utility to merge refs 🖇

```sh
npm install react-merge-refs
```

## Example

```js
import React from "react";
import mergeRefs from "react-merge-refs";

const Example = React.forwardRef(function Example(props, ref) {
  const localRef = React.useRef();
  return <div ref={mergeRefs([localRef, ref])} />;
});
```

## Why?

When developing low level UI components, it is common to have to use a local ref but also support an external one using `React.forwardRef`. Natively, React does not offer a way to set two refs inside the `ref` property. This is the goal of this small utility.

Today a `ref` can be a `function` or an `object`, tomorrow it could be another thing, who knows. This utility handles compatibility for you.

# License

MIT
