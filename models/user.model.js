const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    birthDate: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    roles: { type: Array, required: true }
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;