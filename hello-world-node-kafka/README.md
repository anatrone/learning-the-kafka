# Hello World Kafka (using Node)

## Dependencies

- [Docker](https://docs.docker.com/install/)
- [Node.js](https://nodejs.org/en/) >= 16.0.0
- [NPM](https://docs.npmjs.com/cli/v8/commands/npm-install)

## Getting started

- Install dependencies:
  ``` bash
  $ npm install
  ```

- Zookeeper and Kafka:
  ``` bash
  $ docker-compose up -d
  ```
  
- Run the scripts:
  - Producer:  
    ``` bash
    $ npm run start:producer
    ```
  - Consumer:
    ``` bash
    $ npm run start:consumer
    ```
