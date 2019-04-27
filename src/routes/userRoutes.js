import { requireAdmin } from "../config/roles";
import { requireAuth } from "../config/passport";
import {
  create,
  findAll,
  findOne,
  update,
  remove
} from "../controllers/userController.js";

export default function(router) {
  // Create a new user
  router.post("/users", requireAuth, requireAdmin, create);

  // Retrieve all Users
  router.get("/users", requireAuth, requireAdmin, findAll);

  // Retrieve a single Note with userId
  router.get("/users/:userId", requireAuth, requireAdmin, findOne);

  // Update a Note with userId
  router.put("/users/:userId", requireAuth, requireAdmin, update);

  // Delete a Note with noteId
  router.delete("/users/:userId", requireAuth, requireAdmin, remove);
}
