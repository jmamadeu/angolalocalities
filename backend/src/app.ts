import express from 'express';

import sqliteConnection from './database';

sqliteConnection();

const app = express();

app.use(express.json());

export default app;
