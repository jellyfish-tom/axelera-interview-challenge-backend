import mongoose from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['user', 'agent', 'admin'], default: 'user' },
})

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })

export default mongoose.model('User', UserSchema)
