const express = require('express');
const app = express();
app.use(express.json());

app.post('/sos', (req, res) => res.send('SOS received'));
app.post('/subscribe', (req, res) => res.send('Subscribed successfully'));
app.post('/report', (req, res) => res.send('Report logged'));

app.listen(5000, () => console.log('Backend running on port 5000'));
