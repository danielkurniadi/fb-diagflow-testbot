const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const verificationController = require('./controllers/verification');
const webhookControler = require('./controllers/messageWebhook');

app.get('/', verificationController);
app.post('/', webhookControler);

app.listen(3000, () => console.log('Webhook is listening port 3000'));