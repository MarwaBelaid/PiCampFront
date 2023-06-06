import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addPost(){

  //   if(this.f.name.hasError('required' )  || this.f.email.hasError('required')|| this.f.grade.hasError('required')
  //  || this.f.company_id.hasError('required')){
  //     this.toast.error({detail:"Error Message",summary:"please fill all the blanks!",duration:5000})
  //   }else{
    this.P.addUser(this.addForm.value).subscribe(
      res=>{
        this.user=res
        console.log('res',this.user)

        this.toast.success({detail:"Success Message",summary:this.user.message,duration:5000})
        setTimeout(function(){window.location.reload(); }, 6000);


    },
    err=>{
      this.erreur=err
      console.log("erreur",this.erreur)
      let message= this.erreur && this.erreur.error && this.erreur.error.message && this.erreur.error.errors && this.erreur.error.errors.email[0]
      console.log('err', message)
      this.toast.error({detail:"Error Message",summary:message,duration:5000})

    }
    )
  // }



  }




}
