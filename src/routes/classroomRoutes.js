import { requireAuth } from '../config/passport';
import { create, findAll, findOne, update, remove } from '../controllers/classroomController.js';

export default function(router) {
  // Create a new class
  router.post('/classrooms', requireAuth, create);

  // Retrieve all Users
  router.get('/classrooms', requireAuth, findAll);

  // Retrieve a single Note with classId
  router.get('/classrooms/:classId', requireAuth, findOne);

  // Update a Note with classId
  router.put('/classrooms/:classId', requireAuth, update);

  // Delete a Note with noteId
  router.delete('/classrooms/:classId', requireAuth, remove);
}
