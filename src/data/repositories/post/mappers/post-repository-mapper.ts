import { Mapper } from "@base/mapper"
import { PostEntity } from "@data/repositories/post/entities/post-entity"
import { PostModel } from "@domain/models/post.models"

export class PostImplementationRepositoryMapper extends Mapper<PostEntity, PostModel> {
  override mapFrom(param: PostEntity): PostModel {
    return param
  }

  override mapTo(param: PostModel): PostEntity {
    return param
  }
}
