import 'reflect-metadata';
import express from 'express';

import sqliteConnection from './database';

sqliteConnection();

const app = express();

app.get('/', (req, res) => res.json({ ok: true }));

app.use(express.json());

export default app;
