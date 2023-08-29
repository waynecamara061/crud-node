const express = require('express');

const server = express();

server.use(express.json());

const cursos = [
    "Front-end",
    "Back-end",
    "Full stack"
];

// Retorna um curso
server.get("/cursos/:index", (req, res) => {
    const { index } = req.params;
    //.params = contém os valores de paremtros de rotas definidos na URL 

    return res.json(cursos[index]);
    // resposta em formato JSON {...} buscando dentro do curso a posição do id (nesse caso é index).
});


// Retorna todos os cursos
server.get("/cursos", (req, res) => {
    return res.json(cursos)
    // mesma logica que a linha 18, só que dessa vez não queremos o id
});


// Criar um novo curso 
server.post("/cursos", (req, res) => {
    // Vamos pega um name
    // .body contém dados enviados no corpo de uma slicitação
    const { name } = req.body;
    // vamos empurrar esse valor "nome" para a nossa variavel cursos.
    cursos.push(name);

    return res.json(cursos);
})


// Atualizar um curso 
server.put("/cursos/:index", (req, res) => {
    // Vamos pegar esse ID (index) por meio dos parametros da url
    const { index } = req.params;
    // Vamos pegar esse name e atualizar no corpo 
    const { name } = req.body;
    cursos[index] = name;

    return res.json(cursos);
})

// Deletando curso
server.delete("/cursos/:index", (req, res) => {
    // Vamos pegar esse ID (index) por meio dos parametros da url
    const { index } = req.params;

    // Usando o metodo splice do JS vamos deletar o curso por meio do id (index).
    cursos.splice(index, 1);

    return res.json({ message: "O curso foi deletado" })
})



server.listen(3000);