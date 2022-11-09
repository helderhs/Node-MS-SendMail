import Sequelize, { Model } from 'sequelize';

class Envio_Email extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: Sequelize.STRING,
        controle: Sequelize.STRING,
        controle2: Sequelize.STRING,
        email: Sequelize.STRING,
        assunto: Sequelize.STRING,
        body: Sequelize.STRING,
        data_enviado: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Envio_Email;
