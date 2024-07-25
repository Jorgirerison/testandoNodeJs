import http from 'http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

//Criar um usuário (name,email,senha)
//req chama, res responde

const server = http.createServer(async (req, res) => {
    const { method, url} = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method == method && route.path == url
    })

    if (route) {
        return route.handler(req, res)
    }

    return res.writeHead(404).end('Hellow world')
})

server.listen(3333)

//localhost:3333j