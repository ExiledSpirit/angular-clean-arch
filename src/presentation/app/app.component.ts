import { Component } from '@angular/core';
import { PostModel } from '@domain/models/post.models';
import { GetAllContactsUseCase } from '@domain/usecases/contact/get-all-contacts.usecase';
import { FindPostByIdUseCase } from '@domain/usecases/posts/find-post-by-id.usecase';
import { GetAllPostsUseCase } from '@domain/usecases/posts/get-all-posts.usecase';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private errorSubject: Subject<string | null> = new Subject();
  public error$ = this.errorSubject.asObservable();

  private postsSubject: Subject<PostModel[]> = new Subject();
  public posts$ = this.postsSubject.asObservable();

  title = 'app';

  constructor(private getAllPostsUseCase: GetAllPostsUseCase, private findPostByIdUseCase: FindPostByIdUseCase) {
    this.error$.subscribe((value) => console.log('error', value));
    this.posts$.subscribe((value) => console.log('posts', value));
  }

  public getAllPosts(): void {
    this.getAllPostsUseCase.execute().subscribe({
      next: (posts) => this.postsSubject.next(posts),
      error: (error) => {console.log('testeeee'); this.errorSubject.next('Falha ao trazer Posts')}
    });
  }

  public findPostById(id: string): void {
    this.findPostByIdUseCase.execute(id).subscribe({
      next: (post) => this.postsSubject.next([post]),
      error: (error) => {console.log('testeeee'); this.errorSubject.next('ID não encontrado')}
    });
  }

  public atualizarPosts(posts: PostModel[]) {
    console.log('teste1');
    this.errorSubject.next(null);
    this.postsSubject.next(posts);
  }
}
