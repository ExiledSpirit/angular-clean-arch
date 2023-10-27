import { UseCase } from "@base/use-case";
import { PostModel, WritePostBody } from "@domain/models/post.models";
import { PostRepository } from "@domain/repositories/post.repository";
import { Observable } from "rxjs";

export class WritePostUseCase implements UseCase<WritePostBody, PostModel> {
  constructor(private postRepository: PostRepository) { }

  execute(writePostBody: WritePostBody): Observable<PostModel> {
    return this.postRepository.writePost(writePostBody);
  }
}
