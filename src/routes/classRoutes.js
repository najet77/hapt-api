import { requireAuth } from '../config/passport';
import { create, findAll, findOne, update, remove } from '../controllers/classController.js';

export default function(router) {
  // Create a new class
  router.post('/classs', requireAuth, create);

  // Retrieve all Users
  router.get('/classs', requireAuth, findAll);

  // Retrieve a single Note with classId
  router.get('/classs/:classId', requireAuth, findOne);

  // Update a Note with classId
  router.put('/classs/:classId', requireAuth, update);

  // Delete a Note with noteId
  router.delete('/classs/:classId', requireAuth, remove);
}
