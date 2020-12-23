const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    match: /^[a-zA-ZćčšžđĆČŠŽĐ ]+$/u,
    required: true,
  },
  phoneNumber: {
    type: String,
    match: /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/,
    required: true,
  },
});

module.exports = mongoose.model("StudentValidation", studentSchema);
