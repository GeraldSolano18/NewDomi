const express = require('express');
const { UserMock } = require('../utils/mocks/userMock');

function UsersApi(app) {
  const router = express.Router();
  app.use('/api/users', router);

  router.get('/', async (req, res, next) => {
    try {
      const users = await Promise.resolve(UserMock);
      res.status(200).json({
        data: users,
        message: 'usuarios listados WTF',
      });

    } catch (err) {
      next(err);
    }
  });
  router.get('/:userId', async (req, res, next) => {
    try {
      const users = await Promise.resolve(UserMock[8]);
      res.status(200).json({
        data: users,
        message: 'usuarios listados WTF',
      });

    } catch (err) {
      next(err);
    }
  });
  router.post('/', async (req, res, next) => {
    try {
      const createuser = await Promise.resolve(UserMock[0].id);
      res.status(201).json({
        data: createuser,
        message: 'usuario creado',
      });

    } catch (err) {
      next(err);
    }
  });
  router.put('/:userId', async (req, res, next) => {
    try {
      const updateUser = await Promise.resolve(UserMock[0].id);
      res.status(200).json({
        data: updateUser,
        message: 'usuario actualizado',
      });

    } catch (err) {
      next(err);
    }
  });
  router.delete('/:userId', async (req, res, next) => {
    try {
      const deleteduser = await Promise.resolve(UserMock[0].id);
      res.status(200).json({
        data: deleteduser,
        message: 'usuarios eliminado',
      });

    } catch (err) {
      next(err);
    }
  });
}
module.exports = UsersApi;
