import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestfulService {

  constructor(
    private http: HttpClient
  ) { }

    getPostList(){
      return 
    }

}
