import mongoose from 'mongoose'

export const TodoSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
})

TodoSchema.statics = {
  list({ skip = 0, limit = 100, uid } = {}) {
    return this.find({ uid }).sort({ createdAt: -1 }).skip(skip).limit(limit).exec()
  },
}

export default mongoose.model('Todo', TodoSchema)
