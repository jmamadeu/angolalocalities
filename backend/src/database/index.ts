import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

export default async function sqliteConnection() {
  return await createConnection()
    .then((connection) => console.log('database connected', connection.name))
    .catch((err) => console.log(err));
}
