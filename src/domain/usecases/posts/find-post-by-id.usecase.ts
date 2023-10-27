import { UseCase } from "@base/use-case";
import { PostModel } from "@domain/models/post.models";
import { PostRepository } from "@domain/repositories/post.repository";
import { Observable } from "rxjs";

export class FindPostByIdUseCase implements UseCase<number, PostModel> {
  constructor(private postRepository: PostRepository) { }

  execute(id: number): Observable<PostModel> {
    return this.postRepository.findPostById(id);
  }
}
