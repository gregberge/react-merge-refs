# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.2](https://github.com/gregberge/react-merge-refs/compare/v2.0.1...v2.0.2) (2023-05-09)


### Bug Fixes

* move `types` condition to the front ([#30](https://github.com/gregberge/react-merge-refs/issues/30)) ([c91c4e4](https://github.com/gregberge/react-merge-refs/commit/c91c4e4fadb35b8994b740ee4198e8bbf162f7ea))

### [2.0.1](https://github.com/gregberge/react-merge-refs/compare/v2.0.0...v2.0.1) (2022-06-27)


### Bug Fixes

* **esm:** add default export to maximize compat ([8189083](https://github.com/gregberge/react-merge-refs/commit/8189083acaf7af0128d29620ec11b7d17ab1df91)), closes [#27](https://github.com/gregberge/react-merge-refs/issues/27)

## [2.0.0](https://github.com/gregberge/react-merge-refs/compare/v1.1.0...v2.0.0) (2022-06-19)


### ⚠ BREAKING CHANGES

* The package now exports ESM only and a named export.

**Before:**

```js
import mergeRefs from "react-merge-refs";
```

**After:**

```js
import { mergeRefs } from "react-merge-refs";
```

### Features

* ESM only & named export ([a928d61](https://github.com/gregberge/react-merge-refs/commit/a928d615336db847d90dbc303371ece8a2fb37f6))


### Bug Fixes

* fix incorrect CJS / ESM distribution ([#17](https://github.com/gregberge/react-merge-refs/issues/17)) ([048c4ea](https://github.com/gregberge/react-merge-refs/commit/048c4eaee5dd2b9d3b0d63a2c86cb5145ec81349))

## [1.1.0](https://github.com/gregberge/react-merge-refs/compare/v1.0.0...v1.1.0) (2020-07-27)


### Features

* add typescript mappings ([53480d2](https://github.com/gregberge/react-merge-refs/commit/53480d2a383e7f5f316f86418f1a3f5b1ee6166b))

## 1.0.0 (2019-09-19)

### Features

- first version ([f8d7132](https://github.com/gregberge/react-merge-refs/commit/f8d7132))
