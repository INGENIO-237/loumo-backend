import { UserDocument } from "../../models/user.model";
import { CreateUserInput, UpdateUserInput } from "../../schemas/user.schemas";

interface IUserRepository {
  createUser(input: CreateUserInput["body"]): Promise<UserDocument>;

  findUserById(id: string): Promise<UserDocument | null>;
  findUserByEmail(email: string): Promise<UserDocument | null>;
  findUsers(): Promise<UserDocument[]>;
  deleteUser(id: string): Promise<void>;
  updateUser(
    id: string,
    input: UpdateUserInput["body"]
  ): Promise<void>;
}

export default IUserRepository;
