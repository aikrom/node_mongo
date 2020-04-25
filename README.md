# node_mongo
NodeJS, MongoDB, Express, Docker

## What is it?

A simple example using NodeJS + MongoDB and Docker.

## How to use

### Development

Run Docker.

```console
machine@user:~$ ./start.sh
```

This bash file run Docker with development configs (with tracking file changes **server.js**, coping node_modules to host).

Also you can run Docker without bash file

```console
machine@user:~$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

You can run project without Docker.

```console
machine@user:~$ npm i && npm run dev
```

### Production

Run Docker.

```console
machine@user:~$ ./start.prod.sh
```

This bash file run Docker with production configs.

Also you can run Docker without bash file

```console
machine@user:~$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

You can run project without Docker.

```console
machine@user:~$ npm i && npm run start
```
