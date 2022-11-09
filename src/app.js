/* eslint-disable import/first */
//import dotenv from 'dotenv';

//dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });
import 'dotenv/config';
import cron from 'node-cron';
import express from 'express';
import routes from './routes';
import PostMailService from './app/services/PostMailService';
// Importando nossa database
import './database';

class App {
  constructor() {
    process.env.TZ = 'America/Sao_Paulo';
    this.server = express();

    this.middlewares();
    this.routes();
    // SERVIÇO DE ENVIO DE EMAIL
    const tempo = process.env.ENVIO_CRON_INSEGUNDOS;
    //console.log(tempo);
    cron.schedule(`*/${tempo} * * * * *`, () => PostMailService.execute());
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
