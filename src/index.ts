import express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb://root:root@localhost:27017').then(() => {
  const app = express();
  const PORT = process.env.PORT || 3333;

  app.use('uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
  app.use(express.json());
  app.use(router);

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
}).catch(console.error);




