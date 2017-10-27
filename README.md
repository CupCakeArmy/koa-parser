# Koa Body Parser

[![npm](https://img.shields.io/npm/v/cca-koa-parser.svg)](https://www.npmjs.com/package/cca-koa-parser)
[![npm](https://img.shields.io/npm/dt/cca-koa-parser.svg)]()
[![npm](https://img.shields.io/npm/l/cca-koa-parser.svg)]()

Koa-Middleware for parsing body parameters in the request. Lightweight and no dependencies.

### Install
```bash
npm install cca-koa-parser --save
```

### QA

If you have questions:

[![Join the chat at https://gitter.im/cupcakearmy/koa-parser](https://badges.gitter.im/cupcakearmy/koa-parser.svg)](https://gitter.im/cupcakearmy/koa-parser?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

##### Supported encodings:
- form-data
- x-www-form-urlencoded
- json

### Complete Example
```javascript
const
	Koa = require('koa'),
	parser = require('cca-koa-parser'),
	router = require('cca-koa-router')

const
	app = new Koa(),
	port = 3000

app.use(parser)

app.use(router(_ => {
	_.post('/', (c, n) => {
		c.body = c.request.body
	})
}))

app.listen(port)
```

## Documentation

##### ~ `body` Element
The Parser defines an object `ctx.request.body` where all the sent parameters are stored

###### Example
```javascript
// Request: HTTP POST /
ctx.request.body['username'] => "joe"
```
