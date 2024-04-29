import http from 'http'

//Criar um usuário (name,email,senha)
//req chama, res responde

const users = []

const server = http.createServer((req, res)=> {
    const { method, url} = req

    if (method == 'GET' && url == '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id:1,
            name: 'Jorgirerison',
            email:'jorgirerison@gmail.com'
        })

        return res.end('Criação de usuários')
    }

    return res.end('Hellow world')
})

server.listen(3333)

//localhost:3333