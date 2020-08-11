var express = require('express');
var amp = require('amqplib/callback_api');

var app = express();
const port = 3001;

// security layer

// connect and create channel
amp.connect('amqp://127.0.0.1', function(error, connection) {
  if(error) throw Error(error);
  connection.createChannel(function(error, channel) {
    if(error) throw Error(error);
    var queue = 'FirstQueue';
    var message = { type: '2', content: 'Hello RabbitMQ' };

    channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    console.info('message was sent...')
  });

  setTimeout(function() {
    connection.close();
    process.exit(0);
  }, 500);
});

app.listen(port, function() { console.log(`client running on port ${port}`) });

