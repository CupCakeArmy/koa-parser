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
	router = require('koa-simple-router'),
	parser = require('cca-koa-parser')

const
	app = new Koa(),
	port = 3001

app.use(parser)

app.use(router({}, _ => {
	_.post('/', (c, n) => {
		c.body = [200, c.request.body]
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
