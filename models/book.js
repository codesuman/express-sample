const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    isgn: {
        type: String,
        trim: true,
        required: [true, 'Please add a ISBN'],
        unique: true,
        maxlength: [13, 'ISBN needs to be 13 digits long']
    },
    name: {
        type: String,
        required: [true, "Please add the book name"]
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
});

module.exports = mongoose.model("Book", BookSchema);