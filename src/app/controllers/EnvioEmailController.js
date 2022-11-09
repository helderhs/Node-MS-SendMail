import * as Yup from 'yup';
import Envio_Email from '../models/Envio_Email';

class EnvioEmailController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email('Email inválido')
        .required('Email nescessario'),
      assunto: Yup.string().required('Assunto é obrigatório'),
      body: Yup.string().required('Body é obrigatório'),
    });

    req.body.controle = req.body.controle1;

    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(500).json({ type: err.name, message: err.message });
    }

    const email = await Envio_Email.create(req.body);

    return res.json(email);
  }
}

export default new EnvioEmailController();
