import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  

export class PostService {  
  
  private url = 'https://jsonplaceholder.typicode.com/posts';  
 
  constructor(private http: HttpClient) { }  
  
  getPosts() {  
    return this.http.get(this.url);  
  }  
  
}  