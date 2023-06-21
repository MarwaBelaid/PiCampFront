import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from 'src/models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceService {

  constructor(private http: HttpClient) { }
  addComment(comment: Commentaire, idUser = 1, idPost: any) {

    return this.http.post(`http://127.0.0.1:8082/CampProject/comments/create/${idUser}/${idPost}`
      , {
        "contenu_commentaire": comment,
        "date_creation": new Date()
      }); 

  }
  getCommentById(idComment:any){
    return this.http.get<Comment[]>(`http://127.0.0.1:8082/CampProject/comments/get/all/${idComment}`);
    
  }
}
