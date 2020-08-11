var express = require('express');
var amp = require('amqplib/callback_api');

var app = express();
var port = 3000;

// security layer

// connect and create a channel and listen through the it
amp.connect('amqp://127.0.0.1', function(error, connection) {
  if(error) throw Error(error);
  connection.createChannel(function(error, channel) {
    if(error) throw Error(error);
    var queue = 'FirstQueue';

    channel.assertQueue(queue, { durable: false });
    console.log(`waiting for message in ${queue}`);

    // consume message from queue
    channel.consume(queue, function(message) {
      console.log(`Received ${message.content}`);
    }, { noAck: true });
  });
});

app.listen(port, function() { console.log(`server listening on port ${port}`); });
