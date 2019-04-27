import Cour from "../models/cour";

// Create and Save a new Cour
export const create = async (req, res) => {
  try {
    let cour = new Cour(req.body);
    cour = await cour.save().then(newCour => newCour);

    return res.status(201).json(cour);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Retrieve and return all cours from the database.
export const findAll = async (req, res) => {
  try {
    const cours = await Cour.find()
      .populate({ path: "students", model: "User", select: "-password" })
      .populate("formations");

    return res.status(200).json(cours);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Find a single cour with a courId
export const findOne = async (req, res) => {
  try {
    const cour = await Cour.findById(req.params.courId)
      .populate({ path: "students", model: "User", select: "-password" })
      .populate("formations");
    if (!cour) {
      return res.status(404).send({
        message: "Cour not found with id " + req.params.courId
      });
    }
    return res.status(200).json(cour);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Update a cour identified by the courId in the request
export const update = async (req, res) => {
  // Find cour and update it with the request body
  try {
    const cour = await Cour.findByIdAndUpdate(
      req.params.courId,
      { $set: req.body },
      { new: true }
    );
    if (!cour) {
      return res.status(404).send({
        message: "Cour not found with id " + req.params.courId
      });
    }
    return res.status(200).json(cour);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Delete a cour with the specified courId in the request
export const remove = async (req, res) => {
  try {
    const cour = await Cour.findByIdAndRemove(req.params.courId);
    if (!cour) {
      return res.status(404).send({
        message: "Cour not found with id " + req.params.courId
      });
    }
    return res.status(204).json({ message: "Cour deleted successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
