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

- Set JWT Secrets

```sh
$ cd jwt-demo
$ touch source/keys/jwt_secret.ts

# Update source/keys/jwt_secret.ts
export const jwtTokenSecret = <JWT_TOKEN_SECRET>
export const jwtRefreshSecret = <REFRESH_TOKEN_SECRET>

```

- Install Dependencies, Build from Source, & Run App
```sh
$ cd jwt-demo
$ yarn install
$ yarn build
$ yarn start
```

