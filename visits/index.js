const express = require('express');
const redis = require('redis');

const app = express();
const port = process.env.PORT || 8081;
const www = process.env.WWW || './';

const client = redis.createClient({
  host: 'redis',
  port: 6379
});
client.set('visits', 0);

app.use(express.static(www));

console.log(`serving ${www}`);

app.get('*', (req, res) => {
  // process.exit(0); // Used for docker restart policies test
  // process.exit(1); // Used for docker restart policies test
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
