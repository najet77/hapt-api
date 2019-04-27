import { requireAuth } from "../config/passport";
import {
  create,
  findAll,
  findOne,
  update,
  remove
} from "../controllers/classeController.js";

export default function(router) {
  // Create a new classe
  router.post("/classes", requireAuth, create);

  // Retrieve all Users
  router.get("/classes", requireAuth, findAll);

  // Retrieve a single Note with classeId
  router.get("/classes/:classeId", requireAuth, findOne);

  // Update a Note with classeId
  router.put("/classes/:classeId", requireAuth, update);

  // Delete a Note with noteId
  router.delete("/classes/:classeId", requireAuth, remove);
}
