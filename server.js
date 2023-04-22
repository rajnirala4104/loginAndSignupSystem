const {createServer} = require('http')
const app = require('./app')
const port = 8080;
const server = createServer(app)
server.listen(port, ()=>{
    console.log(`your server has started at ${port} port: http://127.0.0.1:${port}`)
})