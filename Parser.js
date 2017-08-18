const TYPES = {
	'multipart/form-data': (b) => {
		let bObj = {}
		b = b.split('\r\n')
		const n = Math.floor(b.length / 4)
		for (let i = 0; i < n; i++) {
			const
				tmp = i * 4,
				key = b[tmp + 1].split(';')[1].split('=')[1].slice(1, -1),
				value = b[tmp + 3]

			bObj[key] = value
		}
		return bObj
	},
	'application/x-www-form-urlencoded': (b) => {
		let bObj = {}
		b.split('&').forEach(v => {
			const tmp = v.split('=')
			bObj[unescape(tmp[0])] = unescape(tmp[1])
		})
		return bObj
	},
	'application/json': (b) => {
		return JSON.parse(b)
	},
}

module.exports = async(c, n) => {
	await new Promise((res) => {
		let bodyStr = ''

		c.req.on('data', (chunk) => {
			bodyStr += chunk.toString()
		})
		c.req.on('end', () => {
			let bodyObj = {}
			if (c.request.header['content-type'] !== undefined) {
				const curType = c.request.header['content-type'].split(';')[0]
				for (const i in TYPES)
					if (curType === i)
						try {
							bodyObj = TYPES[i](bodyStr)
						} catch (e) {
							bodyObj = {}
						}
			}
			c.request.body = bodyObj
			res()
		})
	})
	await n()
}