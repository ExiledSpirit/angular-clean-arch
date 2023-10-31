import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "@data/http-services/http-service.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class httpClientImplementation extends HttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }

  override get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(endpoint);
  }

  override post<T>(endpoint: string, data: any): Observable<T> {
    return this.httpClient.post<T>(endpoint, data);
  }

  override put<T>(endpoint: string, data: any): Observable<T> {
    return this.httpClient.put<T>(endpoint, data);
  }

  override delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(endpoint);
  }
}
