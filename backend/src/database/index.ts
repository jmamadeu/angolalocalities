import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';

export default async function sqliteConnection() {
  const connectionOptions = await getConnectionOptions('default');

  return createConnection(connectionOptions)
    .then((connection) => console.log('database connected', connection.name))
    .catch((err) => console.log(err));
}
