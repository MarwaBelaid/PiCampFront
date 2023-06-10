import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { AddPostComponent } from '../add-post/add-post.component';
import { PostServiceService } from '../services/post-service.service';
import { NgxImageCompressService } from 'ngx-image-compress';
@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts :any;
  constructor(private sanitizer: DomSanitizer,private dialog:MatDialog, private postService:PostServiceService,private imageCompress: NgxImageCompressService) { }

  ngOnInit(): void {
    this.readAllPosts();
  }

  
  addPost(){
    this.dialog.open(AddPostComponent,{
      width:'50%'

    })

  }
  readAllPosts() {
    console.log('done');
    this.postService.getAllPosts().subscribe(
      data => {
        this.posts = data;
        console.log('dataaaaaaaaa', this.posts[0].imagePath);
  
      },
      error => {
        console.log(error);
      }
    );
  }
  
  getSafeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  // compressImages(): void {
  //   for (const post of this.posts) {
  //     const imageFile = post.picture; // Utilisez la propriété "picture" de votre objet post
  //     const fileName = 'compressed_image.jpg'; // Définissez le nom de fichier souhaité
  
  //     const img = new Image();
  //     img.src = imageFile;
  
  //     img.onload = () => {
  //       this.imageCompress.compressFile(imageFile, -1, 75, 75).then(
  //         (result: string) => {
  //           // Mettre à jour la propriété "picture" avec l'image compressée
  //           post.picture = this.dataURLtoFile(result, fileName);
  //         }
  //       ).catch(
  //         (error) => {
  //           console.error('Erreur lors de la compression de l\'image :', error);
  //         }
  //       );
  //     };
  
  //     img.onerror = (errorEvent) => {
  //       console.error('Erreur lors du chargement de l\'image :', errorEvent);
  //     };
  //   }
  // }
  compressImages(): void {
    for (const post of this.posts) {
      const imageFile = post.picture; // Utilisez la propriété "picture" de votre objet post
      const fileName = 'compressed_image.jpg'; // Définissez le nom de fichier souhaité
  
      const decodedImage = atob(imageFile);
      const blob = new Blob([decodedImage], { type: 'image/jpeg' });
      const url = URL.createObjectURL(blob);
      const safeImageUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
      // Mettre à jour la propriété "picture" avec l'URL sécurisée de l'image
      post.picture = safeImageUrl;
    }
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
