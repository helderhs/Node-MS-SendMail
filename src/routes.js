import { Router } from 'express';
import authMiddleware from './app/middlewares/auth';

import EnvioEmailController from './app/controllers/EnvioEmailController';

//const express = require('express');

const routes = new Router();

// rotas sem autenticação
routes.get('/', function(req, res) {
  res.send('Seja Bem vindo');
});

// Todas rotas abaixo desse middleware precisa estar autenticado
routes.use(authMiddleware);

routes.post('/envioEmail', EnvioEmailController.store);

export default routes;
