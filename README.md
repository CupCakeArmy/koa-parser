# Koa Body Parser
Koa-Middleware for parsing body parameters in the request. Lightweight and no dependencies.
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
