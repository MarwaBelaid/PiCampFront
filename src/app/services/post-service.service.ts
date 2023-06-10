import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  getAllPosts(){
    console.log('hete')
    return this.http.get<Post[]>('http://127.0.0.1:8082/CampProject/posts/get/all');
    
  }
  
  createPost(post:FormData){
    console.log('adding');
    return this.http.post(`http://127.0.0.1:8082/CampProject/posts/create`,post);
  }
}
