const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

// Inicializando o app
const app = express();

// Middleware
app.use(bodyParser.json());

// Create
app.post('/microservico/', (req, res) => {
    const url = 'https://hiscaredev.happyplant-544fa1ec.eastus.azurecontainerapps.io/users/'; // URL do micro serviço no container apps

    // Fazer a requisição HTTP POST
    axios.post(url, req.body)
      .then(response => {
        // Envia os dados da resposta (response) para o cliente
        res.json(response.data);
      })
      .catch(error => {
        // Lida com erros de requisição
        res.status(500).send(error.message);
      });
});

app.post('/function/', (req, res) => {
    const url = 'https://crudgustavo.azurewebsites.net/api/inserirpessoa'; // URL da func

    // Fazer a requisição HTTP POST
    axios.post(url, req.body)
      .then(response => {
        // Envia os dados da resposta (response) para o cliente
        res.json(response.data);
      })
      .catch(error => {
        // Lida com erros de requisição
        res.status(500).send(error.message);
      });
});

// Read All
app.get('/microservico/', (req, res) => {
    const id = req.query.id; //Obtém o id da query string
    const url = 'https://hiscaredev.happyplant-544fa1ec.eastus.azurecontainerapps.io/users/'; // URL do micro serviço no container apps

    if (id) {
      url = `https://hiscaredev.happyplant-544fa1ec.eastus.azurecontainerapps.io/users/${id}`;
    }

    axios.get(url)
    .then(response => {
      // Envia os dados da resposta (response) para o cliente
      res.json(response.data);
    })
    .catch(error => {
      // Lida com erros da requisição
      res.status(500).send(error.message);
    });
});

app.get('/function/', (req, res) => {
  const crm = req.query.crm; // Obtém o crm da query string
  let url = 'https://crudgustavo.azurewebsites.net/api/pesquisarpessoas'; // URL da função

  // Se o crm for fornecido, alteramos a URL para buscar o médico específico
  if (crm) {
      url = `https://crudgustavo.azurewebsites.net/api/pesquisarpessoa?crm=${crm}`;
  }

  // Fazer a requisição HTTP GET
  axios.get(url)
    .then(response => {
      // Exibe os dados da resposta (response)
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      // Lida com erros de requisição
      res.status(error.response ? error.response.status : 500).send(error.message);
    });
});

// Update
app.put('/microservico/', (req, res) => {
  const crm = req.query.crm;
  const url = `https://hiscaredev.happyplant-544fa1ec.eastus.azurecontainerapps.io/users/${crm}`; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.put(url, req.body)
  .then(response => {
    // Envia os dados da resposta (response) para o cliente
    res.json(response.data);
  })
  .catch(error => {
    // Lidar com erros de requisição
    res.status(500).send(error.message);
  });
});

app.put('/function/', (req, res) => {
  const url = 'https://crudgustavo.azurewebsites.net/api/editarpessoa'; // URL do micro serviço no container apps

  // Fazer a requisição HTTP PUT para atualizar o recurso
  axios.put(url, req.body)
  .then(response => {
    // Envia os dados da resposta (response) para o cliente
    res.json(response.data);
  })
  .catch(error => {
    // Lidar com erros de requisição
    res.status(500).send(error.message);
  });
});

// Delete
app.delete('/microservico/', (req, res) => {
  const crm = req.query.crm; // Obtém o crm da query string
  const url = `https://hiscaredev.happyplant-544fa1ec.eastus.azurecontainerapps.io/users/${crm}`; // URL do micro serviço no container apps

  // Fazer a requisição HTTP DELETE para excluir o recurso
  axios.delete(url, { data: req.body })
  .then(response => {
    // Envia os dados da resposta (response) para o cliente
    res.json(response.data);
  })
  .catch(error => {
    // Lidar com erros de requisição
    res.status(500).send(error.message);
  });
});

app.delete('/function/', (req, res) => {
  const crm = req.query.crm; // Obtém o crm da query string
  const url = `https://crudgustavo.azurewebsites.net/api/excluirpessoa?crm=${crm}`; // Adiciona o crm na URL

  // Fazer a requisição HTTP DELETE
  axios.delete(url)
    .then(response => {
      // Exibe os dados da resposta (response)
      res.status(response.status).send(response.data);
    })
    .catch(error => {
      // Lida com erros de requisição
      res.status(error.response ? error.response.status : 500).send(error.message);
    });
});

// Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
