const Student = require("../models/student");
const StudentEncrypted = require("../models/studentEncrypted");

exports.addPlain = async (req, res) => {
  try {
    const student = await new Student({ ...req.body }).save();
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.addEncrypted = async (req, res) => {
  try {
    const newStudent = await new StudentEncrypted({ ...req.body }).save();
    const student = await StudentEncrypted.findById(newStudent._id).lean();
    res.status(200).json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const plain = await Student.find();
    const encrypted = await StudentEncrypted.find().lean();
    res.status(200).json({ success: true, data: { plain, encrypted } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error });
  }
};
