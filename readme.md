### JWT Microservice Demo 

To Check This, 

- Provide Database Connection URL/String

```sh
$ cd jwt-demo
$ touch source/keys/mongo_connection_str.ts

# Update source/keys/mongo_connection_str.ts
const mongoConnUrl = <MONGO_CONN_URL>
export default mongoConnUrl

```

- Install Dependencies & Run App
```sh
$ cd jwt-demo
$ yarn install
$ yarn start
```

