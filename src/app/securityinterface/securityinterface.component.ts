import { Component, OnInit } from '@angular/core';
import { UserService } from '../Security/_services/user.service';

@Component({
  selector: 'app-securityinterface',
  templateUrl: './securityinterface.component.html',
  styleUrls: ['./securityinterface.component.css']
})
export class SecurityinterfaceComponent implements OnInit {

  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }
}
