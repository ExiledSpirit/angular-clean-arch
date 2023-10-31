import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, Provider } from "@angular/core";
import { httpClientImplementation } from "@data/http-services/http-client.implementation";
import { HttpService } from "@data/http-services/http-service.interface";
import { ContactImplementationRepository } from "@data/repositories/contact/contact-implementation-repository";
import { PostImplementationRepository } from "@data/repositories/post/post-implementation-repository";
import { ContactRepository } from "@domain/repositories/contact.repository";
import { PostRepository } from "@domain/repositories/post.repository";
import { GetAllContactsUseCase } from "@domain/usecases/contact/get-all-contacts.usecase";
import { FindPostByIdUseCase } from "@domain/usecases/posts/find-post-by-id.usecase";
import { GetAllPostsUseCase } from "@domain/usecases/posts/get-all-posts.usecase";
import { WritePostUseCase } from "@domain/usecases/posts/write-post.usecase";

const getAllContactsUseCaseFactory = (contactRepo: ContactRepository) => new GetAllContactsUseCase(contactRepo);
export const getAllContactsUseCaseProvider: Provider = {
  provide: GetAllContactsUseCase,
  useFactory: getAllContactsUseCaseFactory,
  deps: [ContactRepository]
}

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
    getAllContactsUseCaseProvider,
    findPostByIdUseCaseProvider,
    getAllPostsUseCaseProvider,
    writePostUseCaseProvider,
    {
      provide: ContactRepository,
      useExisting: ContactImplementationRepository
    },
    {
      provide: PostRepository,
      useExisting: PostImplementationRepository
    },
    {
      provide: HttpService,
      useExisting: httpClientImplementation
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class DataModule { }
