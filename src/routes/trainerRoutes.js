import { requireAuth } from '../config/passport';
import { create, findAll, findOne, update, remove } from '../controllers/trainerController.js';

export default function(router) {
  // Create a new cour
  router.post('/trainers', requireAuth, create);

  // Retrieve all Users
  router.get('/trainers', requireAuth, findAll);

  // Retrieve a single Note with trainerId
  router.get('/trainers/:trainerId', requireAuth, findOne);

  // Update a Note with trainerId
  router.put('/trainers/:trainerId', requireAuth, update);

  // Delete a Note with noteId
  router.delete('/trainers/:trainerId', requireAuth, remove);
}
