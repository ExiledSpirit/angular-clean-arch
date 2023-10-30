import { UseCase } from "@base/use-case";
import { PostModel } from "@domain/models/post.models";
import { PostRepository } from "@domain/repositories/post.repository";
import { Observable } from "rxjs";

export class FindPostByIdUseCase implements UseCase<string, PostModel> {
  constructor(private postRepository: PostRepository) { }

  execute(id: string): Observable<PostModel> {
    return this.postRepository.findPostById(id);
  }
}
