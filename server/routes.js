import express from 'express';
const router = express();

import basicController from './controllers/basicController.js';
import userController from './controllers/userController.js';
import postController from './controllers/postController.js';

router.get('/', basicController.get);

/*
  User Routes
*/

/*
  POST http://localhost:3000/api/signup
  {
    "username": "Fazt",
    "password": "whatever"
  }
*/
router.post('/signup', userController.post);

/*
  POST http://localhost:3000/api/post
  {
    "userId": "596549117dccea20f5673bb5",
    "title": "gogole"
    "link": "google.com"
  }
*/

router.post('/post', postController.post);

/*
  GET http://localhost:3000/api/post/596549117dccea20f5673bb5
*/
router.get('/post', postController.getAll);

export default router;
