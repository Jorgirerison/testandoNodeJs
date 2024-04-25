import http from 'http'

//Criar um usuário (name,email,senha)
//req chama, res responde

    

const server = http.createServer((req, res)=> {
    const { method, url} = req

    if (method == 'GET' && url == '/users') {
        return res.end('Listagem de usuários')
    }

    if (method == 'POST' && url == '/users') {


        return res.end('Criação de usuários')
    }

    return res.end('Hellow world')
})

server.listen(3333)

//localhost:3333