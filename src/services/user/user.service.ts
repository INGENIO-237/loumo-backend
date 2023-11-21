import { UserDocument } from "../../models/user.model";
import IUserRepository from "../../repositories/user/IUser.repository";
import MongoDBUserRepository from "../../repositories/user/MongoDB.user.repository";
import IUserService from "./IUser.service";

class UserService implements IUserService {
  private _repository: IUserRepository;

  constructor() {
    this._repository = new MongoDBUserRepository();
  }

  /**
   * Register a new user
   *
   * @param {{
   *     name: string;
   *     email: string;
   *     password: string;
   *   }} input
   * @return {*}  {Promise<UserDocument>}
   * @memberof UserService
   */
  async registerUser(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<UserDocument> {
    
    return await this._repository.createUser(input);
  }
}

export default UserService;
