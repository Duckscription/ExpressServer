const path = require('path');
const express = require('express');

module.exports = function (database) {
  const app = express();

  app.use(express.json());

  // serve the react app if request to /
  app.use(express.static(path.join(__dirname, 'build')));

  /** Auth0 Routes **/
  // app.post('/callback', (req, res) => {
  //   // store user in the database if doesnt already exist
  //   const { id_token, state } = req.body;
  //   res.send({ id_token, state });
  // });

  // app.get('/api/profile', checkAuth, (req, res) => {
  //   res.send({ ...req.oidc?.user });
  // });

  /** CRUD Routes **/
  const accountId = '1asd'; // hardcoded for now

  app.get('/api/subs', async (req, res) => {
    try {
      const result = await database.getAllSubs(accountId);
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  });

  app.get('/api/subs/:id', async (req, res) => {
    const subId = req.params.id;
    try {
      const result = await database.getSub(subId, accountId);
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  });

  app.post('/api/subs/add', async (req, res) => {
    const subInfo = req.body;
    console.log('this is the subInfo', subInfo);
    try {
      const result = await database.addNewSub(subInfo, accountId);
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  });

  app.put('/api/subs/update/:id', async (req, res) => {
    const subId = req.params.id;
    const subInfo = req.body;
    console.log('this is the subInfo', subInfo);
    try {
      const result = await database.updateSub(subId, subInfo, accountId);
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  });

  app.delete('/api/subs/delete/:id', async (req, res) => {
    const subId = req.params.id;
    try {
      const result = await database.deleteSub(subId, accountId);
      console.log(result);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error });
    }
  });

  /** Render react files **/

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });

  return app;
};
