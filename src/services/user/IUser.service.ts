import { UserDocument } from "../../models/user.model";
import { CreateUserInput } from "../../schemas/user.schemas";

interface IUserService {
    registerUser(input: CreateUserInput["body"]): Promise<UserDocument>
}

export default IUserService