import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ ok: true }));

app.use(express.json());

export default app;
