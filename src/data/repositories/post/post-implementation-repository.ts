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
export class PostImplementationRepository extends PostRepository {
  private postMapper = new PostImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  override writePost(postBody: WritePostBody): Observable<PostModel> {
    return this.http
      .post<PostEntity>('http://example.com/posts/write', postBody)
      .pipe(map(this.postMapper.mapFrom))
  }

  override findPostById(id: number): Observable<PostModel> {
    return this.http
      .get<PostEntity>(`http://example.com/posts/${id}`)
      .pipe(map(this.postMapper.mapFrom))
  }

  override getAllPosts(): Observable<PostModel[]> {
    return this.http
      .get<PostEntity[]>('http://example.com/posts')
      .pipe(map(postList => postList.map(this.postMapper.mapFrom)))
  }
}
