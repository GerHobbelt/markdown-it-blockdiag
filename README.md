# markdown-it-blockdiag

## Install

```
npm install --save markdown-it-blockdiag
```

## Usage

```js
  const md = require('markdown-it')()
    .use(require('markdown-it-blockdiag'), opts)
```

The `opts` object can contain:

Name              | Description                                                    | Default
------------------|----------------------------------------------------------------|-----------------------------------
`generateSourceUrl` | blockdiag API Server URL | https://blockdiag-api.com/
`marker` | marker of blockdiag block | ```

## Runkit Example
* https://runkit.com/embed/t9u6x9i24lr8
