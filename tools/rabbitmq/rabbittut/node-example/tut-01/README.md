This is a test with RabbitMQ

- based on the official rabbitmq tut (https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
- using docker
- using docker "rabbitmq:3.7.4-management-alpine" image
- `docker pull rabbitmq:3.7.4-management-alpine`
- using docker "node:8.10.0-alpine" image
- `docker pull node:8.10.0-alpine`
- using docker-compose
- @see docker-compose file and docker folder
- run `docker-compose build`
- run `docker-compse up`
- connect to the nodepublisher container
    - run `docker exec -it tut01_nodepublisher_1 sh`
    - run `cd nodepublisher/`
    - run `yarn run send` to send the hello world message
- check if the message is queued in rabbit
    - in browser go to `localhost:8080`
    - login with user = "user" and password = "password"
- connect to the nodeconsumer container
    - run `docker exec -it tut01_nodeconsumer_1 sh`
    - run `cd nodeconsumer/`
    - run `yarn run receive`
    - expect:
        [*] Waiting for messages in hello. To exit press CTRL+C
        [x] Received Hello World!

Done!
