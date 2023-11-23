import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGO_DB || '')
mongoose.Promise = global.Promise

const TarefaSchema = new Schema({
  _id: Number,
  name: String,
  description: String,
  tag: String,
  user: String
})

const Tarefas =
  mongoose.models.tarefas || mongoose.model('tarefas', TarefaSchema)
export default Tarefas
