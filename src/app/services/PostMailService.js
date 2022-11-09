/* eslint-disable radix */
import 'dotenv/config';
import SendMail from './SendMail';
import Envio_Email from '../models/Envio_Email';

class PostMailService {
  async execute() {
    await this.pegarEmailAEnviar();
  }

  async pegarEmailAEnviar() {
    const emails = await Envio_Email.findAll({
      limit: parseInt(process.env.ENVIO_NUMERO_EMAILS),
      where: { data_enviado: null },
    });
    //console.log(emails);

    emails.forEach(email => {
      SendMail.execute(email.assunto, email.email);
      email.data_enviado = new Date();
      email.save();
      //console.log(email);
    });

    return emails;
  }
}

export default new PostMailService();
