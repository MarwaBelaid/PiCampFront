import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostServiceService } from '../services/post-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  imagePath: any;
  message: any;
  userFile: any;
  imgURL: any;
  addForm !: FormGroup;
  post: any
  erreur: any
  idUser: any



  constructor(private form: FormBuilder, private postService: PostServiceService) { }

  ngOnInit(): void {
    this.add();
  }

  add() {
    this.addForm = this.form.group({
      sujet: ['', Validators.required],
      contenu: ['', Validators.required],



    })
  }
  get f() {
    return this.addForm.controls;
  }
  addPost() {
    console.log('data', this.addForm.value, this.f)
    if (this.f['sujet'].hasError('required') || this.f['contenu'].hasError('required')) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'fields required!',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    } else {
      const formData = new FormData();

      formData.append('sujet', this.addForm.value.sujet);
      formData.append('contenu', this.addForm.value.contenu);
      formData.append('image_path', this.userFile);

      this.postService.createPost(formData, this.idUser = 1).subscribe(
        res => {
          this.post = res
          Swal.fire({
            icon: 'success',
            title: 'Post created successfully',
            // text: 'Something went wrong!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })

          setTimeout(function () { window.location.reload(); }, 3000);


        },
        err => {
          this.erreur = err
          console.log("erreur", this.erreur)
          let message = this.erreur && this.erreur.error && this.erreur.error.message && this.erreur.error.errors && this.erreur.error.errors.email[0]
          console.log('err', message)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })

        }
      )
      // }

    }




  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }





  // upload(idx: number, file: File): void {
  //   this.progressInfos[idx] = { value: 0, fileName: file.name };

  //   if (file) {
  //     // this.uploadService.upload(file).subscribe(
  //     // (event: any) => {
  //     //   if (event.type === HttpEventType.UploadProgress) {
  //     //     this.progressInfos[idx].value = Math.round(
  //     //       (100 * event.loaded) / event.total
  //     //     );
  //     //   } else if (event instanceof HttpResponse) {
  //     //     const msg = 'Uploaded the file successfully: ' + file.name;
  //     //     this.message.push(msg);
  //     //     // this.imageInfos = this.uploadService.getFiles();
  //     //   }
  //     // },
  //     // (err: any) => {
  //     //   this.progressInfos[idx].value = 0;
  //     //   const msg = 'Could not upload the file: ' + file.name;
  //     //   this.message.push(msg);
  //     // }
  //     // );
  //   }
  // }

  // uploadFiles(): void {
  //   this.message = [];

  //   if (this.selectedFiles) {
  //     for (let i = 0; i < this.selectedFiles.length; i++) {
  //       this.upload(i, this.selectedFiles[i]);
  //     }
  //   }
  // }
}





