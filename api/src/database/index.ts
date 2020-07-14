import { createConnection } from 'typeorm';

export default async function sqliteConnection() {
  return createConnection({
    type: 'sqlite',
    database: './db.sqlite',
    name: 'default',
    synchronize: true,
    entities: ['./entity/*.ts'],
  })
    .then((connection) => console.log('database connected', connection.name))
    .catch((err) => console.log(err));
}
