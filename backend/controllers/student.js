const Student = require("../models/student");
const StudentEncrypted = require("../models/studentEncrypted");
const mysqlDb = require("../db/mysql");

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

  console.log(`SELECT * FROM students WHERE phoneNumber = '${phoneNumber}'`);

  try {
    const connection = await mysqlDb();
    const [students] = await connection.execute(`SELECT * FROM students WHERE phoneNumber = '${phoneNumber}'`);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).send({ success: false, error });
  }
};
