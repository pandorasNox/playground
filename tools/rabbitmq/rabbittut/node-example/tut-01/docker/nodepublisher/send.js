#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// amqp.connect('amqp://localhost', function(err, conn) {
// amqp.connect('amqp://rabbit', function(err, conn) {
// amqp.connect('amqp://rabbit@my-rabbit', function(err, conn) {
amqp.connect('amqp://user:password@rabbit', function(err, conn) {

   if (err) {
      console.log('');
      console.log('amqp connection error:');
      console.log(err);
      console.log('');
      return;
   }

   conn.createChannel(function(err, ch) {
      var q = 'hello';
      var msg = 'Hello World!';

      ch.assertQueue(q, {durable: false});
      // Note: on Node 6 Buffer.from(msg) should be used
      ch.sendToQueue(q, new Buffer(msg));
      console.log(" [x] Sent %s", msg);
   });
   setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
