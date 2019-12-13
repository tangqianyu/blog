import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user';
import { Post } from '../types/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: User) {
    return this.http.post('/user/login', data)
  }

  createPost(data: Post) {
    return this.http.post('/post', data)
  }

  getPostList(): Observable<Post[]> {
    return this.http.get<Post[]>('/post/all')
  }

  getPost(id: number):Observable<Post> {
    return this.http.get<Post>(`/post/${id}`)
  }

  removePost(id: number) {
    return this.http.delete(`/post/${id}`)
  }

  updatePost(id: number, data: Post) {
    return this.http.put(`/post/${id}`, data)
  }




}
