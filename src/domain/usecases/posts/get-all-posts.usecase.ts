import { UseCase } from "@base/use-case";
import { PostModel } from "@domain/models/post.models";
import { PostRepository } from "@domain/repositories/post.repository";
import { Observable } from "rxjs";

export class GetAllPostsUseCase implements UseCase<void, PostModel[]> {
  constructor(private postRepository: PostRepository) { }

  execute(): Observable<PostModel[]> {
    return this.postRepository.getAllPosts();
  }
}
