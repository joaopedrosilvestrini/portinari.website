import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGO_DB || '')
mongoose.Promise = global.Promise

const UserSchema = new Schema({
  _id: String,
  email: String,
  password: String,
  name: String,
  icon: String,
  tag: Number,
  roles: [],
})

const Users =
  mongoose.models.servers || mongoose.model('users', UserSchema)
export default Users
