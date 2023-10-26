import { Mapper } from "src/base/mapper";
import { UserEntity } from "../entities/user-entity";

export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
  override mapFrom(param: UserEntity) {
    throw new Error("Method not implemented.");
  }

  override mapTo(param: UserModel) {
    throw new Error("Method not implemented.");
  }
}
