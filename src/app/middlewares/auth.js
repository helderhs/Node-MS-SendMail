/* eslint-disable no-else-return */

export default async (req, res, next) => {
  if (req.body.pass === process.env.ENVIO_SENHA) {
    return next();
  } else {
    return res.status(401).json({ error: 'Senha Inválida' });
  }
};
