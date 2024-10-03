const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Inicializando o app
const app = express();

// Middleware
app.use(bodyParser.json());


// Create
app.post('/microservico/', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL do micro serviço no container apps

    // Fazer a requisição HTTP POST
    axios.post(url, req)
      .then(response => {
        // Exibe os dados da resposta (response)
        res = response.data;
      })
      .catch(error => {
        // Lida com erros de requisição
        res = error.message;
      });
      return res;
});
app.post('/function/', (req, res) => {
    const url = 'https://crudgustavo.azurewebsites.net/api/inserirpessoa'; // URL da func

    // Fazer a requisição HTTP POST
    axios.post(url, req)
      .then(response => {
        // Exibe os dados da resposta (response)
        res = response.data;
      })
      .catch(error => {
        // Lida com erros de requisição
        res = error.message;
      });
      return res;
});

//Read
app.get('/microservico/', (req, res) => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // URL do micro serviço no container apps

    axios.get(url)
    .then(response => {
      // Imprimir os dados da resposta (response)
      res = response.data;
    })
    .catch(error => {
      // Lida com erros da requisição
      res = error.message;
    });
    return res;
    
});

app.get('/function/', (req, res) => {
    const url = 'https://crudgustavo.azurewebsites.net/api/pesquisarpessoas'; // URL do micro serviço no container apps

    axios.get(url)
    .then(response => {
      // Imprimir os dados da resposta (response)
      res = response.data;
    })
    .catch(error => {
      // Lida com erros da requisição
      res = error.message;
    });
    return res;
    
});

//Update
app.get('/microservico/', (req, res) => {
  const url = ''; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.put(url, req)
  .then(response => {
    // Imprimir os dados da resposta (response)
    res = response.data;
  })
  .catch(error => {
    // Lidar com erros de requisição
    res = error.message;
  });
  
});

app.get('/function/', (req, res) => {
  const url = 'https://crudgustavo.azurewebsites.net/api/editarpessoa'; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.put(url, req)
  .then(response => {
    // Imprimir os dados da resposta (response)
    res = response.data;
  })
  .catch(error => {
    // Lidar com erros de requisição
    res = error.message;
  });
  
});

//Delete
app.get('/microservico/', (req, res) => {
  const url = ''; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.delete(url, req)
  .then(response => {
    // Imprimir os dados da resposta (response)
    res = response.data;
  })
  .catch(error => {
    // Lidar com erros de requisição
    res = error.message;
  });
  
});

app.get('/function/', (req, res) => {
  const url = 'https://crudgustavo.azurewebsites.net/api/excluirpessoa'; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.delete(url, req)
  .then(response => {
    // Imprimir os dados da resposta (response)
    res = response.data;
  })
  .catch(error => {
    // Lidar com erros de requisição
    res = error.message;
  });
  
});


// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
