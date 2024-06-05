import http from 'http'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

//Criar um usuário (name,email,senha)
//req chama, res responde

const database = new Database()

 const server = http.createServer(async (req, res) => {
    const { method, url} = req

    await json(req, res)

    if (method == 'GET' && url == '/users') {
        const users = database.select('users')

        return res
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        // desestruturacao
        const {name,email} = req.body

        const user = {
            id:1,
            name,
            email,
        }

        database.insert('users', user)

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end('Hellow world')
})

server.listen(3333)

//localhost:3333