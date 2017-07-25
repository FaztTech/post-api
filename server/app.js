import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();

mongoose.connect('mongodb://localhost/apiReddit', () => {
  console.log('connected to MongoDb.')
});

import routes from './routes';

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(bodyParser.json());

// routes
app.use('/api', routes);

export default app;
