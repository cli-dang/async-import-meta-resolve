# @cli-dang/async-import-meta-resolve

___

###### async import.meta.resolve for node v20. ESModule.

___

## Index of Contents

___

- [Description](#description)
- [Installation](#installation)
- [JetBrains OSS Licence](#jetbrains-oss-license)

___

## Description

___

> ℹ This feature is only available with the --experimental-import-meta-resolve command flag enabled.

Since Node v20 import.meta.resolve is no more a **Promise**`|`**AsyncFunction**
more @ [NodeJS API Docs ](https://nodejs.org/dist/latest-v20.x/docs/api/esm.html#importmetaresolvespecifier-parent)



___

## Installation

___

```shell
npm install @cli-dang/async-import-meta-resolve
```

___

## Usage

Let's say we need to know if the package `lodash` is installed.

```typescript
import { async_import_meta_resolve } from 'async-import-meta-resolve'

let lodash_is_installed: string | Error = await async_import_meta_rosolve('lodash').catch(error=>error)
if(lodhash_is_installed instanceof Error)
  console.error('lodash not found')
else console.log(`lodash found and its location is -> ${lodash_is_installed}`)
```

___

## JetBrains OSS License

___

I want to thank JetBrains to grant me the Open Source Software license for all their products. This opportunity gives me
strength to keep on going with my studies and personal project.  
To learn more about this opportunity, have a look
at [Licenses for Open Source Development - Community Support](https://www.jetbrains.com/community/opensource/).

_Thank you_
