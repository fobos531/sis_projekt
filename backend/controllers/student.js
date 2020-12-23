const Student = require("../models/student");
const StudentEncrypted = require("../models/studentEncrypted");
const mysqlDb = require("../db/mysql");
const StudentValidation = require("../models/studentValidation");

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

exports.getAllEncryption = async (req, res) => {
  try {
    const plain = await Student.find();
    const encrypted = await StudentEncrypted.find().lean();
    res.status(200).json({ success: true, data: { plain, encrypted } });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error });
  }
};

exports.getAllInjectionSafe = async (req, res) => {
  const { phoneNumber } = req.query;

  try {
    const connection = await mysqlDb();
    const [students] = await connection.execute("SELECT * FROM students WHERE phoneNumber = ?", [phoneNumber]);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
};

exports.getAllInjectionUnsafe = async (req, res) => {
  const { phoneNumber } = req.query;

  try {
    const connection = await mysqlDb();
    const [students] = await connection.execute(`SELECT * FROM students WHERE phoneNumber = '${phoneNumber}'`);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
};

exports.userInterfaceValidation = async (req, res) => {
  let { enforced } = req.params;

  enforced = enforced == "true" ? true : false;
  let student;

  try {
    if (enforced) {
      student = await new StudentValidation({ ...req.body }).save();
    } else {
      student = await new Student({ ...req.body }).save();
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
};

exports.getStudentsValidation = async (req, res) => {
  try {
    const validation = await StudentValidation.find();
    const normal = await Student.find();
    res.status(200).send({ sucess: true, data: { validation, normal } });
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
};
