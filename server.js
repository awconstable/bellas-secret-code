const emojis = require('emojis-unicode');

const secretCode = require('./secret-code');
const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

  app.set('view engine', 'pug');

  app.use(express.static(__dirname + '/public'));

  app.get('/', (req, res) => {
    res.render('index', {
        title: 'Homepage',
        emoji: String.fromCodePoint('0x' + secretCode.encode('b'))
      });
  });
