import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.base_url}/posts`)
  }

  getPostById(id: number): Observable<Post> {
    const url = `${environment.base_url}/posts/${id}`
    return this.http.get<Post>(url)
  }

  editPost(post: Post): Observable<Post> {
    const url = `${environment.base_url}/posts/${post.id}`;
    return this.http.patch<Post>(url, { title: post.title, body: post.body })
  }
  deletePost(post: Post): Observable<Post> {
    const url = `${environment.base_url}/posts/${post.id}`
    return this.http.delete<Post>(url)
  }
}
