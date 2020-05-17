// eslint-disable-next-line import/prefer-default-export
export function createPersona(req, res) {
  console.log(req.body);
  res.send('recibido pero no manda ni turca');
};
