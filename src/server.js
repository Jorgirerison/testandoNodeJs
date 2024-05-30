import http from 'http'
import { json } from './middlewares/json.js'

//Criar um usuário (name,email,senha)
//req chama, res responde

const users = []

 const server = http.createServer(async (req, res) => {
    const { method, url} = req

    await json(req, res)

    if (method == 'GET' && url == '/users') {
        return res
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        // desestruturacao
        const {name,email} = req.body

        users.push({
            id:1,
            name,
            email,
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Hellow world')
})

server.listen(3333)

//localhost:3333