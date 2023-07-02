import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostServiceService } from '../services/post-service.service';
import { CommentServiceService } from '../services/comment-service.service';
import { formatDate } from '@angular/common';



@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts: any;
  likes: any
  commentVisible: boolean = false;
  commentResponse: boolean = false;
  feedback1: boolean = false;
  feedback2: boolean = false;
  feedback3: boolean = false;
  idUser: any
  isFavorite: boolean = false;
  comment: any;
  commentData: any
  comments: any
  user: any

  constructor(private dialog: MatDialog, private postService: PostServiceService, private commentService: CommentServiceService) { }

  ngOnInit(): void {
    this.readAllPosts();



  }
  toggleCommentVisibility(item: any) {
    item.commentVisible = !item.commentVisible;
  }
  toggleCommentResponseVisibility(comment: any) {
    comment.commentResponse = !comment.commentResponse;
  }

  toggleFavorite(item: any) {
    if (item.liked == false) {
      item.nbLike += 1;
      item.liked = true
    } else {
      item.nbLike -= 1;
      item.liked = false
    }
    this.postService.updateLike(item.id, item.liked, item.nbLike).subscribe(
      result => {
        console.log(result);
     

      },
      error => {
        console.log(error);
      }
    );
  }
  likeComment(comment: any) {
    if (comment.liked == false) {
      comment.liked = true
    } else {
      comment.liked = false
    }

    this.commentService.updateLike(comment.id_commentaire, comment.liked).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    );
  }


  addComment(item: any) {

    this.commentService.addComment(this.comment, this.idUser = 1, item.id).subscribe(
      result => {
        const formattedDate = formatDate(new Date(), 'yyyy-MM-dd ', 'en-US');

        // Mettre à jour la liste des commentaires avec le nouveau commentaire
        item.commentaires.push({
          contenu_commentaire: this.comment,
          date_creation: formattedDate

        });

        // Réinitialiser la variable comment pour effacer le contenu du textarea
        this.comment = '';
      },
      error => {
        console.log(error);
      }

    )
  }

  addPost() {
    this.dialog.open(AddPostComponent, {
      width: '50%'

    })

  }
  readAllPosts() {

    this.postService.getAllPosts().subscribe(
      data => {
        this.posts = data;
        this.comments = this.posts.commentaires;
        console.log('here', this.posts);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateFeedback(item: any, rating: number) {

    this.postService.addFeedback(item.id, rating).subscribe(
      result => {
        console.log(result);
        setTimeout(function () { window.location.reload(); }, 3000);      },  
      error => {
        console.log(error);
  
      }
    );
    
  }
 
  

  dataURLtoFile(dataURL: string, filename: string): File {
    const arr = dataURL.split(',');
    const matchResult = arr[0].match(/:(.*?);/);
    const mime = matchResult ? matchResult[1] : '';

    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

}
