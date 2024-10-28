instalação
yarn add -D typescript @types/node @types/express ts-node-dev

yarn add express

./node_modules/.bin/tsc --init

npm install node-fetch

Ajustamos o package.json para executar o nodemon com o ts-node-dev

"scripts": {
    "dev": "nodemon --exec ts-node-dev src/server.ts"
  },