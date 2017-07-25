import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: 'string',
    required: true,
    minLength: [5, 'Username must be 5 characters at least.']
  },
  password: {
    type: 'string',
    required: true,
    minLength: [8, 'Password must be 8 characters at least.']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('User', userSchema);

export default User;
