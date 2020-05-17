import { createPersona } from '../controllers/persona.controller';

const express = require('express');

function PersonaApi(app) {
  const router = express.Router();
  app.use('/api/persona', router);

  router.post('/', createPersona);
}

module.exports = PersonaApi;
