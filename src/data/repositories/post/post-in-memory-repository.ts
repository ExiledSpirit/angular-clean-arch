import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PostEntity } from "@data/repositories/post/entities/post-entity";
import { PostImplementationRepositoryMapper } from "@data/repositories/post/mappers/post-repository-mapper";
import { PostModel, WritePostBody } from "@domain/models/post.models";
import { PostRepository } from "@domain/repositories/post.repository";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PostInMemoryRepository extends PostRepository {
  private imgSrc = 'https://i.ytimg.com/vi/aJzwUlLaF0c/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCXbg9i7-mKsZ2T5-MMK_3Ko5nTsQ';

  private postLists: PostModel[] = [];

  private postMapper = new PostImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
    this.preencherLista();
  }

  private preencherLista() {
    this.postLists = [
        {
          id: '1',
          author: 'Gabriel Gonçalves 1',
          content: 'Conteúdo',
          createdAt: 'Criado em',
          imgSrc: this.imgSrc,
          tags: 'Tsgs'
        },
        {
          id: '2',
          author: 'Gabriel Gonçalves 2',
          content: 'Conteúdo 2',
          createdAt: 'Criado em',
          imgSrc: this.imgSrc,
          tags: 'Tsgs'
        },
        {
          id: '3',
          author: 'Gabriel Gonçalves 3',
          content: 'Conteúdo',
          createdAt: 'Criado em',
          imgSrc: this.imgSrc,
          tags: 'Tsgs'
        },
    ]
  }

  override writePost(postBody: WritePostBody): Observable<PostModel> {
    return this.http
      .post<PostEntity>('http://example.com/posts/write', postBody)
      .pipe(map(this.postMapper.mapFrom))
  }

  override findPostById(id: string): Observable<PostModel> {
    return new Observable((observer) => {
        const foundPost = this.postLists.find((post => post.id === id))
        if (!foundPost) throw new Error('Não Encontrado');
        observer.next(foundPost);
    })
  }

  override getAllPosts(): Observable<PostModel[]> {
    console.log('teste');
    return new Observable((observer) => observer.next(this.postLists));
  }
}
