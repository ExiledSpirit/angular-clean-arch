import { Component } from '@angular/core';
import { PostModel } from '@domain/models/post.models';
import { FindPostByIdUseCase } from '@domain/usecases/posts/find-post-by-id.usecase';
import { GetAllPostsUseCase } from '@domain/usecases/posts/get-all-posts.usecase';
import { BehaviorSubject, map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private errorSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  public error$ = this.errorSubject.asObservable();

  private postsSubject: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>([]);
  public posts$ = this.postsSubject.asObservable();

  title = 'app';

  constructor(private getAllPostsUseCase: GetAllPostsUseCase, private findPostByIdUseCase: FindPostByIdUseCase) { }

  public getAllPosts(): void {
    this.getAllPostsUseCase.execute()
      .pipe(take(1))
      .subscribe({
        next: (posts) => this.atualizarPosts(posts),
        error: (error) => this.errorSubject.next('Falha ao trazer todos os processos')
      })
  }

  public findPostById(id: string): void {
    this.findPostByIdUseCase.execute(id)
      .pipe(
        take(1),
        map((post) => [post])
      )
      .subscribe({
        next: (posts) => this.atualizarPosts(posts),
        error: (error) => this.errorSubject.next('ID não encontrado')
      })
  }

  public atualizarPosts(posts: PostModel[]) {
    this.errorSubject.next(null);
    this.postsSubject.next(posts);
  }
}
