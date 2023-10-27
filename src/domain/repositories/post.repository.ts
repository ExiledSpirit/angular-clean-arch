import { PostModel, WritePostBody } from "@domain/models/post.models";
import { Observable } from "rxjs";

export abstract class PostRepository {
  abstract writePost(postBody: WritePostBody): Observable<PostModel>

  abstract findPostById(id: number): Observable<PostModel>

  abstract getAllPosts(): Observable<PostModel[]>
}
