import { Observable } from 'rxjs';

export abstract class HttpService {
  abstract get<T>(endpoint: string): Observable<T>;

  abstract post<T>(endpoint: string, data: any): Observable<T>;

  abstract put<T>(endpoint: string, data: any): Observable<T>;

  abstract delete<T>(endpoint: string): Observable<T>;
}
