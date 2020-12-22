const mongoose = require("mongoose");
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;

const studentEncryptedSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

studentEncryptedSchema.plugin(mongooseFieldEncryption, { fields: ["name", "phoneNumber"], secret: "apsolutni_bossevi" });

module.exports = mongoose.model("StudentEncrypted", studentEncryptedSchema);
