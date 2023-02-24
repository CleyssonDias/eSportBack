import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({ letsCode:"Hello World" });
});

app.listen(7777, () => {
  console.log('Server is listening 🚀');
});