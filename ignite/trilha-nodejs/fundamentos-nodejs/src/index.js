// instacia do express
const { response } = require("express");
const express = require("express");

const app = express();

// middleware para se trabalhar com json no express
app.use(express.json());

// metodo GET requisitando informacoes dos cursos e retornando um JSON com os cursos
app.get("/", (request, response) => {
    // query params - filtro ou paginacao
    const query = request.query;

    console.log(query);

    return response.json([ "Curso 1", "Curso 2", "Curso 3" ]);
})

// metodo POST criando um novo curso
app.post("/courses", (request, response) => {
    // body params - obejtos de insercao/alteracao
    const body = request.body;

    console.log(body);

    return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4" ]);
});

// metodo PUT atualizando informacoes de cursos
app.put("/courses/:id", (request, response) => {
    // route params - id para identificacao do user
    const { id } = request.params;

    console.log(id);

    return response.json([ "Curso 1", "Curso 2", "Curso 4", "Curso 6" ]);
});

// metodo PATCH atualizando informacoes de um unico curso
app.patch("/courses/:id", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 4", "Curso 7" ]);
});

// metodo DELETE aagando um curso
app.delete("/courses/:id", (request, response) => {
    return response.json([ "Curso 1", "Curso 2", "Curso 4" ]);
});

app.listen(3333);