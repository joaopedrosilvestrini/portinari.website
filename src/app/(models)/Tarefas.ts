import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGO_DB || '')
mongoose.Promise = global.Promise

const TarefaSchema = new Schema({
  _id: String,
  name: String,
  description: String,
  tag: String,
  user: String
})

const Tarefas =
  mongoose.models.servers || mongoose.model('tarefas', TarefaSchema)
export default Tarefas
