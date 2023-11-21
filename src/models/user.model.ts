import { Document, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  otp?: number | null;
  isVerified: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(config.get<number>("saltFactor"));

  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;

  return next();
});

/**
 * Compare the entered password 
 * With the hashed one stored in DB
 *
 * @param {string} candidatePassword
 * @return {Promise<boolean>} 
 */
userSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  let user = this as UserDocument;

  return await bcrypt.compare(candidatePassword, user.password);
};

const User = model("User", userSchema)

export default User