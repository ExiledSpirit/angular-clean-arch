import { NgModule, Provider } from "@angular/core";
import { PostRepository } from "@domain/repositories/post.repository";
import { FindPostByIdUseCase } from "@domain/usecases/posts/find-post-by-id.usecase";
import { GetAllPostsUseCase } from "@domain/usecases/posts/get-all-posts.usecase";
import { WritePostUseCase } from "@domain/usecases/posts/write-post.usecase";

const findPostByIdUseCaseFactory = (postRepo: PostRepository) => new FindPostByIdUseCase(postRepo);
export const findPostByIdUseCaseProvider: Provider = {
  provide: FindPostByIdUseCase,
  useFactory: findPostByIdUseCaseFactory,
  deps: [PostRepository],
}

const getAllPostsUseCaseFactory = (postRepo: PostRepository) => new GetAllPostsUseCase(postRepo);
export const getAllPostsUseCaseProvider: Provider = {
  provide: GetAllPostsUseCase,
  useFactory: getAllPostsUseCaseFactory,
  deps: [PostRepository],
}

const writePostUseCaseFactory = (postRepo: PostRepository) => new WritePostUseCase(postRepo);
export const writePostUseCaseProvider: Provider = {
  provide: WritePostUseCase,
  useFactory: writePostUseCaseFactory,
  deps: [PostRepository],
}

@NgModule({
  providers: [
    findPostByIdUseCaseProvider,
    getAllPostsUseCaseProvider,
    writePostUseCaseProvider,
  ],
})
export class PostUsecasesModule { }
