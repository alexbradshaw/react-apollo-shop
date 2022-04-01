const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Listing = require('./Listing');

const userSchema = new Schema({
    username: {
      type: String,
      required: 'You need to have a Username!',
      minlength: 4,
      maxlength: 15,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: 'You need to have a Email!',
      validate: [validator.isEmail, 'Please fill a valid email address'],
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: 'You need to have a Password!',
      minlength: 8,
      trim: true,
    },
    theme: {
      type: Boolean,
      default: true
    },
    watchlist: [
      {
        listing_id: {
          type: Schema.Types.ObjectId,
          ref:'Listing'
        }
      }
    ]
    // on resolver do .populate() https://mongoosejs.com/docs/populate.html#query-conditions
    // todo: figure out how to cascade ONDELETE
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
