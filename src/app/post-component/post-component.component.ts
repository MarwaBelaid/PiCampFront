import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostServiceService } from '../services/post-service.service';
import { CommentServiceService } from '../services/comment-service.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts: any;
  likes: any
  commentVisible: boolean = false;
  idUser: any
  isFavorite: boolean = false;
  comment: any;
  commentData:any
  comments:any

  constructor(private dialog: MatDialog, private postService: PostServiceService, private commentService: CommentServiceService) { }

  ngOnInit(): void {
    this.readAllPosts();
    

  }
  toggleCommentVisibility(item: any) {
    item.commentVisible = !item.commentVisible;
  }

  toggleFavorite(item: any) {
    if (item.liked == false) {
      item.nbLike += 1;
    }
    item.liked = true
    this.postService.updateLike(item.id, item.liked, item.nbLike).subscribe(
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
        // console.log('datacomment',item.id)
        // this.getComment(item.id);
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
        console.log('here',this.posts);
      },
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
