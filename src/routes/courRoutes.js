import { requireAuth } from "../config/passport";
import {
  create,
  findAll,
  findOne,
  update,
  remove
} from "../controllers/courController.js";

export default function(router) {
  // Create a new cour
  router.post("/cours", requireAuth, create);

  // Retrieve all Users
  router.get("/cours", requireAuth, findAll);

  // Retrieve a single Note with courId
  router.get("/cours/:courId", requireAuth, findOne);

  // Update a Note with courId
  router.put("/cours/:courId", requireAuth, update);

  // Delete a Note with noteId
  router.delete("/cours/:courId", requireAuth, remove);
}
