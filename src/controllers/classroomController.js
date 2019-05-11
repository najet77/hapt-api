import Class from '../models/classroom';

// Create and Save a new Class
export const create = async (req, res) => {
  try {
    let classObj = new Class(req.body);
    classObj = await Class.save().then(newClass => newClass);
    return res.status(201).json(classObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Retrieve and return all classs from the database.
export const findAll = async (req, res) => {
  try {
    const classs = await Class.find()
      .populate({ path: 'students', model: 'User', select: '-password' })
      .populate('formations');
    return res.status(200).json(classs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Find a single class with a classId
export const findOne = async (req, res) => {
  try {
    const classObj = await Class.findById(req.params.classId)
      .populate({ path: 'students', model: 'User', select: '-password' })
      .populate('formations');
    if (!classObj) {
      return res.status(404).send({
        message: 'Class not found with id ' + req.params.classId
      });
    }
    return res.status(200).json(classObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Update a class identified by the classId in the request
export const update = async (req, res) => {
  // Find class and update it with the request body
  try {
    const classObj = await Class.findByIdAndUpdate(req.params.classId, { $set: req.body }, { new: true });
    if (!classObj) {
      return res.status(404).send({
        message: 'Class not found with id ' + req.params.classId
      });
    }
    return res.status(200).json(classObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

// Delete a class with the specified classId in the request
export const remove = async (req, res) => {
  try {
    const classObj = await Class.findByIdAndRemove(req.params.classId);
    if (!classObj) {
      return res.status(404).send({
        message: 'Class not found with id ' + req.params.classId
      });
    }
    return res.status(204).json({ message: 'Class deleted successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
