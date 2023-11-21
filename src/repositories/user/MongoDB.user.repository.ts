import User, { UserDocument } from "../../models/user.model";
import IUserRepository from "./IUser.repository";

class MongoDBUserRepository implements IUserRepository {
  /**
   * Create a user
   *
   * @param {{ name: string; email: string; password: string; }} input
   * @return {*}  {Promise<UserDocument>}
   * @memberof MongoDBUserRepository
   */
  async createUser(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<UserDocument> {
    return await User.create(input);
  }

  /**
   * Get a single user
   *
   * @param {string} id
   * @return {*}  {(Promise<UserDocument | null>)}
   * @memberof MongoDBUserRepository
   */
  async findUserById(id: string): Promise<UserDocument | null> {
    return await User.findById(id);
  }

  /**
   * Get a single user
   *
   * @param {string} email
   * @return {*}  {(Promise<UserDocument | null>)}
   * @memberof MongoDBUserRepository
   */
  async findUserByEmail(email: string): Promise<UserDocument | null> {
    return await User.findOne({ email });
  }

  /**
   * Get users
   *
   * @return {*}  {Promise<UserDocument[]>}
   * @memberof MongoDBUserRepository
   */
  async findUsers(): Promise<UserDocument[]> {
    return await User.find();
  }

  /**
   * Delete user
   *
   * @param {string} id
   * @return {*}  {Promise<void>}
   * @memberof MongoDBUserRepository
   */
  async deleteUser(id: string): Promise<void> {
    await User.findById(id);
  }

  /**
   * Update user
   *
   * @param {string} id
   * @param {({ name: string | null; email: string | null; password: string | null; otp: number | null; isVerified: boolean | null; isValid: boolean | null; })} input
   * @return {*}  {Promise<void>}
   * @memberof MongoDBUserRepository
   */
  async updateUser(
    id: string,
    input: {
      name: string | null;
      email: string | null;
      password: string | null;
      otp: number | null;
      isVerified: boolean | null;
      isValid: boolean | null;
    }
  ): Promise<void> {
    await User.findByIdAndUpdate(id, input);
  }
}

export default MongoDBUserRepository;
